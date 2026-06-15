import { createFileRoute, Link } from '@tanstack/react-router'
import { useState } from 'react'
import { useCart } from '@/context/CartContext'

export const Route = createFileRoute('/checkout')({
  component: CheckoutPage,
})

function CheckoutPage() {
  const { items, totalPrice, clearCart } = useCart()
  const [step, setStep] = useState<'form' | 'success'>('form')
  const [sending, setSending] = useState(false)
  const [form, setForm] = useState({
    ime: '', prezime: '', email: '', telefon: '',
    adresa: '', grad: '', napomena: '',
  })

  if (items.length === 0 && step !== 'success') {
    return (
      <main>
        <section style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#FAF7F2' }}>
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '2rem', color: '#1E3A2F', marginBottom: '1rem' }}>
              Korpa je prazna
            </h2>
            <Link to="/proizvodi" className="btn-luxury btn-primary" style={{ textDecoration: 'none' }}>
              Istraži kolekciju
            </Link>
          </div>
        </section>
      </main>
    )
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)
    await new Promise((r) => setTimeout(r, 1000))
    setSending(false)
    clearCart()
    setStep('success')
  }

  if (step === 'success') {
    return (
      <main>
        <section style={{ background: '#FAF7F2', minHeight: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ maxWidth: '540px', width: '100%', margin: '0 auto', padding: '3rem 2rem', textAlign: 'center' }}>
            <div style={{ width: '64px', height: '64px', background: '#1E3A2F', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
              <span style={{ color: '#BF9B5E', fontSize: '1.5rem' }}>✦</span>
            </div>
            <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '2.25rem', color: '#1E3A2F', marginBottom: '1rem' }}>
              Hvala vam!
            </h1>
            <div className="line-gold" style={{ margin: '0 auto 1.5rem' }} />
            <p style={{ color: '#6B6258', lineHeight: '1.8', marginBottom: '0.75rem', fontSize: '0.9375rem' }}>
              Vaša porudžbina je primljena. Javićemo vam se u roku od 24 sata na email <strong>{form.email}</strong> ili na broj <strong>{form.telefon}</strong>.
            </p>
            <p style={{ color: '#6B6258', lineHeight: '1.8', marginBottom: '2.5rem', fontSize: '0.9375rem' }}>
              U međuvremenu, slobodno nas kontaktirajte na WhatsApp ili email sa svim pitanjima.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/" className="btn-luxury btn-primary" style={{ textDecoration: 'none' }}>
                Nazad na početnu
              </Link>
              <a href="https://wa.me/381603318319" target="_blank" rel="noopener noreferrer" className="btn-luxury btn-gold" style={{ textDecoration: 'none' }}>
                WhatsApp →
              </a>
            </div>
          </div>
        </section>
      </main>
    )
  }

  return (
    <main>
      <section style={{ background: '#F3EDE3', padding: '4rem 0 2.5rem', textAlign: 'center' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="section-label mb-3">Poslednji korak</div>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#1E3A2F' }}>
            Završi porudžbinu
          </h1>
        </div>
      </section>

      <section style={{ background: '#FAF7F2', padding: '4rem 0' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '2rem' }}>
                <div className="section-label" style={{ marginBottom: '1rem' }}>Podaci za dostavu</div>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { key: 'ime', label: 'Ime', col: 1 },
                    { key: 'prezime', label: 'Prezime', col: 1 },
                  ].map(({ key, label }) => (
                    <div key={key}>
                      <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#1E3A2F', marginBottom: '0.4rem' }}>
                        {label} *
                      </label>
                      <input
                        required
                        value={(form as any)[key]}
                        onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                        style={{ width: '100%', padding: '0.75rem 1rem', border: '1.5px solid #E5DDD3', background: '#FFFFFF', fontFamily: 'Inter, sans-serif', fontSize: '0.9rem', outline: 'none' }}
                        onFocus={(e) => { e.target.style.borderColor = '#BF9B5E' }}
                        onBlur={(e) => { e.target.style.borderColor = '#E5DDD3' }}
                      />
                    </div>
                  ))}
                </div>

                {[
                  { key: 'email', label: 'Email adresa', type: 'email' },
                  { key: 'telefon', label: 'Telefon', type: 'tel' },
                  { key: 'adresa', label: 'Adresa', type: 'text' },
                  { key: 'grad', label: 'Grad', type: 'text' },
                ].map(({ key, label, type }) => (
                  <div key={key} style={{ marginTop: '1rem' }}>
                    <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#1E3A2F', marginBottom: '0.4rem' }}>
                      {label} *
                    </label>
                    <input
                      type={type}
                      required
                      value={(form as any)[key]}
                      onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                      style={{ width: '100%', padding: '0.75rem 1rem', border: '1.5px solid #E5DDD3', background: '#FFFFFF', fontFamily: 'Inter, sans-serif', fontSize: '0.9rem', outline: 'none' }}
                      onFocus={(e) => { e.target.style.borderColor = '#BF9B5E' }}
                      onBlur={(e) => { e.target.style.borderColor = '#E5DDD3' }}
                    />
                  </div>
                ))}

                <div style={{ marginTop: '1rem' }}>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#1E3A2F', marginBottom: '0.4rem' }}>
                    Napomena (opciono)
                  </label>
                  <textarea
                    rows={3}
                    value={form.napomena}
                    onChange={(e) => setForm({ ...form, napomena: e.target.value })}
                    placeholder="Posebni zahtevi, pitanja o boji, veličini..."
                    style={{ width: '100%', padding: '0.75rem 1rem', border: '1.5px solid #E5DDD3', background: '#FFFFFF', fontFamily: 'Inter, sans-serif', fontSize: '0.9rem', outline: 'none', resize: 'vertical' }}
                    onFocus={(e) => { e.target.style.borderColor = '#BF9B5E' }}
                    onBlur={(e) => { e.target.style.borderColor = '#E5DDD3' }}
                  />
                </div>
              </div>

              <div style={{ padding: '1.25rem', background: '#F3EDE3', border: '1px solid #E5DDD3', marginBottom: '1.75rem', fontSize: '0.875rem', color: '#6B6258', lineHeight: '1.7' }}>
                <strong style={{ color: '#1E3A2F', display: 'block', marginBottom: '0.25rem' }}>Plaćanje i dostava</strong>
                Plaćanje se vrši pouzećem pri preuzimanju ili dogovorom putem WhatsApp-a. Dostava se organizuje individualno — kontaktiraćemo vas sa detaljima.
              </div>

              <button
                type="submit"
                disabled={sending}
                className="btn-luxury btn-primary"
                style={{ width: '100%', opacity: sending ? 0.7 : 1 }}
              >
                {sending ? 'Šaljem porudžbinu...' : 'Pošalji porudžbinu'}
              </button>
            </form>

            {/* Order Summary */}
            <div style={{ position: 'sticky', top: '90px' }}>
              <div style={{ background: '#FFFFFF', border: '1px solid #E5DDD3', padding: '2rem' }}>
                <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.375rem', color: '#1E3A2F', marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid #E5DDD3' }}>
                  Pregled
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem' }}>
                  {items.map((item) => (
                    <div key={item.product.id} className="flex gap-3 items-center">
                      <div style={{ width: '60px', height: '75px', flexShrink: 0, overflow: 'hidden' }}>
                        <img src={item.product.image} alt={item.product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      </div>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '0.9375rem', color: '#1A1A1A', marginBottom: '0.25rem' }}>{item.product.name}</div>
                        <div style={{ fontSize: '0.8125rem', color: '#6B6258' }}>Kol: {item.quantity}</div>
                      </div>
                      <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#1E3A2F', whiteSpace: 'nowrap' }}>
                        {(item.product.price * item.quantity).toLocaleString('sr-RS')} RSD
                      </div>
                    </div>
                  ))}
                </div>
                <div style={{ borderTop: '1px solid #E5DDD3', paddingTop: '1rem' }}>
                  <div className="flex justify-between" style={{ fontSize: '1.125rem', fontWeight: 700, color: '#1E3A2F' }}>
                    <span style={{ fontFamily: 'Playfair Display, serif' }}>Ukupno</span>
                    <span>{totalPrice.toLocaleString('sr-RS')} RSD</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
