import { createFileRoute, Link } from '@tanstack/react-router'
import { useCart } from '@/context/CartContext'

export const Route = createFileRoute('/korpa')({
  component: KorpaPage,
})

function KorpaPage() {
  const { items, removeItem, updateQuantity, totalPrice, totalItems } = useCart()

  if (items.length === 0) {
    return (
      <main>
        <section style={{ background: '#FAF7F2', minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ textAlign: 'center', padding: '4rem 2rem' }}>
            <div style={{ fontSize: '4rem', marginBottom: '1.5rem', opacity: 0.3 }}>
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#1E3A2F" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" style={{ margin: '0 auto' }}>
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <path d="M16 10a4 4 0 0 1-8 0"/>
              </svg>
            </div>
            <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '2rem', color: '#1E3A2F', marginBottom: '1rem' }}>
              Vaša korpa je prazna
            </h1>
            <p style={{ color: '#6B6258', marginBottom: '2rem', fontSize: '0.9375rem' }}>
              Istražite našu kolekciju i pronađite nešto posebno.
            </p>
            <Link to="/proizvodi" className="btn-luxury btn-primary" style={{ textDecoration: 'none' }}>
              Istraži kolekciju
            </Link>
          </div>
        </section>
      </main>
    )
  }

  return (
    <main>
      <section style={{ background: '#F3EDE3', padding: '4rem 0 2.5rem', textAlign: 'center' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="section-label mb-3">
            {totalItems} {totalItems === 1 ? 'komad' : totalItems < 5 ? 'komada' : 'komada'}
          </div>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#1E3A2F' }}>
            Vaša korpa
          </h1>
        </div>
      </section>

      <section style={{ background: '#FAF7F2', padding: '4rem 0' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            {/* Items */}
            <div className="lg:col-span-2" style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: '#E5DDD3' }}>
              {/* Header */}
              <div style={{ background: '#FAF7F2', padding: '0.75rem 1.25rem', display: 'none' }} className="hidden md:grid grid-cols-12 gap-4">
                {['Proizvod', '', 'Kol.', 'Ukupno'].map((h, i) => (
                  <div key={i} className={i === 0 ? 'col-span-5' : i === 1 ? 'col-span-3' : 'col-span-2'} style={{ fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#6B6258' }}>
                    {h}
                  </div>
                ))}
              </div>

              {items.map((item) => (
                <div key={item.product.id} style={{ background: '#FFFFFF', padding: '1.5rem', display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '80px', height: '100px', flexShrink: 0, overflow: 'hidden' }}>
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div className="section-label" style={{ marginBottom: '0.2rem' }}>
                      {item.product.category === 'torbice' ? 'Torbice' : 'Pleteno'}
                    </div>
                    <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.0625rem', color: '#1E3A2F', marginBottom: '0.75rem' }}>
                      {item.product.name}
                    </h3>
                    <div className="flex items-center gap-4 flex-wrap">
                      {/* Quantity */}
                      <div style={{ display: 'flex', alignItems: 'center', border: '1.5px solid #E5DDD3' }}>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          style={{ width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'none', border: 'none', cursor: 'pointer', color: '#6B6258', fontSize: '1rem' }}
                        >
                          −
                        </button>
                        <span style={{ width: '36px', textAlign: 'center', fontSize: '0.9rem', fontWeight: 500 }}>
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          style={{ width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'none', border: 'none', cursor: 'pointer', color: '#6B6258', fontSize: '1rem' }}
                        >
                          +
                        </button>
                      </div>

                      <span style={{ fontSize: '1rem', fontWeight: 600, color: '#1E3A2F' }}>
                        {(item.product.price * item.quantity).toLocaleString('sr-RS')} RSD
                      </span>

                      <button
                        onClick={() => removeItem(item.product.id)}
                        style={{ marginLeft: 'auto', background: 'none', border: 'none', cursor: 'pointer', color: '#B0A89E', fontSize: '0.8rem', textDecoration: 'underline' }}
                      >
                        Ukloni
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div style={{ background: '#FFFFFF', border: '1px solid #E5DDD3', padding: '2rem', position: 'sticky', top: '90px' }}>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.375rem', color: '#1E3A2F', marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid #E5DDD3' }}>
                Pregled porudžbine
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
                {items.map((item) => (
                  <div key={item.product.id} className="flex justify-between" style={{ fontSize: '0.875rem', color: '#6B6258' }}>
                    <span>{item.product.name} ×{item.quantity}</span>
                    <span style={{ color: '#1A1A1A', fontWeight: 500 }}>
                      {(item.product.price * item.quantity).toLocaleString('sr-RS')} RSD
                    </span>
                  </div>
                ))}
              </div>

              <div style={{ borderTop: '1px solid #E5DDD3', paddingTop: '1rem', marginBottom: '1.75rem' }}>
                <div className="flex justify-between" style={{ marginBottom: '0.5rem', fontSize: '0.875rem', color: '#6B6258' }}>
                  <span>Dostava</span>
                  <span>Po dogovoru</span>
                </div>
                <div className="flex justify-between" style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1E3A2F' }}>
                  <span style={{ fontFamily: 'Playfair Display, serif' }}>Ukupno</span>
                  <span>{totalPrice.toLocaleString('sr-RS')} RSD</span>
                </div>
              </div>

              <Link
                to="/checkout"
                className="btn-luxury btn-primary"
                style={{ textDecoration: 'none', display: 'block', textAlign: 'center', width: '100%', marginBottom: '0.875rem' }}
              >
                Naruči →
              </Link>

              <Link to="/proizvodi" style={{ display: 'block', textAlign: 'center', fontSize: '0.8125rem', color: '#6B6258', textDecoration: 'none' }}
                className="hover:text-[#1E3A2F] transition-colors">
                ← Nastavi kupovinu
              </Link>

              <div style={{ marginTop: '1.5rem', padding: '1rem', background: '#F3EDE3', fontSize: '0.8rem', color: '#6B6258', lineHeight: '1.7' }}>
                <strong style={{ color: '#1E3A2F', display: 'block', marginBottom: '0.25rem' }}>Napomena:</strong>
                Svaki komad je ručno rađen. Dostava se dogovara individualno. Kontakt: 060 331 8319
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
