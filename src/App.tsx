import React, { useState } from 'react';
import { motion } from 'motion/react';
import Header from './components/Header';
import Hero from './components/Hero';
import Menu from './components/Menu';
import About from './components/About';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import ReservationModal from './components/ReservationModal';

// Animated wrapper for viewport-triggered entrance animation: fade-in + slide-up (20px)
interface AnimatedSectionProps {
  children: React.ReactNode;
  id: string;
}

function AnimatedSection({ children, id }: AnimatedSectionProps) {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  const [isReservationOpen, setIsReservationOpen] = useState(false);

  const openReservation = () => setIsReservationOpen(true);
  const closeReservation = () => setIsReservationOpen(false);

  return (
    <div className="min-h-screen bg-[#16181C] text-[#F2F0EA] font-sans antialiased overflow-x-hidden selection:bg-[#C9A15E] selection:text-[#16181C]" id="app-root">
      {/* Fixed Sticky Header */}
      <Header onOpenReservation={openReservation} />

      {/* Hero Landing Stage */}
      <Hero onOpenReservation={openReservation} />

      {/* Main Sections with entrance animations */}
      <main id="main-content">
        {/* Menu Grid section with filters */}
        <AnimatedSection id="menu">
          <Menu />
        </AnimatedSection>

        {/* Storytelling & Values section */}
        <AnimatedSection id="sobre">
          <About />
        </AnimatedSection>

        {/* Gallery Grid with hover zooming */}
        <AnimatedSection id="galeria">
          <Gallery />
        </AnimatedSection>

        {/* Autoplay Client Testimonials */}
        <AnimatedSection id="testemunhos">
          <Testimonials />
        </AnimatedSection>
      </main>

      {/* Map, Opening Hours, Contacts, Social and Subscription Newsletter */}
      <Footer />

      {/* Full Booking form Modal */}
      <ReservationModal isOpen={isReservationOpen} onClose={closeReservation} />
    </div>
  );
}

