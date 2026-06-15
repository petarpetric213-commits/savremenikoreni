import { Link, createFileRoute } from '@tanstack/react-router'
import products from '../../data/products'
import { useCart } from '@/context/CartContext'
import { useState } from 'react'

export const Route = createFileRoute('/products/$productId')({
  component: ProductDetail,
  loader: async ({ params }) => {
    const product = products.find((p) => p.id === +params.productId)
    if (!product) throw new Error('Proizvod nije pronađen')
    return product
  },
})

function ProductDetail() {
  const product = Route.useLoaderData()
  const { addItem, items } = useCart()
  const [added, setAdded] = useState(false)

  const inCart = items.find((i) => i.product.id === product.id)

  const related = products.filter((p) => p.id !== product.id && p.category === product.category).slice(0, 3)

  const handleAdd = () => {
    addItem(product)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <main>
      {/* Breadcrumb */}
      <div style={{ background: '#F3EDE3', borderBottom: '1px solid #E5DDD3', padding: '0.875rem 0' }}>
        <div className="max-w-7xl mx-auto px-6">
          <nav style={{ fontSize: '0.8125rem', color: '#6B6258', display: 'flex', gap: '0.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
            <Link to="/" style={{ color: '#6B6258', textDecoration: 'none' }} className="hover:text-[#1E3A2F] transition-colors">Početna</Link>
            <span>›</span>
            <Link to="/proizvodi" style={{ color: '#6B6258', textDecoration: 'none' }} className="hover:text-[#1E3A2F] transition-colors">Kolekcija</Link>
            <span>›</span>
            <span style={{ color: '#1E3A2F' }}>{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Product */}
      <section style={{ background: '#FAF7F2', padding: '4rem 0' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
            {/* Image */}
            <div style={{ position: 'relative' }}>
              <div style={{ aspectRatio: '4/5', overflow: 'hidden', background: '#F3EDE3' }}>
                <img
                  src={product.image}
                  alt={product.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>
              {product.featured && (
                <div style={{
                  position: 'absolute', top: '20px', left: '20px',
                  background: '#BF9B5E', color: '#FAF7F2',
                  fontSize: '0.625rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase',
                  padding: '0.35rem 0.75rem',
                }}>
                  Izdvojeno
                </div>
              )}
            </div>

            {/* Info */}
            <div style={{ paddingTop: '1rem' }}>
              <div className="section-label" style={{ marginBottom: '0.75rem' }}>
                {product.category === 'torbice' ? 'Torbice' : 'Pleteno'}
              </div>
              <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', fontWeight: 500, color: '#1E3A2F', marginBottom: '0.5rem', lineHeight: '1.2' }}>
                {product.name}
              </h1>
              <div className="line-gold" style={{ marginBottom: '1.5rem' }} />

              <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.75rem', fontWeight: 600, color: '#BF9B5E', marginBottom: '1.75rem' }}>
                {product.price.toLocaleString('sr-RS')} RSD
              </div>

              <p style={{ fontSize: '1rem', color: '#4A4A4A', lineHeight: '1.85', marginBottom: '2.5rem' }}>
                {product.description}
              </p>

              {/* Features */}
              <div style={{ borderTop: '1px solid #E5DDD3', paddingTop: '1.5rem', marginBottom: '2rem' }}>
                {[
                  '100% ručni rad',
                  'Prirodni materijali',
                  'Jedinstven komad',
                  'Pažljivo pakovanje',
                ].map((feat) => (
                  <div key={feat} className="flex items-center gap-3" style={{ marginBottom: '0.625rem' }}>
                    <span style={{ color: '#BF9B5E', fontSize: '0.75rem' }}>✦</span>
                    <span style={{ fontSize: '0.9rem', color: '#6B6258' }}>{feat}</span>
                  </div>
                ))}
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleAdd}
                  className="btn-luxury btn-primary"
                  style={{ flex: 1, background: added ? '#2D5442' : '#1E3A2F' }}
                >
                  {added ? '✓ Dodato u korpu' : inCart ? `U korpi (${inCart.quantity})` : 'Dodaj u korpu'}
                </button>
                <Link
                  to="/korpa"
                  className="btn-luxury btn-gold"
                  style={{ textDecoration: 'none', flex: 1, textAlign: 'center' }}
                >
                  Pogledaj korpu
                </Link>
              </div>

              {/* Contact CTA */}
              <div style={{ marginTop: '2rem', padding: '1.25rem', background: '#F3EDE3', border: '1px solid #E5DDD3' }}>
                <p style={{ fontSize: '0.875rem', color: '#6B6258', marginBottom: '0.5rem' }}>
                  Imate pitanje o ovom komadu?
                </p>
                <div className="flex gap-4">
                  <a href="https://wa.me/381603318319" target="_blank" rel="noopener noreferrer"
                    style={{ fontSize: '0.8125rem', color: '#1E3A2F', fontWeight: 600, textDecoration: 'none' }}>
                    WhatsApp →
                  </a>
                  <a href="mailto:hom.jagode@gmail.com"
                    style={{ fontSize: '0.8125rem', color: '#1E3A2F', fontWeight: 600, textDecoration: 'none' }}>
                    Email →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section style={{ background: '#F3EDE3', padding: '5rem 0' }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-10">
              <div className="section-label mb-3">Slični komadi</div>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '2rem', fontWeight: 500, color: '#1E3A2F' }}>
                Možda vas zanima
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {related.map((p) => (
                <Link
                  key={p.id}
                  to="/products/$productId"
                  params={{ productId: p.id.toString() }}
                  style={{ textDecoration: 'none' }}
                >
                  <article style={{ background: '#FFFFFF', border: '1px solid #E5DDD3' }}>
                    <div style={{ overflow: 'hidden', aspectRatio: '3/4' }}>
                      <img
                        src={p.image}
                        alt={p.name}
                        style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s', display: 'block' }}
                        className="hover:scale-105"
                      />
                    </div>
                    <div style={{ padding: '1rem' }}>
                      <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1rem', color: '#1A1A1A', marginBottom: '0.35rem' }}>{p.name}</h3>
                      <span style={{ color: '#BF9B5E', fontWeight: 600, fontSize: '0.9375rem' }}>{p.price.toLocaleString('sr-RS')} RSD</span>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  )
}
