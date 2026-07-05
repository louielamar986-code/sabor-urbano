import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Calendar } from 'lucide-react';

interface HeaderProps {
  onOpenReservation: () => void;
}

export default function Header({ onOpenReservation }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  // Track scrolling to toggle solid background and active section
  useEffect(() => {
    const handleScroll = () => {
      // Toggle header background
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Detect active section based on scroll position
      const sections = ['inicio', 'menu', 'sobre', 'galeria', 'testemunhos', 'contacto'];
      const scrollPosition = window.scrollY + 120; // offset for header height

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    
    if (sectionId === 'reservas') {
      onOpenReservation();
      return;
    }

    const el = document.getElementById(sectionId);
    if (el) {
      const offset = 80; // height of the fixed header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const menuItems = [
    { label: 'Início', target: 'inicio' },
    { label: 'Menu', target: 'menu' },
    { label: 'Sobre', target: 'sobre' },
    { label: 'Reservas', target: 'reservas', highlight: true },
    { label: 'Contacto', target: 'contacto' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#16181C] shadow-lg border-b border-[#C9A15E]/10 py-4'
          : 'bg-transparent py-6'
      }`}
      id="main-header"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-12 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollToSection('inicio')}
          className="font-serif text-2xl font-semibold text-[#F2F0EA] tracking-wide hover:text-[#C9A15E] transition-colors cursor-pointer select-none"
          id="header-logo"
        >
          Sabor <span className="text-[#C9A15E]">Urbano</span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8" id="desktop-nav">
          {menuItems.map((item) => (
            <button
              key={item.target}
              onClick={() => scrollToSection(item.target)}
              className={`font-sans text-sm tracking-wider uppercase transition-colors relative py-1 cursor-pointer font-medium ${
                item.highlight
                  ? 'text-[#C9A15E] hover:text-[#B88F4C] border border-[#C9A15E]/30 rounded-[8px] px-4 py-1.5 hover:bg-[#C9A15E]/10'
                  : activeSection === item.target
                  ? 'text-[#C9A15E]'
                  : 'text-[#F2F0EA] hover:text-[#C9A15E]'
              }`}
              id={`nav-item-${item.target}`}
            >
              {item.label}
              {!item.highlight && activeSection === item.target && (
                <motion.span
                  layoutId="activeIndicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C9A15E]"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="block md:hidden text-[#F2F0EA] hover:text-[#C9A15E] transition-colors p-1"
          id="mobile-menu-toggle"
          aria-label="Menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#16181C] border-b border-[#C9A15E]/10 overflow-hidden"
            id="mobile-nav-container"
          >
            <div className="px-6 py-6 space-y-4 flex flex-col">
              {menuItems.map((item) => (
                <button
                  key={item.target}
                  onClick={() => scrollToSection(item.target)}
                  className={`font-sans text-left text-sm tracking-widest uppercase py-3 border-b border-white/5 last:border-0 transition-colors ${
                    item.highlight
                      ? 'text-[#C9A15E] font-semibold flex items-center gap-2'
                      : activeSection === item.target
                      ? 'text-[#C9A15E]'
                      : 'text-[#F2F0EA]'
                  }`}
                  id={`mobile-nav-item-${item.target}`}
                >
                  {item.highlight && <Calendar size={16} />}
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
