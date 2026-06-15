import { Link, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/checkout/cancel')({
  component: CheckoutCancel,
})

function CheckoutCancel() {
  return (
    <main>
      <section style={{ background: '#FAF7F2', minHeight: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ maxWidth: '540px', width: '100%', margin: '0 auto', padding: '3rem 2rem', textAlign: 'center' }}>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '2.25rem', color: '#1E3A2F', marginBottom: '1rem' }}>
            Odustali ste
          </h1>
          <div style={{ width: '48px', height: '2px', background: '#BF9B5E', margin: '0 auto 1.5rem' }} />
          <p style={{ color: '#6B6258', lineHeight: '1.8', marginBottom: '2.5rem' }}>
            Porudžbina je otkazana. Vaša korpa je sačuvana — možete nastaviti kupovinu kada budete spremni.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/korpa" className="btn-luxury btn-primary" style={{ textDecoration: 'none' }}>
              Nazad u korpu
            </Link>
            <Link to="/proizvodi" className="btn-luxury btn-outline" style={{ textDecoration: 'none' }}>
              Nastavi kupovinu
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
