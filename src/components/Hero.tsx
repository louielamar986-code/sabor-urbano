import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { Calendar, ChevronDown } from 'lucide-react';
import heroImg from '../assets/images/sabor_urbano_hero_1783274987620.jpg';

interface HeroProps {
  onOpenReservation: () => void;
}

export default function Hero({ onOpenReservation }: HeroProps) {
  const [mousePosition, setMousePosition] = useState({ x: -1000, y: -1000 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    // Calculate cursor coordinate relative to the Hero section
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseLeave = () => {
    // Move spotlight out of the viewport when cursor leaves
    setMousePosition({ x: -1000, y: -1000 });
  };

  // On touch screens/mobile, place spotlight in the center of the viewport
  useEffect(() => {
    const checkTouch = () => {
      if (window.matchMedia('(pointer: coarse)').matches && containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: rect.width / 2,
          y: rect.height / 2,
        });
      }
    };
    checkTouch();
  }, []);

  const scrollToMenu = () => {
    const el = document.getElementById('menu');
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#16181C]"
      id="inicio"
    >
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt="Sabor Urbano Fusão Gourmet"
          referrerPolicy="no-referrer"
          className="h-full w-full object-cover object-center"
        />
        {/* 40% Opacity Dark Overlay */}
        <div className="absolute inset-0 bg-[#16181C]/40 mix-blend-multiply" />
        {/* Additional smooth gradient fading to section bg */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#16181C] via-[#16181C]/20 to-black/60" />
      </div>

      {/* Aceternity UI-style Golden Spotlight Effect */}
      <div
        className="absolute inset-0 z-10 pointer-events-none transition-opacity duration-300 hidden sm:block"
        style={{
          background: `radial-gradient(300px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(201, 161, 94, 0.15), transparent 80%)`,
        }}
        id="hero-spotlight"
      />

      {/* Content Container */}
      <div className="relative z-20 mx-auto max-w-4xl px-6 text-center mt-16 sm:mt-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="space-y-6"
        >
          {/* Tagline */}
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.25em] text-[#C9A15E] bg-[#C9A15E]/10 border border-[#C9A15E]/20 rounded-full px-4 py-1.5" id="hero-tagline">
            Cozinha Fusão Contemporânea
          </span>

          {/* Title */}
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-[#F2F0EA] leading-[1.15]" id="hero-title">
            Onde cada prato <br />
            <span className="italic text-[#C9A15E] font-medium font-serif">conta uma história</span>
          </h1>

          {/* Subtitle */}
          <p className="font-sans text-base sm:text-xl text-[#A3A099] max-w-2xl mx-auto leading-relaxed" id="hero-subtitle">
            Cozinha fusão contemporânea no coração da cidade. Sabores cosmopolitas com alma moçambicana e requinte internacional.
          </p>

          {/* Action Buttons */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4" id="hero-actions">
            <button
              onClick={onOpenReservation}
              className="w-full sm:w-auto flex items-center justify-center gap-2 font-sans font-medium text-sm py-3.5 px-8 rounded-[8px] bg-[#C9A15E] text-[#16181C] hover:bg-[#B88F4C] hover:-translate-y-0.5 shadow-lg shadow-[#C9A15E]/20 transition-all duration-300 cursor-pointer"
              id="hero-btn-booking"
            >
              <Calendar size={18} /> Reservar mesa
            </button>
            <button
              onClick={scrollToMenu}
              className="w-full sm:w-auto font-sans font-medium text-sm py-3.5 px-8 rounded-[8px] border border-[#F2F0EA]/20 text-[#F2F0EA] hover:border-[#C9A15E] hover:text-[#C9A15E] hover:bg-white/[0.02] transition-all duration-300 cursor-pointer"
              id="hero-btn-menu"
            >
              Conhecer o menu
            </button>
          </div>
        </motion.div>
      </div>

      {/* Down Arrow Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 hidden sm:block">
        <motion.button
          onClick={scrollToMenu}
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-[#A3A099] hover:text-[#C9A15E] transition-colors p-2 cursor-pointer"
          id="hero-arrow-down"
          aria-label="Rolar para baixo"
        >
          <ChevronDown size={28} />
        </motion.button>
      </div>
    </section>
  );
}
