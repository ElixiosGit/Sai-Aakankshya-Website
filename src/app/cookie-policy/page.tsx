import Navbar from '@/components/wallnut/Navbar';
import Footer from '@/components/wallnut/Footer';

const Section = ({ number, title, children }: { number: string; title: string; children: React.ReactNode }) => (
  <div className="mb-12">
    <div className="flex items-baseline gap-3 mb-4">
      <span style={{ color: '#FDC41F', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.15em' }}>{number}</span>
      <h2 className="font-bold text-2xl" style={{ color: '#202A30', letterSpacing: '-0.02em' }}>{title}</h2>
    </div>
    {children}
  </div>
);

const Bullet = ({ items }: { items: string[] }) => (
  <ul className="space-y-2 mb-6">
    {items.map((item, i) => (
      <li key={i} className="flex items-start gap-3" style={{ color: '#698996' }}>
        <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2" style={{ background: '#FDC41F' }} />
        <span className="leading-relaxed">{item}</span>
      </li>
    ))}
  </ul>
);

const CookieTable = ({ rows }: { rows: { name: string; type: string; purpose: string; duration: string }[] }) => (
  <div className="overflow-x-auto mb-6">
    <table className="w-full text-sm border-collapse">
      <thead>
        <tr style={{ borderBottom: '2px solid #FDC41F' }}>
          {['Cookie Name', 'Type', 'Purpose', 'Duration'].map((h) => (
            <th key={h} className="text-left py-3 pr-4 font-semibold" style={{ color: '#202A30', fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{h}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i} style={{ borderBottom: '1px solid rgba(105,137,150,0.15)' }}>
            <td className="py-3 pr-4 font-medium" style={{ color: '#202A30' }}>{row.name}</td>
            <td className="py-3 pr-4" style={{ color: '#698996' }}>{row.type}</td>
            <td className="py-3 pr-4" style={{ color: '#698996' }}>{row.purpose}</td>
            <td className="py-3" style={{ color: '#698996' }}>{row.duration}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default function CookiePolicyPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="bg-[#202A30] pt-32 pb-16 px-8 lg:px-10">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="#FDC41F"><circle cx="6" cy="6" r="6" /></svg>
            <span className="text-white text-sm font-semibold">Legal</span>
            <div className="flex-1 h-px bg-white/10" />
          </div>
          <h1 className="text-white font-bold" style={{ fontSize: 'clamp(2.5rem, 6vw, 6rem)', lineHeight: 0.95, letterSpacing: '-0.03em' }}>
            Cookie Policy
          </h1>
          <p className="text-white/40 mt-6 text-sm">Last updated: May 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-8 lg:px-10">
        <div className="max-w-[800px] mx-auto">

          <p className="leading-relaxed mb-12" style={{ color: '#698996' }}>
            This Cookie Policy explains how SAI AAKANKSHYA ASSOCIATES (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) uses cookies and similar tracking technologies on our website. By continuing to use our website, you consent to our use of cookies as described in this policy.
          </p>

          <Section number="01" title="What Are Cookies">
            <p className="leading-relaxed mb-4" style={{ color: '#698996' }}>
              Cookies are small text files that are stored on your device (computer, tablet, or mobile phone) when you visit a website. They are widely used to make websites work more efficiently, remember your preferences, and provide information to website owners about how their site is being used.
            </p>
            <p className="leading-relaxed" style={{ color: '#698996' }}>
              Cookies can be &quot;session cookies&quot; (deleted when you close your browser) or &quot;persistent cookies&quot; (remain on your device for a set period or until you delete them). They can also be &quot;first-party cookies&quot; (set by us) or &quot;third-party cookies&quot; (set by external services we use).
            </p>
          </Section>

          <Section number="02" title="Types of Cookies We Use">
            <p className="leading-relaxed mb-6" style={{ color: '#698996' }}>
              We use the following categories of cookies on our website:
            </p>

            <h3 className="font-bold text-lg mb-3" style={{ color: '#202A30' }}>Essential Cookies</h3>
            <p className="leading-relaxed mb-4" style={{ color: '#698996' }}>
              These cookies are strictly necessary for the website to function. Without them, certain features cannot be provided. They cannot be disabled.
            </p>
            <CookieTable rows={[
              { name: '__session', type: 'Essential', purpose: 'Maintains your session state across pages', duration: 'Session' },
              { name: 'csrf_token', type: 'Essential', purpose: 'Protects against cross-site request forgery attacks', duration: 'Session' },
              { name: 'cookie_consent', type: 'Essential', purpose: 'Stores your cookie consent preferences', duration: '1 year' },
            ]} />

            <h3 className="font-bold text-lg mb-3" style={{ color: '#202A30' }}>Analytics Cookies</h3>
            <p className="leading-relaxed mb-4" style={{ color: '#698996' }}>
              These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve our website and services.
            </p>
            <CookieTable rows={[
              { name: '_ga', type: 'Analytics', purpose: 'Google Analytics — distinguishes unique users', duration: '2 years' },
              { name: '_ga_*', type: 'Analytics', purpose: 'Google Analytics — maintains session state', duration: '2 years' },
              { name: '_gid', type: 'Analytics', purpose: 'Google Analytics — distinguishes users (24hr)', duration: '24 hours' },
              { name: '_gat', type: 'Analytics', purpose: 'Google Analytics — throttles request rate', duration: '1 minute' },
            ]} />

            <h3 className="font-bold text-lg mb-3" style={{ color: '#202A30' }}>Functional Cookies</h3>
            <p className="leading-relaxed mb-4" style={{ color: '#698996' }}>
              These cookies enable enhanced functionality and personalization. They may be set by us or by third-party providers whose services we use.
            </p>
            <CookieTable rows={[
              { name: 'lang_pref', type: 'Functional', purpose: 'Remembers your language preference', duration: '1 year' },
              { name: 'scroll_pos', type: 'Functional', purpose: 'Remembers scroll position on page revisit', duration: 'Session' },
              { name: 'form_data', type: 'Functional', purpose: 'Temporarily saves form input to prevent data loss', duration: 'Session' },
            ]} />

            <h3 className="font-bold text-lg mb-3" style={{ color: '#202A30' }}>Third-Party Cookies</h3>
            <p className="leading-relaxed mb-4" style={{ color: '#698996' }}>
              Some pages on our website embed content or use services from third parties, which may set their own cookies:
            </p>
            <Bullet items={[
              'Google Maps — used to display our office location on the Contact page. Google may set cookies to track map interactions.',
              'Google Fonts — used to load the Inter typeface. Google may log font requests.',
              'WhatsApp — the floating WhatsApp button links to WhatsApp Web. WhatsApp may set cookies if you are logged in.',
              'Pexels — some images are loaded from Pexels CDN. Pexels may set performance cookies.',
            ]} />
          </Section>

          <Section number="03" title="Why We Use Cookies">
            <p className="leading-relaxed mb-4" style={{ color: '#698996' }}>
              We use cookies for the following specific purposes:
            </p>
            <Bullet items={[
              'To ensure our website loads correctly and all features work as intended',
              'To remember your preferences and settings between visits',
              'To analyze website traffic and understand which pages are most popular',
              'To measure the effectiveness of our website and identify areas for improvement',
              'To understand how users navigate through our site (pages visited, time spent)',
              'To detect and prevent security threats and fraudulent activity',
              'To enable embedded maps and third-party content to function correctly',
              'To improve page load speeds through caching mechanisms',
            ]} />
          </Section>

          <Section number="04" title="Managing and Controlling Cookies">
            <p className="leading-relaxed mb-4" style={{ color: '#698996' }}>
              You have the right to decide whether to accept or reject cookies (except essential cookies). You can manage your cookie preferences in the following ways:
            </p>

            <h3 className="font-bold text-lg mb-3" style={{ color: '#202A30' }}>Browser Settings</h3>
            <p className="leading-relaxed mb-4" style={{ color: '#698996' }}>
              Most web browsers allow you to control cookies through their settings. You can typically find these in the &quot;Privacy&quot; or &quot;Security&quot; section of your browser settings:
            </p>
            <Bullet items={[
              'Google Chrome: Settings → Privacy and Security → Cookies and other site data',
              'Mozilla Firefox: Settings → Privacy & Security → Cookies and Site Data',
              'Safari: Preferences → Privacy → Manage Website Data',
              'Microsoft Edge: Settings → Cookies and site permissions → Cookies and site data',
              'Opera: Settings → Advanced → Privacy & security → Site Settings → Cookies',
            ]} />

            <h3 className="font-bold text-lg mb-3" style={{ color: '#202A30' }}>Opt-Out Tools</h3>
            <p className="leading-relaxed mb-4" style={{ color: '#698996' }}>
              You can opt out of specific third-party cookies using these tools:
            </p>
            <Bullet items={[
              'Google Analytics: Install the Google Analytics Opt-out Browser Add-on (tools.google.com/dlpage/gaoptout)',
              'Google Ads: Visit Google\'s Ad Settings (adssettings.google.com)',
              'Network Advertising Initiative: Visit optout.networkadvertising.org',
            ]} />

            <p className="leading-relaxed" style={{ color: '#698996' }}>
              Please note that disabling certain cookies may affect the functionality of our website. Essential cookies cannot be disabled as they are required for the site to operate correctly.
            </p>
          </Section>

          <Section number="05" title="Cookie Consent">
            <p className="leading-relaxed mb-4" style={{ color: '#698996' }}>
              When you first visit our website, you will be informed about our use of cookies. By continuing to browse our website after seeing this notice, you consent to our use of cookies as described in this policy.
            </p>
            <p className="leading-relaxed" style={{ color: '#698996' }}>
              You can withdraw your consent at any time by clearing your browser cookies and adjusting your browser settings to refuse cookies. However, this may affect your experience on our website.
            </p>
          </Section>

          <Section number="06" title="Do Not Track">
            <p className="leading-relaxed" style={{ color: '#698996' }}>
              Some browsers include a &quot;Do Not Track&quot; (DNT) feature that signals to websites that you do not want your online activity tracked. Our website currently does not respond to DNT signals, as there is no consistent industry standard for how to interpret them. We will update this policy if a standard is established.
            </p>
          </Section>

          <Section number="07" title="Updates to This Policy">
            <p className="leading-relaxed" style={{ color: '#698996' }}>
              We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our data practices. When we make significant changes, we will update the &quot;Last updated&quot; date at the top of this page. We encourage you to review this policy periodically to stay informed about how we use cookies.
            </p>
          </Section>

          <Section number="08" title="Contact Us">
            <p className="leading-relaxed mb-4" style={{ color: '#698996' }}>
              If you have any questions about our use of cookies or this Cookie Policy, please contact us:
            </p>
            <div className="p-6 border border-[#698996]/20 bg-[#F5F4F0]">
              <p className="font-bold mb-1" style={{ color: '#202A30' }}>SAI AAKANKSHYA ASSOCIATES</p>
              <p style={{ color: '#698996' }}>Plot No 36, Nuasahi, Rasulgarh</p>
              <p style={{ color: '#698996' }}>Bhubaneswar, Odisha – 751010</p>
              <p className="mt-3" style={{ color: '#698996' }}>
                Email:{' '}
                <a href="mailto:saiaakankshya.associates@gmail.com" className="hover:text-[#FDC41F] transition-colors" style={{ color: '#202A30' }}>
                  saiaakankshya.associates@gmail.com
                </a>
              </p>
              <p style={{ color: '#698996' }}>
                Phone:{' '}
                <a href="tel:+919040099001" className="hover:text-[#FDC41F] transition-colors" style={{ color: '#202A30' }}>
                  +91 9040099001
                </a>
              </p>
            </div>
          </Section>

        </div>
      </section>

      <Footer />
    </main>
  );
}
