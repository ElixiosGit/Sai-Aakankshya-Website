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
    default: 'SAI AAKANKSHYA ASSOCIATES | Premium Infrastructure Execution — Bhubaneswar, India',
    template: '%s | SAI AAKANKSHYA ASSOCIATES',
  },

  description:
    'SAI AAKANKSHYA ASSOCIATES is a premier infrastructure execution company based in Bhubaneswar, Odisha. Specializing in false ceiling systems, wall cladding, aluminium facade, interior & exterior execution, and civil construction across airports, institutions, hospitality, and government projects across India. Led by 28 years of industry expertise.',

  keywords: [
    // Brand
    'SAI AAKANKSHYA ASSOCIATES',
    'Sai Aakankshya Associates Bhubaneswar',
    'Debasis Mohapatra infrastructure',
    'SAIA construction Odisha',

    // Core services
    'false ceiling contractor India',
    'false ceiling contractor Bhubaneswar',
    'false ceiling contractor Odisha',
    'gypsum ceiling contractor',
    'metal ceiling contractor',
    'aluminium ceiling contractor',
    'linear baffle ceiling',
    'HDI ceiling systems',
    'ceiling contractor airport',

    // Cladding & Facade
    'wall cladding contractor India',
    'aluminium facade contractor',
    'architectural cladding',
    'facade execution India',
    'wall cladding Bhubaneswar',
    'aluminium tube ceiling',

    // Interior & Exterior
    'interior execution contractor India',
    'exterior execution contractor',
    'turnkey interior contractor',
    'hospitality interior contractor',
    'hotel interior contractor India',
    'resort interior execution',
    'corporate interior contractor',
    'institutional interior contractor',

    // Civil
    'civil construction contractor Odisha',
    'civil infrastructure contractor India',
    'power sector civil contractor',
    'OPTCL contractor',
    'Tata Power contractor',
    'Power Grid contractor',
    'government infrastructure contractor',

    // Fire & Security
    'fire protection system contractor',
    'security system installation India',
    'fire safety contractor',

    // Sectors
    'airport ceiling contractor India',
    'airport cladding contractor',
    'IGI airport contractor',
    'Guwahati airport contractor',
    'university ceiling contractor',
    'KIIT University contractor',
    'mall ceiling contractor',
    'commercial ceiling contractor',
    'government building contractor',

    // Location
    'infrastructure contractor Bhubaneswar',
    'construction company Odisha',
    'ceiling contractor Odisha',
    'interior contractor Odisha',
    'pan India infrastructure contractor',
    'infrastructure company India',
    'construction company Bhubaneswar',

    // Partners
    'HunterDouglas authorized contractor',
    'Saint Gobain contractor',
    'Armstrong ceiling contractor',
    'Philips lighting contractor',
    'Ramco contractor',

    // Long-tail
    'large scale ceiling execution India',
    'ceiling cladding civil facade contractor',
    'premium infrastructure execution India',
    'turnkey infrastructure contractor India',
    'from concept to inauguration contractor',
    'ceiling contractor 11000 sqm',
    'landmark infrastructure projects India',
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
    title: 'SAI AAKANKSHYA ASSOCIATES | Premium Infrastructure Execution — Bhubaneswar, India',
    description:
      'Premier infrastructure execution company in Bhubaneswar, Odisha. False ceiling, wall cladding, aluminium facade, interior & exterior execution, and civil construction across airports, institutions, and government projects across India.',
    images: [
      {
        url: '/assets/images/Delhi T1.jpeg',
        width: 1200,
        height: 630,
        alt: 'SAI AAKANKSHYA ASSOCIATES — Premium Infrastructure Execution',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'SAI AAKANKSHYA ASSOCIATES | Premium Infrastructure Execution',
    description:
      'Premier infrastructure execution company in Bhubaneswar, Odisha. False ceiling, wall cladding, aluminium facade, interior & exterior execution, and civil construction across India.',
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

  verification: {
    google: 'your-google-verification-code',
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
                  url: BASE_URL,
                  logo: {
                    '@type': 'ImageObject',
                    url: `${BASE_URL}/assets/images/saia.png`,
                  },
                  description:
                    'Premier infrastructure execution company specializing in false ceiling, wall cladding, aluminium facade, interior & exterior execution, and civil construction across India.',
                  foundingDate: '2021',
                  founder: {
                    '@type': 'Person',
                    name: 'Mr. Debasis Mohapatra',
                    jobTitle: 'Founder & Director',
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
                    },
                  ],
                  email: 'saiaakankshya.associates@gmail.com',
                  telephone: '+91-9040099001',
                  areaServed: {
                    '@type': 'Country',
                    name: 'India',
                  },
                  sameAs: [],
                  knowsAbout: [
                    'False Ceiling Systems',
                    'Wall Cladding',
                    'Aluminium Facade',
                    'Interior Execution',
                    'Exterior Execution',
                    'Civil Construction',
                    'Fire & Security Systems',
                    'Airport Infrastructure',
                    'Institutional Infrastructure',
                    'Hospitality Interior',
                  ],
                },
                {
                  '@type': 'WebSite',
                  '@id': `${BASE_URL}/#website`,
                  url: BASE_URL,
                  name: 'SAI AAKANKSHYA ASSOCIATES',
                  description:
                    'Premium infrastructure execution company — false ceiling, wall cladding, aluminium facade, interior & exterior execution, and civil construction across India.',
                  publisher: {
                    '@id': `${BASE_URL}/#organization`,
                  },
                  inLanguage: 'en-IN',
                },
                {
                  '@type': 'LocalBusiness',
                  '@id': `${BASE_URL}/#localbusiness`,
                  name: 'SAI AAKANKSHYA ASSOCIATES',
                  image: `${BASE_URL}/assets/images/Delhi T1.jpeg`,
                  url: BASE_URL,
                  telephone: '+91-9040099001',
                  email: 'saiaakankshya.associates@gmail.com',
                  priceRange: '₹₹₹',
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
                          name: 'False Ceiling Systems',
                          description:
                            'Precision-executed ceiling systems — gypsum, metal, aluminium, linear, baffle, and HDI ceiling systems for airports, institutions, and commercial spaces.',
                        },
                      },
                      {
                        '@type': 'Offer',
                        itemOffered: {
                          '@type': 'Service',
                          name: 'Wall Cladding & Aluminium Facade',
                          description:
                            'Premium wall cladding and aluminium facade execution for airports, malls, and large-scale commercial and institutional infrastructure projects.',
                        },
                      },
                      {
                        '@type': 'Offer',
                        itemOffered: {
                          '@type': 'Service',
                          name: 'Interior & Exterior Execution',
                          description:
                            'Complete project execution from conceptualization to inauguration — hospitality, corporate, institutional, and government infrastructure.',
                        },
                      },
                      {
                        '@type': 'Offer',
                        itemOffered: {
                          '@type': 'Service',
                          name: 'Civil Construction',
                          description:
                            'Structural civil works for power sector, government, and public infrastructure — OPTCL, Tata Power, Power Grid Corporation.',
                        },
                      },
                      {
                        '@type': 'Offer',
                        itemOffered: {
                          '@type': 'Service',
                          name: 'Fire & Security Systems',
                          description:
                            'Integrated fire protection and security system installation for commercial complexes, institutions, and airports.',
                        },
                      },
                    ],
                  },
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
