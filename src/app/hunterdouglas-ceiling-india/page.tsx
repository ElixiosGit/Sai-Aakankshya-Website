import type { Metadata } from 'next';
import Navbar from '@/components/wallnut/Navbar';
import Footer from '@/components/wallnut/Footer';
import Link from 'next/link';

const BASE_URL = 'https://www.saiaakankshyaassociates.com';

export const metadata: Metadata = {
  title: 'HunterDouglas Authorized Dealer India | Ceiling Systems — SAI AAKANKSHYA ASSOCIATES',
  description:
    'SAI AAKANKSHYA ASSOCIATES is India\'s authorized HunterDouglas dealer. We supply and install HunterDouglas linear ceilings, baffle ceilings, metal ceilings, and aluminium ceiling systems across airports, malls, hospitals, offices, and institutions pan-India. Based in Bhubaneswar, Odisha.',
  keywords: [
    'HunterDouglas authorized dealer India',
    'HunterDouglas ceiling India',
    'HunterDouglas dealer Bhubaneswar',
    'HunterDouglas linear ceiling India',
    'HunterDouglas baffle ceiling India',
    'HunterDouglas metal ceiling India',
    'Hunter Douglas India',
    'HunterDouglas ceiling contractor India',
    'HunterDouglas ceiling installation India',
    'HunterDouglas ceiling airport India',
  ],
  alternates: { canonical: `${BASE_URL}/hunterdouglas-ceiling-india` },
  openGraph: {
    title: 'HunterDouglas Authorized Dealer India | SAI AAKANKSHYA ASSOCIATES',
    description: 'Authorized HunterDouglas dealer and installer in India. Linear, baffle, metal, and aluminium ceiling systems for airports, malls, hospitals, and institutions.',
    url: `${BASE_URL}/hunterdouglas-ceiling-india`,
    images: [{ url: '/assets/images/Delhi T1.jpeg', width: 1200, height: 630, alt: 'HunterDouglas Ceiling India — SAI AAKANKSHYA ASSOCIATES' }],
  },
};

const DARK = '#202A30';
const GOLD = '#FDC41F';
const BODY = '#698996';
const MID  = '#F5F4F0';
const PAD  = 'clamp(2rem,5vw,5rem)';

const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2 style={{ color: DARK, fontSize: 'clamp(1.5rem,2.5vw,2rem)', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '1rem', lineHeight: 1.2 }}>
    {children}
  </h2>
);

const P = ({ children }: { children: React.ReactNode }) => (
  <p style={{ color: BODY, fontSize: '0.95rem', lineHeight: 1.85, marginBottom: '1.25rem' }}>{children}</p>
);

const Bullet = ({ items }: { items: string[] }) => (
  <ul style={{ marginBottom: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
    {items.map((item, i) => (
      <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: BODY, fontSize: '0.92rem', lineHeight: 1.7 }}>
        <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: GOLD, flexShrink: 0, marginTop: '0.55rem' }} />
        {item}
      </li>
    ))}
  </ul>
);

