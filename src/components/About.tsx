import { motion } from 'motion/react';
import { Award, ShieldCheck, Soup, Sparkles } from 'lucide-react';
import interiorImg from '../assets/images/sabor_urbano_interior_1783275002905.jpg';

export default function About() {
  const values = [
    {
      icon: <Soup className="text-[#C9A15E]" size={24} />,
      title: 'Ingredientes Frescos',
      description: 'Peixe e marisco do Índico capturados no próprio dia e ervas aromáticas biológicas locais.'
    },
    {
      icon: <Sparkles className="text-[#C9A15E]" size={24} />,
      title: 'Fusão Inovadora',
      description: 'Cruzamento ousado entre a alma moçambicana e o refinamento da alta gastronomia internacional.'
    },
    {
      icon: <Award className="text-[#C9A15E]" size={24} />,
      title: 'Serviço de Excelência',
      description: 'Uma recepção acolhedora e personalizada para proporcionar jantares inesquecíveis.'
    }
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#22242B]/30 border-y border-[#C9A15E]/5" id="sobre">
      <div className="mx-auto max-w-7xl px-6 sm:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left: Text Block */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C9A15E]">
                A Nossa Essência
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-semibold text-[#F2F0EA] leading-tight">
                Inovação Gastronómica <br />
                <span className="italic text-[#C9A15E] font-medium font-serif">com Raízes Locais</span>
              </h2>
            </div>

            <p className="font-sans text-base text-[#A3A099] leading-relaxed">
              Fundado no coração de Maputo, na prestigiada Avenida Julius Nyerere, o restaurante <strong className="text-[#F2F0EA] font-medium">Sabor Urbano</strong> nasceu da paixão por reinventar as tradições. Propomos uma cozinha fusão contemporânea que respeita e exalta a biodiversidade gastronómica de Moçambique, combinando-a com técnicas vanguardistas globais.
            </p>

            <p className="font-sans text-base text-[#A3A099] leading-relaxed">
              O nosso chef executivo desenha cada estação do ano com sensibilidade artística, transformando pratos clássicos em novas experiências sensoriais. Dos citrinos sumarentos à ardência equilibrada do piri-piri artesanal, cada elemento no prato tem um propósito e conta a sua própria história.
            </p>

            {/* Values / Features list */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-[#C9A15E]/10">
              {values.map((val, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex items-center gap-2">
                    {val.icon}
                    <h4 className="font-serif text-sm font-semibold text-[#F2F0EA]">{val.title}</h4>
                  </div>
                  <p className="text-xs text-[#A3A099] leading-relaxed">
                    {val.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Graphic Elements & Generated Asset Display */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="relative z-10 rounded-[12px] overflow-hidden border border-[#C9A15E]/10 shadow-2xl"
              id="about-image-wrapper"
            >
              <img
                src={interiorImg}
                alt="Ambiente Interior do Sabor Urbano"
                referrerPolicy="no-referrer"
                className="w-full h-[450px] object-cover hover:scale-105 transition-transform duration-700 ease-out"
                id="about-img-interior"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#16181C] via-transparent to-transparent opacity-40" />
            </motion.div>

            {/* Decorative Gold Frame Outline */}
            <div className="absolute -top-4 -left-4 w-1/2 h-1/2 border-t-2 border-l-2 border-[#C9A15E]/30 pointer-events-none rounded-tl-[12px]" />
            <div className="absolute -bottom-4 -right-4 w-1/2 h-1/2 border-b-2 border-r-2 border-[#C9A15E]/30 pointer-events-none rounded-br-[12px]" />

            {/* Float Badge */}
            <div className="absolute bottom-6 left-6 z-20 bg-[#16181C] border border-[#C9A15E]/20 rounded-[8px] p-4 flex items-center gap-3 shadow-xl">
              <span className="font-serif text-3xl font-bold text-[#C9A15E] tracking-tight">5★</span>
              <div className="text-xs leading-normal">
                <p className="text-[#F2F0EA] font-semibold">Culinária Criativa</p>
                <p className="text-[#A3A099]">Maputo, MZ</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
