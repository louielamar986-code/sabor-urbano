import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MENU_ITEMS } from '../data';
import { MenuItem } from '../types';

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState<'entradas' | 'principais' | 'sobremesas' | 'bebidas'>('entradas');

  const categories = [
    { id: 'entradas', label: 'Entradas' },
    { id: 'principais', label: 'Principais' },
    { id: 'sobremesas', label: 'Sobremesas' },
    { id: 'bebidas', label: 'Bebidas' }
  ] as const;

  const filteredItems = MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section className="py-24 sm:py-32 bg-[#16181C]" id="menu">
      <div className="mx-auto max-w-7xl px-6 sm:px-12">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C9A15E]"
          >
            A Nossa Cozinha
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-3xl sm:text-5xl font-semibold text-[#F2F0EA]"
            id="menu-section-title"
          >
            Menu de Fusão Contemporânea
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#A3A099] max-w-xl mx-auto"
          >
            Cada iguaria é preparada ao pormenor, combinando ingredientes frescos de produtores locais com técnicas requintadas e sofisticadas.
          </motion.p>
        </div>

        {/* Category Toggles */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12" id="menu-filter-bar">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`font-sans text-xs sm:text-sm font-semibold uppercase tracking-wider py-2.5 px-6 rounded-[8px] transition-all duration-300 cursor-pointer ${
                activeCategory === category.id
                  ? 'bg-[#C9A15E] text-[#16181C] shadow-lg shadow-[#C9A15E]/15'
                  : 'bg-[#22242B] text-[#A3A099] border border-[#C9A15E]/10 hover:text-[#F2F0EA] hover:border-[#C9A15E]/40'
              }`}
              id={`filter-btn-${category.id}`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Menu Grid Container */}
        <motion.div 
          layout 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          id="menu-grid"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item: MenuItem) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={item.id}
                className="group flex flex-col h-full bg-[#22242B] border border-[#C9A15E]/5 rounded-[12px] overflow-hidden shadow-md hover:shadow-xl hover:border-[#C9A15E]/20 transition-all duration-300"
                id={`menu-card-${item.id}`}
              >
                {/* Image Wrap */}
                <div className="relative h-64 overflow-hidden bg-[#16181C]">
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                  <span className="absolute bottom-4 right-4 bg-[#16181C] text-[#C9A15E] font-semibold text-sm font-mono px-3 py-1.5 rounded-[8px] border border-[#C9A15E]/20">
                    {item.price.toLocaleString('pt-PT')} MT
                  </span>
                </div>

                {/* Card Body */}
                <div className="flex-1 p-6 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-serif text-xl font-medium text-[#F2F0EA] group-hover:text-[#C9A15E] transition-colors line-clamp-1">
                      {item.name}
                    </h3>
                    <p className="font-sans text-sm text-[#A3A099] leading-relaxed line-clamp-3">
                      {item.description}
                    </p>
                  </div>
                  
                  <div className="pt-2 border-t border-[#C9A15E]/10 flex items-center justify-between text-xs text-[#A3A099]">
                    <span className="capitalize tracking-wider">{item.category}</span>
                    <span className="text-[#C9A15E] tracking-wider uppercase font-semibold">Exclusivo</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
