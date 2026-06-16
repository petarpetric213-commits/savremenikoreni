import type { Context } from '@netlify/functions'

/**
 * Triggered automatically by Netlify when the "porudzbina" (order) form is
 * submitted. It sends two emails through Resend:
 *   1. a thank-you confirmation to the buyer
 *   2. the full order details to the shop owner
 *
 * Email sending is enabled by setting the RESEND_API_KEY environment variable
 * in the Netlify project settings. Without it, the submission is still stored
 * by Netlify Forms (and the owner can be notified via the Netlify UI form
 * notifications) — this function simply logs and exits.
 */

const OWNER_EMAIL = 'savremenikoreni@gmail.com'
const FROM_EMAIL = process.env.EMAIL_FROM ?? 'Savremeni Koreni <onboarding@resend.dev>'

interface FormPayload {
  form_name?: string
  data?: Record<string, string>
}

async function sendEmail(apiKey: string, to: string, subject: string, html: string, replyTo?: string) {
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ from: FROM_EMAIL, to, subject, html, reply_to: replyTo }),
  })

  if (!res.ok) {
    console.error('Resend error', res.status, await res.text())
  }
  return res.ok
}

function esc(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

export default async (req: Request, _context: Context) => {
  let data: Record<string, string> = {}
  try {
    const body = (await req.json()) as { payload?: FormPayload }
    if (body.payload?.form_name && body.payload.form_name !== 'porudzbina') {
      return new Response('Ignored', { status: 200 })
    }
    data = body.payload?.data ?? {}
  } catch (err) {
    console.error('Could not parse submission payload', err)
    return new Response('Bad payload', { status: 200 })
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.log('RESEND_API_KEY not set — skipping email send. Order data:', data)
    return new Response('OK (email disabled)', { status: 200 })
  }

  const ime = data.ime ?? ''
  const prezime = data.prezime ?? ''
  const fullName = `${ime} ${prezime}`.trim() || 'kupac'
  const stavke = (data.porudzbina ?? '')
    .split('\n')
    .filter(Boolean)
    .map((line) => `<li>${esc(line)}</li>`)
    .join('')

  // 1. Confirmation to the buyer
  if (data.email) {
    const buyerHtml = `
      <div style="font-family:Georgia,serif;color:#1E3A2F;max-width:560px;margin:0 auto;">
        <h1 style="color:#1E3A2F;">Hvala na porudžbini, ${esc(ime) || 'dragi kupče'}!</h1>
        <p style="color:#4A4A4A;line-height:1.7;">
          Vaša porudžbina kod <strong>Savremeni Koreni</strong> je uspešno primljena.
          Javićemo vam se u najkraćem roku radi dogovora o dostavi i plaćanju.
        </p>
        <h3 style="color:#BF9B5E;">Vaša porudžbina</h3>
        <ul style="color:#4A4A4A;line-height:1.7;">${stavke || '<li>—</li>'}</ul>
        <p style="color:#1E3A2F;font-weight:bold;">Ukupno: ${esc(data.ukupno ?? '')}</p>
        <p style="color:#6B6258;font-size:13px;margin-top:24px;">
          Ako imate pitanja, odgovorite na ovaj email ili nas kontaktirajte na ${OWNER_EMAIL}.
        </p>
      </div>`
    await sendEmail(apiKey, data.email, 'Hvala na porudžbini — Savremeni Koreni', buyerHtml, OWNER_EMAIL)
  }

  // 2. Order details to the shop owner
  const ownerHtml = `
    <div style="font-family:Arial,sans-serif;color:#1A1A1A;max-width:560px;margin:0 auto;">
      <h2>Nova porudžbina</h2>
      <p><strong>Kupac:</strong> ${esc(fullName)}</p>
      <p><strong>Email:</strong> ${esc(data.email ?? '')}</p>
      <p><strong>Telefon:</strong> ${esc(data.telefon ?? '')}</p>
      <p><strong>Adresa:</strong> ${esc(data.adresa ?? '')}, ${esc(data.grad ?? '')}</p>
      <p><strong>Napomena:</strong> ${esc(data.napomena ?? '') || '—'}</p>
      <h3>Stavke</h3>
      <ul>${stavke || '<li>—</li>'}</ul>
      <p><strong>Ukupno:</strong> ${esc(data.ukupno ?? '')}</p>
    </div>`
  await sendEmail(apiKey, OWNER_EMAIL, `Nova porudžbina — ${fullName}`, ownerHtml, data.email)

  return new Response('OK', { status: 200 })
}