export default function HunterDouglasPage() {
  return (
    <main style={{ minHeight: '100vh', background: '#fff', fontFamily: 'Inter, sans-serif' }}>
      <Navbar />

      {/* Hero */}
      <section style={{ paddingTop: '9rem', paddingBottom: '5rem', paddingLeft: PAD, paddingRight: PAD, background: DARK, position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-8rem', right: '-8rem', width: '36rem', height: '36rem', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.04)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: '1440px', margin: '0 auto', position: 'relative' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
            <svg width="8" height="8" viewBox="0 0 8 8"><circle cx="4" cy="4" r="4" fill={GOLD} /></svg>
            <span style={{ color: 'rgba(253,196,31,0.85)', fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.42em', textTransform: 'uppercase' }}>
              HunterDouglas Authorized Dealer — India
            </span>
          </div>
          <h1 style={{ color: '#fff', fontSize: 'clamp(2.5rem, 7vw, 7rem)', fontWeight: 800, lineHeight: 0.95, letterSpacing: '-0.04em', marginBottom: '2rem' }}>
            HunterDouglas<br />
            <span style={{ color: GOLD }}>Ceiling Systems</span><br />
            in India
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 'clamp(1rem,1.5vw,1.1rem)', lineHeight: 1.75, maxWidth: '60ch', marginBottom: '2.5rem' }}>
            SAI AAKANKSHYA ASSOCIATES is India&apos;s authorized HunterDouglas dealer and installation partner — supplying and executing HunterDouglas ceiling systems across airports, malls, hospitals, universities, and government buildings pan-India.
          </p>
          <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', background: GOLD, color: DARK, padding: '1rem 2.2rem', fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none' }}>
            Get HunterDouglas Quote
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12H20M20 12L14 6M20 12L14 18" /></svg>
          </Link>
        </div>
      </section>

      {/* Section 1 — What is HunterDouglas */}
      <section style={{ padding: `5rem ${PAD}`, background: '#fff' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <H2>What is HunterDouglas?</H2>
          <P>HunterDouglas is a world-leading manufacturer of premium architectural ceiling systems, wall cladding, and facade solutions. Founded in 1919 and headquartered in Rotterdam, Netherlands, HunterDouglas operates in over 100 countries and is recognized globally as the gold standard in architectural metal ceiling systems.</P>
          <P>HunterDouglas ceiling systems are specified by architects, interior designers, and project managers for their exceptional quality, design flexibility, acoustic performance, and durability. Their product range includes linear metal ceilings, open cell ceilings, baffle ceilings, plank ceilings, tile ceilings, and custom architectural ceiling solutions — all engineered for large-scale commercial, institutional, and public infrastructure projects.</P>
          <P>In India, HunterDouglas ceiling systems are the preferred choice for airports, metro stations, hospitals, shopping malls, corporate offices, universities, and government buildings — wherever premium architectural quality and long-term performance are required.</P>
        </div>
      </section>

      {/* Section 2 — Authorized Dealer */}
      <section style={{ padding: `5rem ${PAD}`, background: MID }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <H2>SAI AAKANKSHYA ASSOCIATES — India&apos;s Authorized HunterDouglas Dealer</H2>
          <P>SAI AAKANKSHYA ASSOCIATES is a proud authorized dealer and installation partner of HunterDouglas in India. Based in Bhubaneswar, Odisha, we are one of the select few companies in India authorized to supply, distribute, and install the complete range of HunterDouglas ceiling systems.</P>
          <P>Our authorization as a HunterDouglas dealer means that every product we supply is genuine, certified, and backed by HunterDouglas&apos;s global quality standards. We work directly with HunterDouglas to ensure that our clients receive authentic products with full manufacturer support, warranty, and technical documentation.</P>
          <P>With 28 years of industry expertise led by our Founder & Director Mr. Debasis Mohapatra, we have the technical knowledge, installation expertise, and project management capability to execute HunterDouglas ceiling systems at any scale — from 1,000 sqm to over 11,000 sqm — across any sector in India.</P>
          <Bullet items={[
            'Authorized HunterDouglas dealer — genuine products with full certification',
            'Experienced installation team trained in HunterDouglas systems',
            'Pan-India execution capability — airports, malls, hospitals, offices, institutions',
            'Complete project management from supply to installation to handover',
            'Technical support and post-installation service',
            'Competitive pricing with direct dealer advantage',
          ]} />
        </div>
      </section>

      {/* Section 3 — Products */}
      <section style={{ padding: `5rem ${PAD}`, background: '#fff' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <H2>HunterDouglas Ceiling Systems We Supply & Install</H2>
          <P>As an authorized HunterDouglas dealer in India, SAI AAKANKSHYA ASSOCIATES supplies and installs the complete range of HunterDouglas architectural ceiling systems. Each system is engineered for specific applications and performance requirements:</P>

          <h3 style={{ color: DARK, fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.75rem', marginTop: '2rem' }}>HunterDouglas Linear Metal Ceilings</h3>
          <P>HunterDouglas linear metal ceilings are the most widely specified ceiling system for airports, metro stations, and large public spaces in India. Available in aluminium and steel, these ceilings offer clean, continuous lines that create a sense of space and movement. We have installed HunterDouglas linear ceilings at major airports including IGI Airport Terminal 1 in New Delhi and Guwahati International Airport.</P>

          <h3 style={{ color: DARK, fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.75rem', marginTop: '2rem' }}>HunterDouglas Baffle Ceilings</h3>
          <P>HunterDouglas baffle ceilings provide dramatic visual depth and excellent acoustic performance. These open, three-dimensional ceiling systems are ideal for atriums, lobbies, shopping malls, and corporate offices where both aesthetics and sound control are priorities. Our team has extensive experience installing HunterDouglas baffle ceilings in commercial and institutional projects across India.</P>

          <h3 style={{ color: DARK, fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.75rem', marginTop: '2rem' }}>HunterDouglas Open Cell Ceilings</h3>
          <P>HunterDouglas open cell ceilings offer a grid-like appearance that allows for concealed services above while maintaining a clean, modern aesthetic. These systems are popular in commercial offices, retail spaces, and institutional buildings where access to mechanical and electrical services is required.</P>

          <h3 style={{ color: DARK, fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.75rem', marginTop: '2rem' }}>HunterDouglas Plank Ceilings</h3>
          <P>HunterDouglas plank ceilings combine the warmth of a plank aesthetic with the durability and performance of metal. Available in a wide range of finishes, widths, and lengths, plank ceilings are ideal for hospitality, retail, and corporate environments where a premium, customized look is required.</P>

          <h3 style={{ color: DARK, fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.75rem', marginTop: '2rem' }}>HunterDouglas Tile Ceilings</h3>
          <P>HunterDouglas tile ceilings offer the flexibility of a modular system with the quality of HunterDouglas engineering. Available in standard and custom sizes, these ceilings are suitable for offices, healthcare facilities, educational institutions, and government buildings across India.</P>

          <h3 style={{ color: DARK, fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.75rem', marginTop: '2rem' }}>HunterDouglas Custom Architectural Ceilings</h3>
          <P>For projects requiring unique, bespoke ceiling solutions, HunterDouglas offers custom architectural ceiling systems designed to meet specific aesthetic and performance requirements. SAI AAKANKSHYA ASSOCIATES works closely with architects and designers to specify and execute custom HunterDouglas ceiling solutions for landmark projects across India.</P>
        </div>
      </section>

      {/* Section 4 — Sectors */}
      <section style={{ padding: `5rem ${PAD}`, background: MID }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <H2>HunterDouglas Ceiling Projects Across India — Sectors We Serve</H2>
          <P>SAI AAKANKSHYA ASSOCIATES has executed HunterDouglas ceiling systems across a wide range of sectors throughout India. Our pan-India execution capability means we can deliver HunterDouglas ceiling projects anywhere in the country:</P>

          <h3 style={{ color: DARK, fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.75rem', marginTop: '2rem' }}>Airports</h3>
          <P>Airports are among the most demanding environments for ceiling systems — requiring large-scale execution, strict quality standards, and systems that perform under heavy footfall and varying environmental conditions. We have successfully executed HunterDouglas ceiling systems at Indira Gandhi International Airport Terminal 1 (New Delhi) and Lokpriya Gopinath Bordoloi International Airport (Guwahati), among other airport projects across India.</P>

          <h3 style={{ color: DARK, fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.75rem', marginTop: '2rem' }}>Shopping Malls & Commercial Complexes</h3>
          <P>HunterDouglas ceiling systems are the preferred choice for premium shopping malls and commercial complexes in India. Their aesthetic versatility, durability, and ease of maintenance make them ideal for high-traffic retail environments. We have installed HunterDouglas ceilings in malls and commercial complexes across Odisha, Maharashtra, and other states.</P>

          <h3 style={{ color: DARK, fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.75rem', marginTop: '2rem' }}>Hospitals & Healthcare Facilities</h3>
          <P>Healthcare environments require ceiling systems that are hygienic, durable, and easy to maintain. HunterDouglas ceiling systems meet the stringent requirements of hospitals and healthcare facilities. We have executed HunterDouglas ceiling projects at SUM Ultimate in Bhubaneswar and other healthcare institutions across India.</P>

          <h3 style={{ color: DARK, fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.75rem', marginTop: '2rem' }}>Universities & Educational Institutions</h3>
          <P>Educational institutions require ceiling systems that provide acoustic comfort, durability, and a conducive learning environment. We have installed HunterDouglas ceiling systems at KIIT University in Bhubaneswar and other educational institutions across India.</P>

          <h3 style={{ color: DARK, fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.75rem', marginTop: '2rem' }}>Corporate Offices</h3>
          <P>Corporate offices increasingly specify HunterDouglas ceiling systems for their premium aesthetic, acoustic performance, and design flexibility. We execute HunterDouglas ceiling projects for corporate offices across India, from Bhubaneswar to Mumbai to Delhi.</P>

          <h3 style={{ color: DARK, fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.75rem', marginTop: '2rem' }}>Government Buildings & Public Infrastructure</h3>
          <P>Government buildings and public infrastructure projects in India increasingly specify HunterDouglas ceiling systems for their quality, longevity, and compliance with government standards. We have executed HunterDouglas ceiling projects for government buildings, bus terminals, and public facilities across India.</P>

          <h3 style={{ color: DARK, fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.75rem', marginTop: '2rem' }}>Hospitality — Hotels & Resorts</h3>
          <P>The hospitality sector demands ceiling systems that combine premium aesthetics with durability. HunterDouglas ceiling systems are widely specified for five-star hotels, resorts, and hospitality complexes. We have executed HunterDouglas ceiling and interior projects at Coconut Peninsula Resort in Tangi, Odisha, and other hospitality projects across India.</P>
        </div>
      </section>

      {/* Section 5 — Why Choose Us */}
      <section style={{ padding: `5rem ${PAD}`, background: '#fff' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <H2>Why Choose SAI AAKANKSHYA ASSOCIATES for HunterDouglas Ceiling in India?</H2>
          <P>When you choose SAI AAKANKSHYA ASSOCIATES for your HunterDouglas ceiling project in India, you benefit from a unique combination of authorized dealership, technical expertise, and pan-India execution capability:</P>
          <Bullet items={[
            'Authorized HunterDouglas Dealer — genuine products, full certification, manufacturer warranty',
            '28 years of industry expertise led by Mr. Debasis Mohapatra',
            'Executed 12+ landmark projects including IGI Airport, Guwahati Airport, KIIT University',
            'Pan-India execution — Odisha, Delhi, Mumbai, Guwahati, and beyond',
            'Large-scale capability — 1,000 sqm to 11,000+ sqm in a single project',
            'Complete turnkey service — supply, installation, quality inspection, handover',
            'Strategic partnerships with HunterDouglas, Saint Gobain, Armstrong, Philips, Ramco',
            'Dedicated project management team for on-time, on-spec delivery',
            'Post-installation support and maintenance services',
            'Competitive pricing with direct dealer advantage — no middlemen',
          ]} />
        </div>
      </section>

      {/* Section 6 — Other Services */}
      <section style={{ padding: `5rem ${PAD}`, background: MID }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <H2>Beyond HunterDouglas — Complete Infrastructure Execution Services</H2>
          <P>While HunterDouglas ceiling systems are a core specialty, SAI AAKANKSHYA ASSOCIATES offers a complete range of infrastructure execution services. This means we can handle your entire project — from ceiling to cladding to civil works — under one roof:</P>
          <Bullet items={[
            'False Ceiling Systems — gypsum, metal, aluminium, linear, baffle, HDI (600×600)',
            'Wall Cladding — architectural cladding, aluminium composite panels, stone cladding',
            'Aluminium Facade — curtain wall, aluminium tube ceiling, facade systems',
            'Interior Execution — complete interior fit-out for hospitality, corporate, institutional',
            'Exterior Execution — exterior finishing, facade work, architectural elements',
            'Civil Construction — structural works, power sector, government infrastructure',
            'Fire & Security Systems — fire protection, suppression, security installation',
            'Saint Gobain products — gypsum boards, glass wool, acoustic solutions',
            'Armstrong ceiling systems — tiles, grids, suspension systems',
            'Philips lighting — integrated lighting solutions for ceiling projects',
          ]} />
        </div>
      </section>

      {/* Section 7 — FAQ */}
      <section style={{ padding: `5rem ${PAD}`, background: '#fff' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <H2>Frequently Asked Questions — HunterDouglas Ceiling India</H2>

          {[
            { q: 'Is SAI AAKANKSHYA ASSOCIATES an authorized HunterDouglas dealer in India?', a: 'Yes. SAI AAKANKSHYA ASSOCIATES is an authorized HunterDouglas dealer and installation partner in India. We supply genuine HunterDouglas products with full certification and manufacturer support.' },
            { q: 'Which HunterDouglas ceiling systems are available in India?', a: 'Through SAI AAKANKSHYA ASSOCIATES, you can access the full range of HunterDouglas ceiling systems in India — including linear metal ceilings, baffle ceilings, open cell ceilings, plank ceilings, tile ceilings, and custom architectural ceiling solutions.' },
            { q: 'What is the cost of HunterDouglas ceiling in India?', a: 'The cost of HunterDouglas ceiling systems in India varies based on the system type, project scale, location, and installation complexity. Contact SAI AAKANKSHYA ASSOCIATES at +91 9040099001 for a detailed project-specific quote.' },
            { q: 'Can SAI AAKANKSHYA ASSOCIATES execute HunterDouglas ceiling projects outside Odisha?', a: 'Yes. SAI AAKANKSHYA ASSOCIATES has pan-India execution capability. We have executed HunterDouglas ceiling projects in Delhi, Guwahati, Navi Mumbai, and across Odisha. We can execute projects anywhere in India.' },
            { q: 'How long does a HunterDouglas ceiling installation take?', a: 'Installation timelines depend on the project scale and complexity. For large-scale projects (5,000+ sqm), we typically require 4–12 weeks. For smaller projects, timelines can be as short as 1–2 weeks. We provide detailed project schedules at the time of quotation.' },
            { q: 'Does HunterDouglas ceiling come with a warranty in India?', a: 'Yes. All HunterDouglas ceiling systems supplied by SAI AAKANKSHYA ASSOCIATES come with the manufacturer\'s warranty. As an authorized dealer, we ensure all products are genuine and covered by HunterDouglas\'s global warranty program.' },
          ].map((faq, i) => (
            <div key={i} style={{ marginBottom: '2rem', paddingBottom: '2rem', borderBottom: '1px solid rgba(105,137,150,0.15)' }}>
              <h3 style={{ color: DARK, fontSize: '1rem', fontWeight: 700, marginBottom: '0.75rem', lineHeight: 1.4 }}>{faq.q}</h3>
              <P>{faq.a}</P>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: `5rem ${PAD}`, background: DARK }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ color: 'rgba(253,196,31,0.8)', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.4em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
            HunterDouglas Authorized Dealer — India
          </p>
          <h2 style={{ color: '#fff', fontSize: 'clamp(2rem,4vw,3.5rem)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.03em', marginBottom: '1.5rem' }}>
            Get a HunterDouglas<br /><span style={{ color: GOLD }}>Ceiling Quote Today</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1rem', lineHeight: 1.75, marginBottom: '2.5rem', maxWidth: '50ch', margin: '0 auto 2.5rem' }}>
            Contact India&apos;s authorized HunterDouglas dealer for genuine products, expert installation, and pan-India execution.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', background: GOLD, color: DARK, padding: '1rem 2.5rem', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none' }}>
              Get a Quote
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12H20M20 12L14 6M20 12L14 18" /></svg>
            </Link>
            <a href="tel:+919040099001" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', border: '1px solid rgba(255,255,255,0.3)', color: '#fff', padding: '1rem 2.5rem', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.05em', textDecoration: 'none' }}>
              +91 9040099001
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
