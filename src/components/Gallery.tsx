import { motion } from 'motion/react';
import { GALLERY_ITEMS } from '../data';
import { GalleryItem } from '../types';

export default function Gallery() {
  return (
    <section className="py-24 sm:py-32 bg-[#16181C]" id="galeria">
      <div className="mx-auto max-w-7xl px-6 sm:px-12">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C9A15E]">
            Galeria Visual
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-semibold text-[#F2F0EA]" id="gallery-section-title">
            O Nosso Espaço & Criações
          </h2>
          <p className="text-[#A3A099] max-w-xl mx-auto">
            Vislumbre a atmosfera contemporânea e os detalhes artísticos que definem a experiência exclusiva do Sabor Urbano.
          </p>
        </div>

        {/* 3-Column Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" id="gallery-grid">
          {GALLERY_ITEMS.map((item: GalleryItem, index: number) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
              key={item.id}
              className="group relative aspect-4/3 overflow-hidden rounded-[12px] bg-[#22242B] border border-[#C9A15E]/10"
              id={`gallery-item-${item.id}`}
            >
              {/* Image with 300ms hover scale */}
              <img
                src={item.imageUrl}
                alt={item.title}
                referrerPolicy="no-referrer"
                className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
              />

              {/* Dynamic Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6" id={`gallery-overlay-${item.id}`}>
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 ease-out space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C9A15E]">
                    {item.category}
                  </span>
                  <h4 className="font-serif text-lg font-medium text-[#F2F0EA]">
                    {item.title}
                  </h4>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
