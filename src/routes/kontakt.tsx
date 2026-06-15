import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/kontakt')({
  component: KontaktPage,
})

function KontaktPage() {
  const [form, setForm] = useState({ ime: '', email: '', telefon: '', poruka: '' })
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)
    // Simulate send delay
    await new Promise((r) => setTimeout(r, 800))
    setSending(false)
    setSent(true)
  }

  return (
    <main>
      {/* Header */}
      <section style={{ background: '#F3EDE3', padding: '5rem 0 3rem', textAlign: 'center' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="section-label mb-4">Pišite nam</div>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2.25rem, 5vw, 3.5rem)', fontWeight: 500, color: '#1E3A2F', marginBottom: '1rem' }}>
            Kontakt
          </h1>
          <div className="line-gold" style={{ margin: '0 auto' }} />
        </div>
      </section>

      <section style={{ background: '#FAF7F2', padding: '5rem 0' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            {/* Info */}
            <div>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.875rem', color: '#1E3A2F', marginBottom: '1.5rem' }}>
                Razgovarajmo
              </h2>
              <p style={{ color: '#6B6258', fontSize: '0.9375rem', lineHeight: '1.85', marginBottom: '2.5rem' }}>
                Svaka porudžbina je posebna priča. Napišite nam, javimo se u roku od 24 sata i zajedno osmišljavamo komad koji će biti vaš zauvek.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2.5rem' }}>
                {[
                  {
                    icon: '✉',
                    label: 'Email',
                    value: 'hom.jagode@gmail.com',
                    href: 'mailto:hom.jagode@gmail.com',
                  },
                  {
                    icon: '☏',
                    label: 'Telefon / WhatsApp',
                    value: '060 331 8319',
                    href: 'tel:+381603318319',
                  },
                ].map(({ icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-4">
                    <span style={{ fontSize: '1.25rem', color: '#BF9B5E', minWidth: '24px', marginTop: '2px' }}>{icon}</span>
                    <div>
                      <div style={{ fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#BF9B5E', marginBottom: '0.25rem' }}>
                        {label}
                      </div>
                      <a href={href} style={{ color: '#1A1A1A', textDecoration: 'none', fontSize: '1rem', fontFamily: 'Playfair Display, serif' }}
                        className="hover:text-[#BF9B5E] transition-colors">
                        {value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ padding: '1.75rem', background: '#1E3A2F' }}>
                <div className="section-label" style={{ color: '#BF9B5E', marginBottom: '0.75rem' }}>Radno vreme</div>
                <p style={{ color: 'rgba(250,247,242,0.8)', fontSize: '0.9rem', lineHeight: '1.8' }}>
                  Pon – Pet: 9:00 – 18:00<br />
                  Subota: 10:00 – 14:00<br />
                  <span style={{ fontSize: '0.8125rem', opacity: 0.6 }}>Nedela: odmor (i pletenje 🧶)</span>
                </p>
              </div>
            </div>

            {/* Form */}
            <div style={{ background: '#FFFFFF', border: '1px solid #E5DDD3', padding: '2.5rem' }}>
              {sent ? (
                <div style={{ textAlign: 'center', padding: '3rem 0' }}>
                  <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✦</div>
                  <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.75rem', color: '#1E3A2F', marginBottom: '1rem' }}>
                    Hvala vam!
                  </h3>
                  <p style={{ color: '#6B6258', lineHeight: '1.8' }}>
                    Vaša poruka je primljena. Javićemo vam se u roku od 24 sata.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', color: '#1E3A2F', marginBottom: '2rem' }}>
                    Pošaljite poruku
                  </h3>

                  {[
                    { key: 'ime', label: 'Ime i prezime', type: 'text', required: true },
                    { key: 'email', label: 'Email adresa', type: 'email', required: true },
                    { key: 'telefon', label: 'Telefon (opciono)', type: 'tel', required: false },
                  ].map(({ key, label, type, required }) => (
                    <div key={key} style={{ marginBottom: '1.25rem' }}>
                      <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#1E3A2F', marginBottom: '0.5rem' }}>
                        {label}
                      </label>
                      <input
                        type={type}
                        required={required}
                        value={(form as any)[key]}
                        onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                        style={{
                          width: '100%', padding: '0.75rem 1rem',
                          border: '1.5px solid #E5DDD3', background: '#FAF7F2',
                          fontFamily: 'Inter, sans-serif', fontSize: '0.9rem', color: '#1A1A1A',
                          outline: 'none', transition: 'border-color 0.2s',
                        }}
                        onFocus={(e) => { e.target.style.borderColor = '#BF9B5E' }}
                        onBlur={(e) => { e.target.style.borderColor = '#E5DDD3' }}
                      />
                    </div>
                  ))}

                  <div style={{ marginBottom: '2rem' }}>
                    <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#1E3A2F', marginBottom: '0.5rem' }}>
                      Poruka
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={form.poruka}
                      onChange={(e) => setForm({ ...form, poruka: e.target.value })}
                      placeholder="Opišite šta tražite, posebne zahteve, ili jednostavno pozdravite..."
                      style={{
                        width: '100%', padding: '0.75rem 1rem',
                        border: '1.5px solid #E5DDD3', background: '#FAF7F2',
                        fontFamily: 'Inter, sans-serif', fontSize: '0.9rem', color: '#1A1A1A',
                        outline: 'none', resize: 'vertical', transition: 'border-color 0.2s',
                      }}
                      onFocus={(e) => { e.target.style.borderColor = '#BF9B5E' }}
                      onBlur={(e) => { e.target.style.borderColor = '#E5DDD3' }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={sending}
                    className="btn-luxury btn-primary"
                    style={{ width: '100%', opacity: sending ? 0.7 : 1 }}
                  >
                    {sending ? 'Šaljem...' : 'Pošalji poruku'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
