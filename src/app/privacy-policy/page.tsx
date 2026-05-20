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

export default function PrivacyPolicyPage() {
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
            Privacy Policy
          </h1>
          <p className="text-white/40 mt-6 text-sm">Last updated: May 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-8 lg:px-10">
        <div className="max-w-[800px] mx-auto">

          <p className="leading-relaxed mb-12" style={{ color: '#698996' }}>
            SAI AAKANKSHYA ASSOCIATES (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;), headquartered at Plot No 36, Nuasahi, Rasulgarh, Bhubaneswar, Odisha – 751010, is committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or engage with our services.
          </p>

          <Section number="01" title="Information We Collect">
            <p className="leading-relaxed mb-4" style={{ color: '#698996' }}>
              We collect information you voluntarily provide to us when you interact with our website or contact us for services. This includes:
            </p>
            <Bullet items={[
              'Full name and contact details (phone number, email address)',
              'Company name and designation',
              'Project details, scope, location, and timeline information',
              'Messages and inquiries submitted through our contact form',
              'Information shared via WhatsApp or email communication',
              'Any other information you choose to provide when requesting a quote or consultation',
            ]} />
            <p className="leading-relaxed mb-4" style={{ color: '#698996' }}>
              We also automatically collect certain technical information when you visit our website:
            </p>
            <Bullet items={[
              'IP address and browser type',
              'Pages visited and time spent on each page',
              'Referring website or source',
              'Device type (desktop, mobile, tablet)',
              'Operating system and screen resolution',
            ]} />
          </Section>

          <Section number="02" title="How We Use Your Information">
            <p className="leading-relaxed mb-4" style={{ color: '#698996' }}>
              We use the information we collect for the following purposes:
            </p>
            <Bullet items={[
              'To respond to your project inquiries and provide accurate quotes',
              'To communicate with you about ongoing or potential projects',
              'To send project updates, timelines, and execution reports',
              'To improve our website, services, and user experience',
              'To understand which services are most relevant to our clients',
              'To comply with applicable legal and regulatory obligations',
              'To prevent fraud and ensure the security of our website',
              'To maintain records of business communications as required by law',
              'To send occasional updates about our services, new projects, or company news (only with your consent)',
            ]} />
          </Section>

          <Section number="03" title="How We Share Your Information">
            <p className="leading-relaxed mb-4" style={{ color: '#698996' }}>
              We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following limited circumstances:
            </p>
            <Bullet items={[
              'With trusted service providers who assist us in operating our website or conducting our business (e.g., hosting providers, analytics tools) — bound by confidentiality agreements',
              'With our strategic partners (HunterDouglas, Saint Gobain, Philips, Ramco, Armstrong) only when directly relevant to your project execution',
              'With government or regulatory authorities when required by law, court order, or legal process',
              'In connection with a business merger, acquisition, or sale of assets — in which case you will be notified',
              'To protect the rights, property, or safety of SAI AAKANKSHYA ASSOCIATES, our clients, or others',
            ]} />
          </Section>

          <Section number="04" title="Data Retention">
            <p className="leading-relaxed mb-4" style={{ color: '#698996' }}>
              We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law. Specifically:
            </p>
            <Bullet items={[
              'Project inquiry data is retained for up to 3 years after the last communication',
              'Active project records are retained for the duration of the project plus 7 years',
              'Financial and contractual records are retained as required by Indian tax and business laws',
              'Website analytics data is retained for up to 26 months',
              'You may request deletion of your personal data at any time (subject to legal obligations)',
            ]} />
          </Section>

          <Section number="05" title="Data Security">
            <p className="leading-relaxed mb-4" style={{ color: '#698996' }}>
              We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
            </p>
            <Bullet items={[
              'Secure HTTPS encryption for all data transmitted through our website',
              'Restricted access to personal data — only authorized personnel can access it',
              'Regular review of our data collection, storage, and processing practices',
              'Secure storage of physical records at our Bhubaneswar office',
              'WhatsApp Business communications are end-to-end encrypted',
            ]} />
            <p className="leading-relaxed" style={{ color: '#698996' }}>
              However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your information, we cannot guarantee absolute security.
            </p>
          </Section>

          <Section number="06" title="Your Rights">
            <p className="leading-relaxed mb-4" style={{ color: '#698996' }}>
              Under applicable Indian data protection laws and principles, you have the following rights regarding your personal information:
            </p>
            <Bullet items={[
              'Right to Access — request a copy of the personal data we hold about you',
              'Right to Correction — request correction of inaccurate or incomplete data',
              'Right to Deletion — request deletion of your personal data (subject to legal obligations)',
              'Right to Withdraw Consent — withdraw consent for marketing communications at any time',
              'Right to Object — object to processing of your data for certain purposes',
              'Right to Data Portability — request your data in a structured, machine-readable format',
            ]} />
            <p className="leading-relaxed" style={{ color: '#698996' }}>
              To exercise any of these rights, please contact us using the details in Section 10 below.
            </p>
          </Section>

          <Section number="07" title="Third-Party Links">
            <p className="leading-relaxed" style={{ color: '#698996' }}>
              Our website may contain links to third-party websites, including Google Maps, WhatsApp, and partner brand websites. We are not responsible for the privacy practices of these external sites. We encourage you to review the privacy policies of any third-party sites you visit. Our inclusion of a link does not imply endorsement of their privacy practices.
            </p>
          </Section>

          <Section number="08" title="Children's Privacy">
            <p className="leading-relaxed" style={{ color: '#698996' }}>
              Our website and services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have inadvertently collected information from a minor, please contact us immediately and we will take steps to delete such information.
            </p>
          </Section>

          <Section number="09" title="Changes to This Policy">
            <p className="leading-relaxed" style={{ color: '#698996' }}>
              We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. When we make changes, we will update the &quot;Last updated&quot; date at the top of this page. We encourage you to review this policy periodically. Your continued use of our website after any changes constitutes your acceptance of the updated policy.
            </p>
          </Section>

          <Section number="10" title="Contact Us">
            <p className="leading-relaxed mb-4" style={{ color: '#698996' }}>
              If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
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
