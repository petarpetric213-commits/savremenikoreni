import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/o-nama')({
  component: ONamaPage,
})

function ONamaPage() {
  return (
    <main>
      {/* Hero */}
      <section style={{ background: '#1E3A2F', padding: '6rem 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/images/image_4.png)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.12 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(30,58,47,0.9), rgba(30,58,47,0.97))' }} />
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <div className="section-label" style={{ color: '#BF9B5E', marginBottom: '1rem' }}>Naša priča</div>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2.25rem, 5vw, 4rem)', fontWeight: 500, color: '#FAF7F2', lineHeight: '1.15', marginBottom: '1.5rem' }}>
            Savremeni Koreni —<br />
            <span style={{ fontStyle: 'italic', color: '#BF9B5E' }}>tradicija kao privilegija</span>
          </h1>
          <div className="line-gold" style={{ margin: '0 auto' }} />
        </div>
      </section>

      {/* Story */}
      <section style={{ background: '#FAF7F2', padding: '6rem 0' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="section-label" style={{ marginBottom: '1rem' }}>Ko smo mi</div>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', fontWeight: 500, color: '#1E3A2F', marginBottom: '1.75rem', lineHeight: '1.2' }}>
                Priča utkana u<br />Savremene Korene
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', color: '#4A4A4A', fontSize: '0.9375rem', lineHeight: '1.9' }}>
                <p>
                  Mi smo mali tim kreativaca iz Jošanice, skrivenog kutka u okolini Žagubice – mesta gde se vreme i dalje meri posvećenošću i pažnjom koju ulažemo u ono što stvaramo. Vođeni željom da oživimo stare tehnike ručnog rada i prilagodimo ih ritmu modernog života, osnovali smo brend Savremeni koreni.
                </p>
                <p>
                  Za nas, pletenje nije samo hobi – to je način da kroz niti povežemo tradiciju istočne Srbije i savremeni dizajn, stvarajući nešto potpuno novo, inovativno i jedinstveno.
                </p>
                <p style={{ fontStyle: 'italic', color: '#6B6258', borderLeft: '2px solid #BF9B5E', paddingLeft: '1rem' }}>
                  U svetu brze mode i masovne proizvodnje, mi biramo drugačiji put. Svaka naša torbica nastaje strpljivim preplitanjem visokokvalitetnog T-shirt pamučnog konca. Koristeći različite tehnike makramea, uspevamo da od naizgled običnih niti stvorimo prepoznatljivu strukturu, formu i aksesoar koji privlači poglede.
                </p>
                <p>
                  Naše torbice su stvorene za sve one koji cene autentičnost, vole da se izdvoje iz mase i nose unikatnu umetnost sa sobom, gde god da krenu.
                </p>
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              <div style={{ aspectRatio: '2/3', overflow: 'hidden', gridRow: '1 / 3' }}>
                <img src="/images/image_3.png" alt="Radionica" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ aspectRatio: '1', overflow: 'hidden' }}>
                <img src="/images/image_1.png" alt="Detalj" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ aspectRatio: '1', overflow: 'hidden' }}>
                <img src="/images/image_5.png" alt="Materijali" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ background: '#F3EDE3', padding: '6rem 0' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="section-label mb-4">Naše vrednosti</div>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.875rem, 4vw, 3rem)', fontWeight: 500, color: '#1E3A2F' }}>
              Šta nas pokreće
            </h2>
            <div className="line-gold" style={{ margin: '1rem auto 0' }} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                number: '01',
                title: '100% Ručna izrada',
                desc: 'Svaki čvor je vezan ručno, sa puno ljubavi i pažnje posvećene detaljima. Zato ne postoje dve potpuno iste torbice – svaka ima svoju priču.',
              },
              {
                number: '02',
                title: 'Inovacija u tradiciji',
                desc: 'Čuvamo tradiciju pletenja, ali joj dajemo savremeni pečat kroz moderne oblike, smele boje i praktičan dizajn.',
              },
              {
                number: '03',
                title: 'Lokalno i održivo',
                desc: 'Ponosni smo na to što stvaramo u malom mestu, dokazujući da autentična kreativnost ne poznaje granice.',
              },
            ].map(({ number, title, desc }) => (
              <div key={number} style={{ padding: '2.5rem', background: '#FFFFFF', border: '1px solid #E5DDD3' }}>
                <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '3rem', fontWeight: 500, color: '#E5DDD3', lineHeight: 1, marginBottom: '1rem' }}>
                  {number}
                </div>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.375rem', color: '#1E3A2F', marginBottom: '0.75rem' }}>
                  {title}
                </h3>
                <div className="line-gold" style={{ marginBottom: '1rem' }} />
                <p style={{ fontSize: '0.9rem', color: '#6B6258', lineHeight: '1.8' }}>
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section style={{ background: '#1E3A2F', padding: '6rem 0', textAlign: 'center' }}>
        <div className="max-w-3xl mx-auto px-6">
          <span style={{ color: '#BF9B5E', fontSize: '4rem', fontFamily: 'Playfair Display, serif', lineHeight: 0.5, display: 'block', marginBottom: '1.5rem' }}>"</span>
          <blockquote style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.375rem, 3vw, 2rem)', fontStyle: 'italic', color: '#FAF7F2', lineHeight: '1.5', marginBottom: '2rem' }}>
            Puštamo korenje duboko, a rastemo ka svetlosti. Tradicija za nas nije sidro koje nas drži u mestu, već kompas koji nam pokazuje put.
          </blockquote>
          <div className="line-gold" style={{ margin: '0 auto' }} />
        </div>
      </section>

      {/* Contact strip */}
      <section style={{ background: '#BF9B5E', padding: '3rem 0', textAlign: 'center' }}>
        <div className="max-w-7xl mx-auto px-6">
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#FAF7F2', opacity: 0.8, marginBottom: '0.75rem' }}>
            Stupite u kontakt
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <a href="mailto:hom.jagode@gmail.com" style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.125rem', color: '#FAF7F2', textDecoration: 'none' }}>
              hom.jagode@gmail.com
            </a>
            <a href="tel:+381603318319" style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.125rem', color: '#FAF7F2', textDecoration: 'none' }}>
              060 331 8319
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
