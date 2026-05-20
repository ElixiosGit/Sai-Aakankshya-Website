import type { Metadata } from 'next';
import Navbar from '@/components/wallnut/Navbar';
import HeroSection from '@/components/wallnut/HeroSection';
import AboutSection from '@/components/wallnut/AboutSection';
import ScrollVideoSection from '@/components/wallnut/ScrollVideoSection';
import ServicesSection from '@/components/wallnut/ServicesSection';
import PortfolioSection from '@/components/wallnut/PortfolioSection';
import TimelineSection from '@/components/wallnut/TimelineSection';
import Footer from '@/components/wallnut/Footer';

const BASE_URL = 'https://www.saiaakankshyaassociates.com';

export const metadata: Metadata = {
  title: 'SAI AAKANKSHYA ASSOCIATES | Premium Infrastructure Execution — Bhubaneswar, India',
  description:
    'SAI AAKANKSHYA ASSOCIATES — premier infrastructure execution company in Bhubaneswar, Odisha. Specializing in false ceiling systems, wall cladding, aluminium facade, interior & exterior execution, and civil construction across airports, institutions, hospitality, and government projects across India. Led by 28 years of industry expertise.',
  keywords: [
    'SAI AAKANKSHYA ASSOCIATES',
    'false ceiling contractor India',
    'wall cladding contractor India',
    'aluminium facade contractor',
    'interior execution contractor India',
    'civil construction contractor Odisha',
    'infrastructure company Bhubaneswar',
    'ceiling contractor airport India',
    'premium infrastructure execution',
    'turnkey contractor India',
    'Debasis Mohapatra',
    'HunterDouglas contractor',
    'Saint Gobain contractor',
    'Armstrong ceiling contractor',
    'ceiling contractor Odisha',
    'construction company Bhubaneswar',
  ],
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    title: 'SAI AAKANKSHYA ASSOCIATES | Premium Infrastructure Execution',
    description:
      'Premier infrastructure execution company in Bhubaneswar, Odisha. False ceiling, wall cladding, aluminium facade, interior & exterior execution, and civil construction across India.',
    url: BASE_URL,
    images: [
      {
        url: '/assets/images/Delhi T1.jpeg',
        width: 1200,
        height: 630,
        alt: 'SAI AAKANKSHYA ASSOCIATES — Premium Infrastructure Execution',
      },
    ],
  },
};

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Navbar - fixed overlay, shows after hero */}
      <Navbar />

      {/* Hero Section - Full viewport height, includes its own nav */}
      <HeroSection />

      {/* About / Construction Zones Section */}
      <AboutSection />

      {/* Scroll Video Section — FROM CONCEPT TO COMPLETION */}
      <ScrollVideoSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Portfolio / Nailed Projects Section */}
      <PortfolioSection />

      {/* Timeline / Process Section */}
      <TimelineSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
