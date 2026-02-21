import React from 'react';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import AiInteraction from '@/components/AiInteraction';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

function App() {
  return (
    <>
      <Helmet>
        <title>York's Leader in AI-Driven Web Design | Media & Technology Group, LLC</title>
        <meta name="description" content="25+ years of pairing technology with results. Affordable AI-driven web design, SEO, PPC, and custom software development for York, PA businesses." />
      </Helmet>
      
      <div className="min-h-screen bg-brand-dark-teal text-brand-off-white">
        <Header />
        <main>
          <Hero />
          <Services />
          <AiInteraction />
          
          <CTA />
        </main>
        <Footer />
        <Toaster />
      </div>
    </>
  );
}

export default App;