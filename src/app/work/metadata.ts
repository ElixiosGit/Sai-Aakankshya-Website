import type { Metadata } from 'next';

const BASE_URL = 'https://www.saiaakankshyaassociates.com';

export const metadata: Metadata = {
  title: 'Our Work — 12+ Landmark Infrastructure Projects Across India',
  description:
    'Explore SAI AAKANKSHYA ASSOCIATES portfolio of 12+ landmark projects — Indira Gandhi International Airport New Delhi, KIIT University, Coconut Peninsula Resort, SUM Ultimate Bhubaneswar, Guwahati Airport, Navi Mumbai, and more. Over 11,000 sqm of premium ceiling, cladding, and infrastructure execution across India.',
  keywords: [
    'infrastructure projects India',
    'ceiling projects India',
    'airport ceiling project',
    'IGI airport ceiling contractor',
    'Indira Gandhi International Airport contractor',
    'Guwahati airport contractor',
    'KIIT University ceiling contractor',
    'SUM Ultimate Bhubaneswar contractor',
    'Coconut Peninsula Resort interior',
    'Navi Mumbai infrastructure project',
    'ceiling cladding portfolio India',
    'landmark infrastructure projects',
    'false ceiling portfolio',
    'wall cladding portfolio India',
    'interior execution portfolio',
    'civil construction portfolio',
    'government project contractor India',
    'institutional project contractor',
    'hospitality project contractor India',
    'commercial project contractor India',
    '11000 sqm ceiling execution',
    'pan India infrastructure projects',
    'premium execution portfolio',
    'infrastructure gallery India',
  ],
  alternates: {
    canonical: `${BASE_URL}/work`,
  },
  openGraph: {
    title: 'Our Work — 12+ Landmark Infrastructure Projects Across India',
    description:
      'Portfolio of 12+ landmark projects — IGI Airport, KIIT University, SUM Ultimate, Guwahati Airport, and more. Over 11,000 sqm of premium ceiling, cladding, and infrastructure execution.',
    url: `${BASE_URL}/work`,
    images: [
      {
        url: '/assets/images/Delhi T1.jpeg',
        width: 1200,
        height: 630,
        alt: 'SAI AAKANKSHYA ASSOCIATES — Project Portfolio',
      },
    ],
  },
  twitter: {
    title: 'Our Work — 12+ Landmark Infrastructure Projects Across India',
    description:
      'Portfolio of 12+ landmark projects across airports, institutions, hospitality, and government infrastructure across India.',
    images: ['/assets/images/Delhi T1.jpeg'],
  },
};
