import type { Metadata } from 'next';

const BASE_URL = 'https://www.saiaakankshyaassociates.com';

export const metadata: Metadata = {
  title: 'About Us — SAI AAKANKSHYA ASSOCIATES | 28 Years of Infrastructure Excellence',
  description:
    'Learn about SAI AAKANKSHYA ASSOCIATES — founded in 2021 by Mr. Debasis Mohapatra with 28 years of corporate expertise. Headquartered in Bhubaneswar, Odisha, delivering premium ceiling, cladding, interior, exterior, and civil infrastructure execution across India.',
  keywords: [
    'about SAI AAKANKSHYA ASSOCIATES',
    'Debasis Mohapatra founder',
    'infrastructure company Bhubaneswar',
    'construction company Odisha',
    'ceiling cladding company India',
    'infrastructure execution company',
    'HunterDouglas partner India',
    'Saint Gobain contractor India',
    'Armstrong ceiling partner',
    'Philips contractor India',
    'Ramco contractor',
    'airport ceiling company India',
    'institutional infrastructure company',
    'hospitality interior company India',
    'government infrastructure contractor',
    'power sector contractor Odisha',
    'OPTCL contractor',
    'Tata Power contractor',
    'Pan India infrastructure company',
    'premium execution company Bhubaneswar',
  ],
  alternates: {
    canonical: `${BASE_URL}/about`,
  },
  openGraph: {
    title: 'About SAI AAKANKSHYA ASSOCIATES | 28 Years of Infrastructure Excellence',
    description:
      'Founded in 2021 by Mr. Debasis Mohapatra with 28 years of expertise. Premier infrastructure execution company delivering ceiling, cladding, interior, and civil projects across India.',
    url: `${BASE_URL}/about`,
    images: [
      {
        url: '/assets/images/Delhi T1.jpeg',
        width: 1200,
        height: 630,
        alt: 'SAI AAKANKSHYA ASSOCIATES — About Us',
      },
    ],
  },
  twitter: {
    title: 'About SAI AAKANKSHYA ASSOCIATES | 28 Years of Infrastructure Excellence',
    description:
      'Founded in 2021 by Mr. Debasis Mohapatra with 28 years of expertise. Premier infrastructure execution company across India.',
    images: ['/assets/images/Delhi T1.jpeg'],
  },
};
