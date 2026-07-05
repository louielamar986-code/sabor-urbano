import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Auto advancement logic (every 5 seconds)
  useEffect(() => {
    if (!isHovered) {
      timerRef.current = setInterval(() => {
        handleNext();
      }, 5000);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [activeIndex, isHovered]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };

  const activeTestimonial = TESTIMONIALS[activeIndex];

  return (
    <section 
      className="py-24 sm:py-32 bg-[#22242B]/30 border-y border-[#C9A15E]/5" 
      id="testemunhos"
    >
      <div className="mx-auto max-w-4xl px-6 sm:px-12 text-center">
        {/* Section Header */}
        <div className="space-y-4 mb-12">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C9A15E]">
            Críticas & Opiniões
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-semibold text-[#F2F0EA]">
            O que dizem sobre nós
          </h2>
        </div>

        {/* Carousel Container */}
        <div 
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative min-h-[300px] flex flex-col justify-center rounded-[12px] bg-[#16181C] border border-[#C9A15E]/10 p-8 sm:p-12 shadow-xl"
          id="testimonials-carousel"
        >
          {/* Quote Mark Decorator */}
          <div className="absolute top-6 left-6 text-[#C9A15E]/10 pointer-events-none">
            <Quote size={56} className="transform scale-x-[-1]" />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="space-y-6"
              id={`testimonial-slide-${activeTestimonial.id}`}
            >
              {/* Star Rating */}
              <div className="flex justify-center gap-1" id="stars-row">
                {[...Array(activeTestimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-[#C9A15E] text-[#C9A15E]" />
                ))}
              </div>

              {/* Review Text */}
              <blockquote className="font-serif text-lg sm:text-xl text-[#F2F0EA] italic leading-relaxed px-4 sm:px-8">
                "{activeTestimonial.text}"
              </blockquote>

              {/* Reviewer Details */}
              <div className="space-y-1">
                <cite className="not-italic font-sans text-sm font-semibold text-[#C9A15E] uppercase tracking-wider block">
                  {activeTestimonial.author}
                </cite>
                <span className="text-xs text-[#A3A099] uppercase tracking-widest font-mono">
                  {activeTestimonial.role}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <div className="absolute inset-y-0 left-2 right-2 flex items-center justify-between pointer-events-none">
            <button
              onClick={handlePrev}
              className="pointer-events-auto h-10 w-10 flex items-center justify-center rounded-full bg-[#22242B]/80 text-[#F2F0EA] border border-[#C9A15E]/15 hover:border-[#C9A15E] hover:text-[#C9A15E] transition-all cursor-pointer"
              id="testimonial-prev-arrow"
              aria-label="Testemunho anterior"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={handleNext}
              className="pointer-events-auto h-10 w-10 flex items-center justify-center rounded-full bg-[#22242B]/80 text-[#F2F0EA] border border-[#C9A15E]/15 hover:border-[#C9A15E] hover:text-[#C9A15E] transition-all cursor-pointer"
              id="testimonial-next-arrow"
              aria-label="Próximo testemunho"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Position indicators (Dots) */}
        <div className="flex justify-center gap-3 mt-8" id="carousel-dots">
          {TESTIMONIALS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => handleDotClick(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                activeIndex === idx 
                  ? 'w-8 bg-[#C9A15E]' 
                  : 'w-2.5 bg-[#A3A099]/30 hover:bg-[#C9A15E]/50'
              }`}
              id={`carousel-dot-${idx}`}
              aria-label={`Ir para slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
