import { Link, createFileRoute } from '@tanstack/react-router'
import products from '@/data/products'
import { useCart } from '@/context/CartContext'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  const { addItem } = useCart()
  const featured = products.filter((p) => p.featured)

  return (
    <main>
      {/* Hero */}
      <section
        style={{ background: '#1E3A2F', minHeight: '92vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}
      >
        {/* Decorative background image */}
        <div
          style={{
            position: 'absolute', inset: 0,
            backgroundImage: 'url(/images/image.png)',
            backgroundSize: 'cover', backgroundPosition: 'center',
            opacity: 0.18,
          }}
        />
        {/* Gradient overlay */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(30,58,47,0.95) 0%, rgba(30,58,47,0.6) 100%)' }} />

        <div className="max-w-7xl mx-auto px-6 py-24 relative z-10 w-full">
          <div className="max-w-2xl">
            <div className="section-label mb-6">Kolekcija 2024</div>
            <h1
              style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 500, color: '#FAF7F2', lineHeight: '1.1', marginBottom: '1.5rem' }}
            >
              Gde tradicija<br />
              <span style={{ fontStyle: 'italic', color: '#BF9B5E' }}>susreće</span><br />
              savremeni luksuz
            </h1>
            <p style={{ fontSize: '1.0625rem', color: 'rgba(250,247,242,0.75)', lineHeight: '1.8', maxWidth: '480px', marginBottom: '2.5rem' }}>
              Ručno rađene torbice i pletene kreacije — svaki detalj je priča, svaki šav je posveta veštini i lepoti koja traje.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/proizvodi" className="btn-luxury btn-gold" style={{ textDecoration: 'none' }}>
                Istraži kolekciju
              </Link>
              <Link to="/o-nama" className="btn-luxury btn-outline" style={{ borderColor: 'rgba(250,247,242,0.4)', color: '#FAF7F2', textDecoration: 'none' }}>
                Naša priča
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)' }}>
          <div style={{ width: '1px', height: '48px', background: 'linear-gradient(to bottom, transparent, #BF9B5E)', margin: '0 auto' }} />
        </div>
      </section>

      {/* Values strip */}
      <section style={{ background: '#BF9B5E' }}>
        <div className="max-w-7xl mx-auto px-6 py-5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            {[
              { icon: '✦', text: '100% Ručni rad' },
              { icon: '✦', text: 'Prirodni materijali' },
              { icon: '✦', text: 'Jedinstven dizajn' },
            ].map(({ icon, text }) => (
              <div key={text} className="flex items-center justify-center gap-3">
                <span style={{ color: '#FAF7F2', opacity: 0.6, fontSize: '0.5rem' }}>{icon}</span>
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#FAF7F2' }}>
                  {text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section style={{ background: '#FAF7F2', padding: '6rem 0' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="section-label mb-4">Izdvojena kolekcija</div>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 500, color: '#1E3A2F', marginBottom: '1rem' }}>
              Naši favoriti
            </h2>
            <div className="line-gold" style={{ margin: '0 auto' }} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featured.map((product) => (
              <article key={product.id} style={{ background: '#FFFFFF', border: '1px solid #E5DDD3' }}>
                <Link to="/products/$productId" params={{ productId: product.id.toString() }} style={{ textDecoration: 'none', display: 'block' }}>
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
                  <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.0625rem', fontWeight: 500, color: '#1A1A1A', marginBottom: '0.75rem' }}>
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '1.0625rem', fontWeight: 600, color: '#1E3A2F' }}>
                      {product.price.toLocaleString('sr-RS')} RSD
                    </span>
                    <button
                      onClick={() => addItem(product)}
                      className="btn-luxury btn-primary"
                      style={{ padding: '0.5rem 1rem', fontSize: '0.6875rem' }}
                    >
                      + Korpa
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/proizvodi" className="btn-luxury btn-outline" style={{ textDecoration: 'none' }}>
              Pogledaj celu kolekciju
            </Link>
          </div>
        </div>
      </section>

      {/* About teaser */}
      <section style={{ background: '#1E3A2F', padding: '7rem 0' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div style={{ position: 'relative' }}>
              <div style={{ aspectRatio: '4/5', overflow: 'hidden' }}>
                <img
                  src="/images/image_6.png"
                  alt="Savremeni Koreni radionica"
                  onError={(e) => { (e.target as HTMLImageElement).src = '/images/image_2.png' }}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              {/* Decorative frame */}
              <div style={{
                position: 'absolute', bottom: '-20px', right: '-20px',
                width: '60%', height: '60%',
                border: '2px solid #BF9B5E',
                zIndex: -1,
              }} />
            </div>
            <div>
              <div className="section-label" style={{ color: '#BF9B5E', marginBottom: '1.25rem' }}>Naša priča</div>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.875rem, 3.5vw, 2.75rem)', fontWeight: 500, color: '#FAF7F2', lineHeight: '1.2', marginBottom: '1.5rem' }}>
                Savremeni koreni<br />
                <span style={{ fontStyle: 'italic', color: '#BF9B5E' }}>seže duboko</span>
              </h2>
              <p style={{ fontSize: '1rem', lineHeight: '1.85', color: 'rgba(250,247,242,0.72)', marginBottom: '1rem' }}>
                Iza svake torbice i pletene kreacije stoji žena koja veruje da pravo remek-delo nastaje sporim rukama i punim srcem.
              </p>
              <p style={{ fontSize: '1rem', lineHeight: '1.85', color: 'rgba(250,247,242,0.72)', marginBottom: '2.5rem' }}>
                "Savremeni Koreni" nije samo naziv — to je filozofija. Baždarimo stare zanate u savremeni jezik mode, nosimo tradiciju kao privilegiju, a ne kao teret.
              </p>
              <Link to="/o-nama" className="btn-luxury btn-gold" style={{ textDecoration: 'none' }}>
                Upoznaj nas
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram / Social strip */}
      <section style={{ background: '#FAF7F2', padding: '6rem 0' }}>
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="section-label mb-4">Pratite nas</div>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 500, color: '#1E3A2F', marginBottom: '0.75rem' }}>
            @savremenikoreni
          </h2>
          <p style={{ color: '#6B6258', fontSize: '0.9375rem', marginBottom: '2.5rem' }}>
            Svakodnevne inspiracije, proces nastajanja i novi komadi — pratite nas na Instagramu.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              '/images/image_5.png',
              '/images/image_1781510798201073336.png',
              '/images/image_1781510798275151752.png',
              '/images/image_1781510798335036627.png',
            ].map((src, i) => (
              <div key={i} style={{ aspectRatio: '1', overflow: 'hidden', position: 'relative' }}>
                <img
                  src={src}
                  alt={`Galerija ${i + 1}`}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                  className="hover:scale-105"
                />
                <div style={{ position: 'absolute', inset: 0, background: 'rgba(30,58,47,0)', transition: 'background 0.3s' }} className="hover:bg-[rgba(30,58,47,0.2)]" />
              </div>
            ))}
          </div>
          <div className="mt-8">
            <a
              href="https://www.instagram.com/tanja.petric_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              className="btn-luxury btn-outline"
              style={{ textDecoration: 'none' }}
            >
              Instagram →
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#F3EDE3', padding: '5rem 0', textAlign: 'center' }}>
        <div className="max-w-2xl mx-auto px-6">
          <div className="section-label mb-4">Posebna porudžbina</div>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.875rem, 3.5vw, 2.75rem)', fontWeight: 500, color: '#1E3A2F', marginBottom: '1rem' }}>
            Imate posebnu želju?
          </h2>
          <p style={{ color: '#6B6258', fontSize: '0.9375rem', lineHeight: '1.8', marginBottom: '2.5rem' }}>
            Svaki komad možemo prilagoditi vašim željama — boja, materijal, dimenzije. Kontaktirajte nas i zajedno kreiramo nešto posebno.
          </p>
          <Link to="/kontakt" className="btn-luxury btn-primary" style={{ textDecoration: 'none' }}>
            Kontaktiraj nas
          </Link>
        </div>
      </section>
    </main>
  )
}
