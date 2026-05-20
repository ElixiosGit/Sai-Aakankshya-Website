import type { Metadata } from 'next';

const BASE_URL = 'https://www.saiaakankshyaassociates.com';

export const metadata: Metadata = {
  title: 'Contact Us — Start Your Infrastructure Project | SAI AAKANKSHYA ASSOCIATES',
  description:
    'Get in touch with SAI AAKANKSHYA ASSOCIATES for your infrastructure project. Contact us for false ceiling, wall cladding, aluminium facade, interior & exterior execution, and civil construction projects across India. Call +91 9040099001 or email saiaakankshya.associates@gmail.com.',
  keywords: [
    'contact SAI AAKANKSHYA ASSOCIATES',
    'infrastructure contractor contact India',
    'ceiling contractor contact Bhubaneswar',
    'false ceiling quote India',
    'wall cladding quote India',
    'interior execution quote',
    'civil construction quote India',
    'infrastructure project inquiry',
    'ceiling contractor phone number',
    'construction company Bhubaneswar contact',
    'infrastructure company Odisha contact',
    'start infrastructure project India',
    'get ceiling quote India',
    'hire ceiling contractor India',
    'hire interior contractor India',
    'infrastructure execution inquiry',
    'Rasulgarh Bhubaneswar contractor',
    'Odisha infrastructure company contact',
  ],
  alternates: {
    canonical: `${BASE_URL}/contact`,
  },
  openGraph: {
    title: 'Contact SAI AAKANKSHYA ASSOCIATES — Start Your Infrastructure Project',
    description:
      'Get in touch for false ceiling, wall cladding, interior execution, and civil construction projects across India. Call +91 9040099001.',
    url: `${BASE_URL}/contact`,
    images: [
      {
        url: '/assets/images/Delhi T1.jpeg',
        width: 1200,
        height: 630,
        alt: 'Contact SAI AAKANKSHYA ASSOCIATES',
      },
    ],
  },
  twitter: {
    title: 'Contact SAI AAKANKSHYA ASSOCIATES — Start Your Infrastructure Project',
    description:
      'Get in touch for ceiling, cladding, interior, and civil construction projects across India. Call +91 9040099001.',
    images: ['/assets/images/Delhi T1.jpeg'],
  },
};
