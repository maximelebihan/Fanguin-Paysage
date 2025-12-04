import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Reviews from './components/Reviews';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import RevealOnScroll from './components/RevealOnScroll';
import Gallery from './components/Gallery';
import Process from './components/Process';
import FAQ from './components/FAQ';

function App() {
  return (
    <div className="min-h-screen bg-fanguin-cream font-sans overflow-x-hidden">
      <Header />
      <main>
        {/* Hero est statique, pas besoin de reveal */}
        <Hero />
        
        <RevealOnScroll>
          <Services />
        </RevealOnScroll>

        <RevealOnScroll>
          <About />
        </RevealOnScroll>

        <RevealOnScroll>
          <Process />
        </RevealOnScroll>

        <RevealOnScroll>
          <Gallery />
        </RevealOnScroll>

        <RevealOnScroll>
          <Pricing />
        </RevealOnScroll>

        <RevealOnScroll>
          <Reviews />
        </RevealOnScroll>

        <RevealOnScroll>
          <FAQ />
        </RevealOnScroll>

        <RevealOnScroll>
          <Contact />
        </RevealOnScroll>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;