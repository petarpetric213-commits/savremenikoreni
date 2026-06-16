import { HeadContent, Scripts, createRootRoute, Outlet, Link } from '@tanstack/react-router'
import { useState } from 'react'
import { CartProvider, useCart } from '@/context/CartContext'
import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'Savremeni Koreni — Torbice & Pletene Kreacije' },
      { name: 'description', content: 'Ručno rađene torbice i pletene kreacije. Spoj tradicije i modernog luksuza.' },
    ],
    links: [
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Inter:wght@300;400;500;600&display=swap' },
    ],
  }),
  shellComponent: RootDocument,
  component: Navigation,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sr">
      <head>
        <HeadContent />
      </head>
      <body style={{ backgroundColor: '#FAF7F2', color: '#1A1A1A' }}>
        <CartProvider>
          {children}
        </CartProvider>
        <Scripts />
      </body>
    </html>
  )
}

function CartIcon({ count }: { count: number }) {
  return (
    <Link to="/korpa" className="relative flex items-center gap-1 group" aria-label="Korpa">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
        <line x1="3" y1="6" x2="21" y2="6"/>
        <path d="M16 10a4 4 0 0 1-8 0"/>
      </svg>
      {count > 0 && (
        <span
          style={{ background: '#BF9B5E', color: '#FAF7F2', fontSize: '0.65rem', minWidth: '18px', height: '18px' }}
          className="absolute -top-2 -right-2 rounded-full flex items-center justify-center font-semibold leading-none px-1"
        >
          {count}
        </span>
      )}
    </Link>
  )
}

function Navigation() {
  const { totalItems } = useCart()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <header style={{ background: '#FAF7F2', borderBottom: '1px solid #E5DDD3' }} className="sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex flex-col leading-none" style={{ textDecoration: 'none' }}>
            <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.375rem', fontWeight: 600, color: '#1E3A2F', letterSpacing: '0.02em' }}>
              Savremeni
            </span>
            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.625rem', fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#BF9B5E', marginTop: '-2px' }}>
              Koreni
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {[
              { to: '/', label: 'Početna' },
              { to: '/proizvodi', label: 'Kolekcija' },
              { to: '/o-nama', label: 'O nama' },
              { to: '/kontakt', label: 'Kontakt' },
            ].map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.8125rem', fontWeight: 500, letterSpacing: '0.06em', color: '#1A1A1A', textDecoration: 'none', transition: 'color 0.2s' }}
                activeProps={{ style: { color: '#BF9B5E' } }}
                className="hover:text-[#BF9B5E] transition-colors"
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-5">
            <CartIcon count={totalItems} />
            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden flex flex-col gap-1.5 p-1"
              aria-label="Meni"
            >
              <span style={{ display: 'block', width: '22px', height: '1.5px', background: '#1A1A1A', transition: 'all 0.3s', transform: menuOpen ? 'translateY(6px) rotate(45deg)' : 'none' }} />
              <span style={{ display: 'block', width: '22px', height: '1.5px', background: '#1A1A1A', opacity: menuOpen ? 0 : 1, transition: 'all 0.3s' }} />
              <span style={{ display: 'block', width: '22px', height: '1.5px', background: '#1A1A1A', transition: 'all 0.3s', transform: menuOpen ? 'translateY(-6px) rotate(-45deg)' : 'none' }} />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div style={{ background: '#FAF7F2', borderTop: '1px solid #E5DDD3' }} className="md:hidden px-6 py-6 flex flex-col gap-5">
            {[
              { to: '/', label: 'Početna' },
              { to: '/proizvodi', label: 'Kolekcija' },
              { to: '/o-nama', label: 'O nama' },
              { to: '/kontakt', label: 'Kontakt' },
            ].map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                onClick={() => setMenuOpen(false)}
                style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.25rem', color: '#1E3A2F', textDecoration: 'none' }}
              >
                {label}
              </Link>
            ))}
          </div>
        )}
      </header>

      <Outlet />

      <footer style={{ background: '#1E3A2F', color: '#FAF7F2' }}>
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Brand */}
            <div>
              <div className="mb-4">
                <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', fontWeight: 600, marginBottom: '2px' }}>Savremeni Koreni</div>
                <div style={{ fontSize: '0.6875rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#BF9B5E' }}>Ručno rađeno s ljubavlju</div>
              </div>
              <p style={{ fontSize: '0.9rem', lineHeight: '1.75', color: 'rgba(250,247,242,0.7)', maxWidth: '280px' }}>
                Gde tradicija susreće savremeni dizajn. Svaki komad nosi priču o veštini, strpljenju i ljubavi prema lepom.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <div style={{ fontSize: '0.6875rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#BF9B5E', marginBottom: '1.25rem', fontWeight: 600 }}>Navigacija</div>
              <div className="flex flex-col gap-3">
                {[
                  { to: '/', label: 'Početna' },
                  { to: '/proizvodi', label: 'Kolekcija' },
                  { to: '/o-nama', label: 'O nama' },
                  { to: '/kontakt', label: 'Kontakt' },
                ].map(({ to, label }) => (
                  <Link key={to} to={to} style={{ color: 'rgba(250,247,242,0.7)', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.2s' }}
                    className="hover:text-[#BF9B5E] transition-colors">{label}</Link>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <div style={{ fontSize: '0.6875rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#BF9B5E', marginBottom: '1.25rem', fontWeight: 600 }}>Kontakt</div>
              <div className="flex flex-col gap-3" style={{ color: 'rgba(250,247,242,0.7)', fontSize: '0.9rem' }}>
                <a href="mailto:savremenikoreni@gmail.com" style={{ color: 'rgba(250,247,242,0.7)', textDecoration: 'none' }} className="hover:text-[#BF9B5E] transition-colors">
                  savremenikoreni@gmail.com
                </a>
                <a href="tel:+381603318319" style={{ color: 'rgba(250,247,242,0.7)', textDecoration: 'none' }} className="hover:text-[#BF9B5E] transition-colors">
                  060 331 8319
                </a>
                <div style={{ marginTop: '0.5rem' }}>
                  <p style={{ fontSize: '0.85rem', color: 'rgba(250,247,242,0.5)', marginBottom: '0.75rem' }}>Pratite nas:</p>
                  <div className="flex gap-4">
                    <a href="https://www.instagram.com/tanja.petric_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" style={{ color: '#BF9B5E', textDecoration: 'none', fontSize: '0.8rem', letterSpacing: '0.05em' }}>Instagram</a>
                    <a href="https://wa.me/381603318319" target="_blank" rel="noopener noreferrer" style={{ color: '#BF9B5E', textDecoration: 'none', fontSize: '0.8rem', letterSpacing: '0.05em' }}>WhatsApp</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div style={{ borderTop: '1px solid rgba(250,247,242,0.1)', paddingTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'center', textAlign: 'center' }}>
            <p style={{ fontSize: '0.8125rem', color: 'rgba(250,247,242,0.4)' }}>
              © 2024 Savremeni Koreni. Sva prava zadržana.
            </p>
            <p style={{ fontSize: '0.75rem', color: 'rgba(250,247,242,0.25)' }}>
              Svaki komad je jedinstven — baš kao i vi.
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
