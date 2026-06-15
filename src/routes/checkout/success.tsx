import { Link, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/checkout/success')({
  component: CheckoutSuccess,
})

function CheckoutSuccess() {
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
          <div style={{ width: '48px', height: '2px', background: '#BF9B5E', margin: '0 auto 1.5rem' }} />
          <p style={{ color: '#6B6258', lineHeight: '1.8', marginBottom: '2.5rem', fontSize: '0.9375rem' }}>
            Vaša porudžbina je uspešno primljena. Javićemo vam se u roku od 24 sata sa detaljima isporuke.
          </p>
          <Link to="/" className="btn-luxury btn-primary" style={{ textDecoration: 'none' }}>
            Nazad na početnu
          </Link>
        </div>
      </section>
    </main>
  )
}
