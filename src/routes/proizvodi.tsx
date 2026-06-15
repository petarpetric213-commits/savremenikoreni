import { createFileRoute, Link } from '@tanstack/react-router'
import { useState } from 'react'
import products from '@/data/products'
import { useCart } from '@/context/CartContext'

export const Route = createFileRoute('/proizvodi')({
  component: ProizvodiPage,
})

function ProizvodiPage() {
  const { addItem } = useCart()
  const [activeCategory, setActiveCategory] = useState<'sve' | 'torbice' | 'pleteno'>('sve')

  const filtered = activeCategory === 'sve' ? products : products.filter((p) => p.category === activeCategory)

  return (
    <main>
      {/* Header */}
      <section style={{ background: '#F3EDE3', padding: '5rem 0 3rem', textAlign: 'center' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="section-label mb-4">Savremeni Koreni</div>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2.25rem, 5vw, 3.5rem)', fontWeight: 500, color: '#1E3A2F', marginBottom: '1rem' }}>
            Cela kolekcija
          </h1>
          <div className="line-gold" style={{ margin: '0 auto 1.5rem' }} />
          <p style={{ color: '#6B6258', fontSize: '1rem', maxWidth: '500px', margin: '0 auto' }}>
            Svaki komad je jedinstven — ručno rađen s pažnjom prema detalju i ljubavlju prema zanatu.
          </p>
        </div>
      </section>

      {/* Filter */}
      <section style={{ background: '#FAF7F2', borderBottom: '1px solid #E5DDD3', padding: '1.25rem 0', position: 'sticky', top: '65px', zIndex: 40 }}>
        <div className="max-w-7xl mx-auto px-6 flex items-center gap-3 flex-wrap">
          {(['sve', 'torbice', 'pleteno'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                padding: '0.5rem 1.25rem',
                border: activeCategory === cat ? '1.5px solid #1E3A2F' : '1.5px solid #E5DDD3',
                background: activeCategory === cat ? '#1E3A2F' : 'transparent',
                color: activeCategory === cat ? '#FAF7F2' : '#6B6258',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
            >
              {cat === 'sve' ? 'Sve' : cat === 'torbice' ? 'Torbice' : 'Pleteno'}
            </button>
          ))}
          <span style={{ marginLeft: 'auto', fontSize: '0.8125rem', color: '#6B6258' }}>
            {filtered.length} {filtered.length === 1 ? 'komad' : 'komada'}
          </span>
        </div>
      </section>

      {/* Products Grid */}
      <section style={{ background: '#FAF7F2', padding: '4rem 0' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((product) => (
              <article key={product.id} style={{ background: '#FFFFFF', border: '1px solid #E5DDD3', position: 'relative' }}>
                {product.featured && (
                  <div style={{
                    position: 'absolute', top: '12px', left: '12px', zIndex: 1,
                    background: '#BF9B5E', color: '#FAF7F2',
                    fontSize: '0.625rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase',
                    padding: '0.25rem 0.625rem',
                  }}>
                    Izdvojeno
                  </div>
                )}
                <Link
                  to="/products/$productId"
                  params={{ productId: product.id.toString() }}
                  style={{ textDecoration: 'none', display: 'block' }}
                >
                  <div style={{ overflow: 'hidden', aspectRatio: '3/4' }}>
                    <img
                      src={product.image}
                      alt={product.name}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease', display: 'block' }}
                      className="hover:scale-105"
                    />
                  </div>
                </Link>
                <div style={{ padding: '1.25rem' }}>
                  <div className="section-label" style={{ marginBottom: '0.35rem' }}>
                    {product.category === 'torbice' ? 'Torbice' : 'Pleteno'}
                  </div>
                  <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.0625rem', fontWeight: 500, color: '#1A1A1A', marginBottom: '0.5rem' }}>
                    {product.name}
                  </h3>
                  <p style={{ fontSize: '0.8125rem', color: '#6B6258', lineHeight: '1.6', marginBottom: '1rem', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                    {product.shortDescription}
                  </p>
                  <div className="flex items-center justify-between gap-2">
                    <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', fontWeight: 600, color: '#1E3A2F' }}>
                      {product.price.toLocaleString('sr-RS')} RSD
                    </span>
                    <button
                      onClick={() => addItem(product)}
                      className="btn-luxury btn-primary"
                      style={{ padding: '0.5rem 0.875rem', fontSize: '0.6875rem', whiteSpace: 'nowrap' }}
                    >
                      + Korpa
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
