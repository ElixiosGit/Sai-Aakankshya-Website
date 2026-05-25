import React from 'react';
import type { Metadata, Viewport } from 'next';
import SmoothScroll from '@/components/wallnut/SmoothScroll';
import WhatsAppButton from '@/components/wallnut/WhatsAppButton';
import '../styles/index.css';
import '../styles/tailwind.css';

const BASE_URL = 'https://www.saiaakankshyaassociates.com';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#202A30',
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: 'SAI AAKANKSHYA ASSOCIATES | HunterDouglas Authorized Dealer & Premium Infrastructure Execution — Bhubaneswar, India',
    template: '%s | SAI AAKANKSHYA ASSOCIATES',
  },

  description:
    'SAI AAKANKSHYA ASSOCIATES is India\'s authorized HunterDouglas dealer and premier infrastructure execution company based in Bhubaneswar, Odisha. Specializing in HunterDouglas ceiling systems, false ceiling, wall cladding, aluminium facade, interior & exterior execution, and civil construction across airports, institutions, hospitality, and government projects pan-India. Led by 28 years of industry expertise.',

  keywords: [
    // ── HunterDouglas specific (highest priority) ──
    'HunterDouglas authorized dealer India',
    'HunterDouglas dealer Bhubaneswar',
    'HunterDouglas dealer Odisha',
    'HunterDouglas ceiling India',
    'HunterDouglas ceiling contractor India',
    'HunterDouglas authorized contractor India',
    'HunterDouglas linear ceiling India',
    'HunterDouglas baffle ceiling India',
    'HunterDouglas metal ceiling India',
    'HunterDouglas aluminium ceiling India',
    'HunterDouglas ceiling systems India',
    'HunterDouglas false ceiling India',
    'HunterDouglas ceiling installation India',
    'HunterDouglas ceiling price India',
    'HunterDouglas ceiling contractor Bhubaneswar',
    'HunterDouglas ceiling contractor Odisha',
    'HunterDouglas ceiling contractor airport',
    'HunterDouglas ceiling airport India',
    'HunterDouglas ceiling hospital India',
    'HunterDouglas ceiling mall India',
    'HunterDouglas ceiling office India',
    'HunterDouglas ceiling university India',
    'HunterDouglas India distributor',
    'HunterDouglas India partner',
    'HunterDouglas India reseller',
    'HunterDouglas India supplier',
    'HunterDouglas India installation',
    'Hunter Douglas ceiling India',
    'Hunter Douglas dealer India',
    'Hunter Douglas contractor India',
    'Hunter Douglas Bhubaneswar',
    'Hunter Douglas Odisha',

    // ── Brand ──
    'SAI AAKANKSHYA ASSOCIATES',
    'Sai Aakankshya Associates Bhubaneswar',
    'Debasis Mohapatra infrastructure',
    'SAIA construction Odisha',
    'SAI AAKANKSHYA ceiling contractor',

    // ── False Ceiling ──
    'false ceiling contractor India',
    'false ceiling contractor Bhubaneswar',
    'false ceiling contractor Odisha',
    'false ceiling contractor airport India',
    'false ceiling installation India',
    'false ceiling company India',
    'gypsum ceiling contractor India',
    'gypsum ceiling contractor Bhubaneswar',
    'metal ceiling contractor India',
    'aluminium ceiling contractor India',
    'linear ceiling contractor India',
    'baffle ceiling contractor India',
    'HDI ceiling systems India',
    'HDI ceiling 600x600 India',
    'acoustic ceiling contractor India',
    'suspended ceiling contractor India',
    'modular ceiling contractor India',
    'ceiling tile contractor India',
    'ceiling grid contractor India',
    'false ceiling design India',
    'false ceiling work India',
    'false ceiling installation cost India',

    // ── Wall Cladding & Facade ──
    'wall cladding contractor India',
    'wall cladding contractor Bhubaneswar',
    'aluminium facade contractor India',
    'aluminium facade contractor Odisha',
    'architectural cladding India',
    'facade execution India',
    'aluminium composite panel contractor India',
    'ACP cladding contractor India',
    'exterior cladding contractor India',
    'building facade contractor India',
    'aluminium tube ceiling India',
    'cladding contractor airport India',

    // ── Interior & Exterior ──
    'interior execution contractor India',
    'interior contractor Bhubaneswar',
    'interior contractor Odisha',
    'exterior execution contractor India',
    'turnkey interior contractor India',
    'hospitality interior contractor India',
    'hotel interior contractor India',
    'resort interior execution India',
    'corporate interior contractor India',
    'institutional interior contractor India',
    'commercial interior contractor India',
    'government interior contractor India',
    'acoustic hall room contractor India',
    'interior fit out contractor India',
    'interior finishing contractor India',

    // ── Civil Construction ──
    'civil construction contractor Odisha',
    'civil infrastructure contractor India',
    'civil contractor Bhubaneswar',
    'power sector civil contractor India',
    'OPTCL contractor Odisha',
    'Tata Power contractor India',
    'Power Grid contractor India',
    'government infrastructure contractor India',
    'structural execution contractor India',
    'public infrastructure contractor India',

    // ── Fire & Security ──
    'fire protection system contractor India',
    'fire safety contractor India',
    'security system installation India',
    'fire suppression system contractor',

    // ── Sectors ──
    'airport ceiling contractor India',
    'airport cladding contractor India',
    'airport interior contractor India',
    'IGI airport contractor',
    'Indira Gandhi International Airport contractor',
    'Guwahati airport contractor',
    'Lokpriya Gopinath Bordoloi airport contractor',
    'university ceiling contractor India',
    'KIIT University contractor',
    'SUM hospital contractor',
    'SUM Ultimate Bhubaneswar contractor',
    'mall ceiling contractor India',
    'commercial ceiling contractor India',
    'government building contractor India',
    'bus terminal ceiling contractor India',
    'zoological park contractor India',
    'power plant contractor India',

    // ── Partners ──
    'HunterDouglas authorized dealer India',
    'Saint Gobain contractor India',
    'Saint Gobain authorized dealer India',
    'Armstrong ceiling contractor India',
    'Armstrong authorized dealer India',
    'Philips lighting contractor India',
    'Ramco contractor India',

    // ── Location ──
    'infrastructure contractor Bhubaneswar',
    'construction company Odisha',
    'ceiling contractor Odisha',
    'interior contractor Odisha',
    'pan India infrastructure contractor',
    'infrastructure company India',
    'construction company Bhubaneswar',
    'contractor Rasulgarh Bhubaneswar',
    'infrastructure contractor East India',
    'ceiling contractor Navi Mumbai',
    'ceiling contractor Delhi',
    'ceiling contractor Guwahati',
    'ceiling contractor Assam',
    'ceiling contractor Maharashtra',

    // ── Long-tail ──
    'large scale ceiling execution India',
    'ceiling cladding civil facade contractor',
    'premium infrastructure execution India',
    'turnkey infrastructure contractor India',
    'from concept to inauguration contractor',
    'ceiling contractor 11000 sqm',
    'landmark infrastructure projects India',
    '28 years infrastructure expertise India',
    'best ceiling contractor India',
    'top ceiling contractor Bhubaneswar',
    'ceiling contractor near me Bhubaneswar',
    'false ceiling near me Odisha',
    'HunterDouglas near me India',
  ],

  authors: [{ name: 'SAI AAKANKSHYA ASSOCIATES', url: BASE_URL }],
  creator: 'SAI AAKANKSHYA ASSOCIATES',
  publisher: 'SAI AAKANKSHYA ASSOCIATES',
  category: 'Construction & Infrastructure',

  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: BASE_URL,
    siteName: 'SAI AAKANKSHYA ASSOCIATES',
    title: 'SAI AAKANKSHYA ASSOCIATES | HunterDouglas Authorized Dealer & Premium Infrastructure Execution — India',
    description:
      'India\'s authorized HunterDouglas dealer and premier infrastructure execution company. False ceiling, wall cladding, aluminium facade, interior & exterior execution, and civil construction across airports, institutions, and government projects pan-India.',
    images: [
      {
        url: '/assets/images/Delhi T1.jpeg',
        width: 1200,
        height: 630,
        alt: 'SAI AAKANKSHYA ASSOCIATES — HunterDouglas Authorized Dealer & Premium Infrastructure Execution',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'SAI AAKANKSHYA ASSOCIATES | HunterDouglas Authorized Dealer & Infrastructure Execution India',
    description:
      'India\'s authorized HunterDouglas dealer. False ceiling, wall cladding, aluminium facade, interior & exterior execution, and civil construction across India.',
    images: ['/assets/images/Delhi T1.jpeg'],
  },

  alternates: {
    canonical: BASE_URL,
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  icons: {
    icon: [{ url: '/assets/images/saia.png', type: 'image/png' }],
    apple: [{ url: '/assets/images/saia.png', type: 'image/png' }],
    shortcut: '/assets/images/saia.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'Organization',
                  '@id': `${BASE_URL}/#organization`,
                  name: 'SAI AAKANKSHYA ASSOCIATES',
                  alternateName: ['SAIA', 'Sai Aakankshya Associates'],
                  url: BASE_URL,
                  logo: {
                    '@type': 'ImageObject',
                    url: `${BASE_URL}/assets/images/saia.png`,
                    width: 200,
                    height: 200,
                  },
                  image: `${BASE_URL}/assets/images/Delhi T1.jpeg`,
                  description:
                    'SAI AAKANKSHYA ASSOCIATES is India\'s authorized HunterDouglas dealer and premier infrastructure execution company based in Bhubaneswar, Odisha. Specializing in HunterDouglas ceiling systems, false ceiling, wall cladding, aluminium facade, interior & exterior execution, and civil construction across airports, institutions, hospitality, and government projects pan-India.',
                  foundingDate: '2021',
                  founder: {
                    '@type': 'Person',
                    name: 'Mr. Debasis Mohapatra',
                    jobTitle: 'Founder & Director',
                    description: '28 years of distinguished corporate leadership in infrastructure and execution industry',
                  },
                  address: {
                    '@type': 'PostalAddress',
                    streetAddress: 'Plot No 36, Nuasahi, Rasulgarh',
                    addressLocality: 'Bhubaneswar',
                    addressRegion: 'Odisha',
                    postalCode: '751010',
                    addressCountry: 'IN',
                  },
                  contactPoint: [
                    {
                      '@type': 'ContactPoint',
                      telephone: '+91-9040099001',
                      contactType: 'customer service',
                      availableLanguage: ['English', 'Hindi', 'Odia'],
                      areaServed: 'IN',
                    },
                    {
                      '@type': 'ContactPoint',
                      email: 'saiaakankshya.associates@gmail.com',
                      contactType: 'sales',
                      areaServed: 'IN',
                    },
                  ],
                  email: 'saiaakankshya.associates@gmail.com',
                  telephone: '+91-9040099001',
                  taxID: '21AEJFS7979B1ZT',
                  areaServed: {
                    '@type': 'Country',
                    name: 'India',
                  },
                  knowsAbout: [
                    'HunterDouglas Ceiling Systems',
                    'HunterDouglas Linear Ceilings',
                    'HunterDouglas Baffle Ceilings',
                    'HunterDouglas Metal Ceilings',
                    'False Ceiling Systems',
                    'Gypsum Ceiling',
                    'Metal Ceiling',
                    'Aluminium Ceiling',
                    'Wall Cladding',
                    'Aluminium Facade',
                    'Interior Execution',
                    'Exterior Execution',
                    'Civil Construction',
                    'Fire & Security Systems',
                    'Airport Infrastructure',
                    'Institutional Infrastructure',
                    'Hospitality Interior',
                    'Government Infrastructure',
                  ],
                  brand: [
                    {
                      '@type': 'Brand',
                      name: 'HunterDouglas',
                      description: 'Authorized dealer and installation partner for HunterDouglas ceiling systems in India',
                    },
                    { '@type': 'Brand', name: 'Saint Gobain' },
                    { '@type': 'Brand', name: 'Armstrong' },
                    { '@type': 'Brand', name: 'Philips' },
                    { '@type': 'Brand', name: 'Ramco' },
                  ],
                  award: [
                    'Authorized HunterDouglas Dealer India',
                    '12+ Landmark Infrastructure Projects',
                    '11,000+ sqm Ceiling Execution',
                  ],
                  numberOfEmployees: {
                    '@type': 'QuantitativeValue',
                    minValue: 10,
                    maxValue: 50,
                  },
                },
                {
                  '@type': 'WebSite',
                  '@id': `${BASE_URL}/#website`,
                  url: BASE_URL,
                  name: 'SAI AAKANKSHYA ASSOCIATES',
                  description:
                    'HunterDouglas authorized dealer and premium infrastructure execution company — false ceiling, wall cladding, aluminium facade, interior & exterior execution, and civil construction across India.',
                  publisher: { '@id': `${BASE_URL}/#organization` },
                  inLanguage: 'en-IN',
                  potentialAction: {
                    '@type': 'SearchAction',
                    target: {
                      '@type': 'EntryPoint',
                      urlTemplate: `${BASE_URL}/work?search={search_term_string}`,
                    },
                    'query-input': 'required name=search_term_string',
                  },
                },
                {
                  '@type': 'LocalBusiness',
                  '@id': `${BASE_URL}/#localbusiness`,
                  name: 'SAI AAKANKSHYA ASSOCIATES',
                  image: [
                    `${BASE_URL}/assets/images/Delhi T1.jpeg`,
                    `${BASE_URL}/assets/images/coconut peninsula resort.jpg`,
                  ],
                  url: BASE_URL,
                  telephone: '+91-9040099001',
                  email: 'saiaakankshya.associates@gmail.com',
                  priceRange: '₹₹₹',
                  currenciesAccepted: 'INR',
                  paymentAccepted: 'Cash, Bank Transfer, Cheque',
                  address: {
                    '@type': 'PostalAddress',
                    streetAddress: 'Plot No 36, Nuasahi, Rasulgarh',
                    addressLocality: 'Bhubaneswar',
                    addressRegion: 'Odisha',
                    postalCode: '751010',
                    addressCountry: 'IN',
                  },
                  geo: {
                    '@type': 'GeoCoordinates',
                    latitude: 20.2961,
                    longitude: 85.8245,
                  },
                  openingHoursSpecification: [
                    {
                      '@type': 'OpeningHoursSpecification',
                      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
                      opens: '09:00',
                      closes: '18:00',
                    },
                  ],
                  hasOfferCatalog: {
                    '@type': 'OfferCatalog',
                    name: 'Infrastructure Execution Services',
                    itemListElement: [
                      {
                        '@type': 'Offer',
                        itemOffered: {
                          '@type': 'Service',
                          name: 'HunterDouglas Ceiling Systems',
                          description:
                            'Authorized HunterDouglas dealer and installer in India. HunterDouglas linear ceilings, baffle ceilings, metal ceilings, aluminium ceilings for airports, malls, hospitals, offices, and institutions across India.',
                          provider: { '@id': `${BASE_URL}/#organization` },
                          areaServed: 'India',
                          brand: { '@type': 'Brand', name: 'HunterDouglas' },
                        },
                      },
                      {
                        '@type': 'Offer',
                        itemOffered: {
                          '@type': 'Service',
                          name: 'False Ceiling Systems',
                          description:
                            'Precision-executed false ceiling systems — gypsum, metal, aluminium, linear, baffle, and HDI ceiling systems for airports, institutions, and commercial spaces across India.',
                          provider: { '@id': `${BASE_URL}/#organization` },
                          areaServed: 'India',
                        },
                      },
                      {
                        '@type': 'Offer',
                        itemOffered: {
                          '@type': 'Service',
                          name: 'Wall Cladding & Aluminium Facade',
                          description:
                            'Premium wall cladding and aluminium facade execution for airports, malls, and large-scale commercial and institutional infrastructure projects across India.',
                          provider: { '@id': `${BASE_URL}/#organization` },
                          areaServed: 'India',
                        },
                      },
                      {
                        '@type': 'Offer',
                        itemOffered: {
                          '@type': 'Service',
                          name: 'Interior & Exterior Execution',
                          description:
                            'Complete project execution from conceptualization to inauguration — hospitality, corporate, institutional, and government infrastructure.',
                          provider: { '@id': `${BASE_URL}/#organization` },
                          areaServed: 'India',
                        },
                      },
                      {
                        '@type': 'Offer',
                        itemOffered: {
                          '@type': 'Service',
                          name: 'Civil Construction',
                          description:
                            'Structural civil works for power sector, government, and public infrastructure — OPTCL, Tata Power, Power Grid Corporation.',
                          provider: { '@id': `${BASE_URL}/#organization` },
                          areaServed: 'India',
                        },
                      },
                      {
                        '@type': 'Offer',
                        itemOffered: {
                          '@type': 'Service',
                          name: 'Fire & Security Systems',
                          description:
                            'Integrated fire protection and security system installation for commercial complexes, institutions, and airports.',
                          provider: { '@id': `${BASE_URL}/#organization` },
                          areaServed: 'India',
                        },
                      },
                    ],
                  },
                },
                {
                  '@type': 'FAQPage',
                  mainEntity: [
                    {
                      '@type': 'Question',
                      name: 'Is SAI AAKANKSHYA ASSOCIATES an authorized HunterDouglas dealer in India?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Yes, SAI AAKANKSHYA ASSOCIATES is an authorized HunterDouglas dealer and installation partner in India. We supply and install HunterDouglas ceiling systems including linear ceilings, baffle ceilings, metal ceilings, and aluminium ceilings across airports, institutions, malls, hospitals, and commercial spaces pan-India.',
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'What HunterDouglas ceiling systems does SAI AAKANKSHYA ASSOCIATES install?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'We install the full range of HunterDouglas ceiling systems including linear metal ceilings, open cell ceilings, baffle ceilings, plank ceilings, tile ceilings, and custom architectural ceiling solutions. We have executed HunterDouglas ceiling projects at major airports, universities, hospitals, malls, and government buildings across India.',
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'Where is SAI AAKANKSHYA ASSOCIATES located?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'SAI AAKANKSHYA ASSOCIATES is headquartered at Plot No 36, Nuasahi, Rasulgarh, Bhubaneswar, Odisha – 751010. We execute projects pan-India including Delhi, Mumbai, Guwahati, Navi Mumbai, and across Odisha.',
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'What types of false ceiling systems does SAI AAKANKSHYA ASSOCIATES offer?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'We offer gypsum ceiling systems, metal ceiling systems, aluminium ceiling systems, linear ceilings, baffle ceilings, HDI ceiling systems (600×600), acoustic ceilings, and HunterDouglas ceiling systems. We handle projects from 1,000 sqm to over 11,000 sqm.',
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'Which airports has SAI AAKANKSHYA ASSOCIATES worked at?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'SAI AAKANKSHYA ASSOCIATES has executed ceiling and cladding projects at Indira Gandhi International Airport (IGI) Terminal 1 in New Delhi and Lokpriya Gopinath Bordoloi International Airport in Guwahati, among other major airport infrastructure projects across India.',
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'How can I contact SAI AAKANKSHYA ASSOCIATES for a project quote?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'You can contact SAI AAKANKSHYA ASSOCIATES by calling +91 9040099001, emailing saiaakankshya.associates@gmail.com, or filling out the contact form on our website. You can also reach us directly on WhatsApp at +91 9040099001.',
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'What is the experience of SAI AAKANKSHYA ASSOCIATES?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'SAI AAKANKSHYA ASSOCIATES was founded in 2021 by Mr. Debasis Mohapatra, who brings 28 years of distinguished corporate leadership in the infrastructure and execution industry. The company has delivered 12+ landmark projects across airports, institutions, hospitality, and government infrastructure.',
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'Does SAI AAKANKSHYA ASSOCIATES work with Saint Gobain and Armstrong?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Yes, SAI AAKANKSHYA ASSOCIATES has strategic partnerships with globally recognized brands including HunterDouglas, Saint Gobain, Armstrong, Philips, and Ramco. These partnerships ensure every project benefits from the best materials and technical expertise available.',
                      },
                    },
                  ],
                },
                {
                  '@type': 'ItemList',
                  name: 'SAI AAKANKSHYA ASSOCIATES — Landmark Projects',
                  description: 'Portfolio of landmark infrastructure execution projects across India',
                  itemListElement: [
                    {
                      '@type': 'ListItem',
                      position: 1,
                      name: 'Indira Gandhi International Airport Terminal 1 — New Delhi',
                      description: 'Large-scale ceiling and cladding execution at IGI Airport T1, New Delhi. HunterDouglas ceiling systems installation.',
                    },
                    {
                      '@type': 'ListItem',
                      position: 2,
                      name: 'Lokpriya Gopinath Bordoloi International Airport — Guwahati, Assam',
                      description: 'Premium ceiling and cladding execution at Guwahati International Airport.',
                    },
                    {
                      '@type': 'ListItem',
                      position: 3,
                      name: 'SUM Ultimate — Bhubaneswar, Odisha',
                      description: 'Premium interior and ceiling execution at SUM Ultimate, Bhubaneswar.',
                    },
                    {
                      '@type': 'ListItem',
                      position: 4,
                      name: 'Coconut Peninsula Resort — Tangi, Odisha',
                      description: 'Premium hospitality interior and exterior execution at Coconut Peninsula Resort.',
                    },
                    {
                      '@type': 'ListItem',
                      position: 5,
                      name: 'Navi Mumbai Infrastructure Project — Maharashtra',
                      description: 'Large-scale ceiling and cladding execution in Navi Mumbai, Maharashtra.',
                    },
                    {
                      '@type': 'ListItem',
                      position: 6,
                      name: 'KIIT University — Bhubaneswar, Odisha',
                      description: 'Architectural ceiling and cladding execution for KIIT University campus.',
                    },
                  ],
                },
              ],
            }),
          }}
        />
      </head>
      <body style={{ fontFamily: "'Inter', system-ui, -apple-system, sans-serif" }}>
        <SmoothScroll>{children}</SmoothScroll>
        <WhatsAppButton />
      </body>
    </html>
  );
}
