import React, { useState } from 'react';
import { Mail, MapPin, Clock, Instagram, Facebook, Award, Send, Check } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    // Quick regex validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMsg('Por favor, insira um e-mail válido.');
      return;
    }

    setIsSubscribed(true);
    setEmail('');
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0F1114] border-t border-[#C9A15E]/10 pt-16 pb-8" id="contacto">
      <div className="mx-auto max-w-7xl px-6 sm:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
        
        {/* Column 1: Brand & Bio */}
        <div className="md:col-span-4 space-y-6">
          <h3 className="font-serif text-2xl font-semibold text-[#F2F0EA]">
            Sabor <span className="text-[#C9A15E]">Urbano</span>
          </h3>
          <p className="text-sm text-[#A3A099] leading-relaxed max-w-xs">
            Cozinha fusão contemporânea no coração de Maputo. Sabores sofisticados que aproximam culturas e despertam os sentidos.
          </p>
          {/* Social Icons with elegant hovers */}
          <div className="flex gap-4" id="social-links-footer">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 w-10 flex items-center justify-center rounded-[8px] bg-[#16181C] text-[#A3A099] border border-[#C9A15E]/10 hover:border-[#C9A15E] hover:text-[#C9A15E] hover:bg-[#C9A15E]/5 transition-all"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 w-10 flex items-center justify-center rounded-[8px] bg-[#16181C] text-[#A3A099] border border-[#C9A15E]/10 hover:border-[#C9A15E] hover:text-[#C9A15E] hover:bg-[#C9A15E]/5 transition-all"
              aria-label="Facebook"
            >
              <Facebook size={18} />
            </a>
            <a
              href="https://tripadvisor.com"
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 w-10 flex items-center justify-center rounded-[8px] bg-[#16181C] text-[#A3A099] border border-[#C9A15E]/10 hover:border-[#C9A15E] hover:text-[#C9A15E] hover:bg-[#C9A15E]/5 transition-all font-serif font-bold text-sm"
              aria-label="Tripadvisor"
            >
              TA
            </a>
          </div>
        </div>

        {/* Column 2: Details & Schedule */}
        <div className="md:col-span-4 space-y-6">
          <h4 className="font-serif text-sm font-semibold uppercase tracking-wider text-[#C9A15E]">
            Contactos & Horário
          </h4>
          
          <ul className="space-y-4 text-sm text-[#A3A099]" id="footer-details-list">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-[#C9A15E] shrink-0 mt-0.5" />
              <div>
                <p className="text-[#F2F0EA] font-medium">Endereço:</p>
                <p>Av. Julius Nyerere, Maputo, Moçambique</p>
              </div>
            </li>
            
            <li className="flex items-start gap-3">
              <Clock size={18} className="text-[#C9A15E] shrink-0 mt-0.5" />
              <div>
                <p className="text-[#F2F0EA] font-medium">Horário de Funcionamento:</p>
                <p>Terça-Feira a Domingo, das 12:00 às 23:00</p>
                <p className="text-xs text-[#A3A099]/60 italic">Encerrado às Segundas-Feiras</p>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <Mail size={18} className="text-[#C9A15E] shrink-0 mt-0.5" />
              <div>
                <p className="text-[#F2F0EA] font-medium">Reservas Directas:</p>
                <p>reservas@saborurbano.co.mz</p>
                <p>+258 84 987 6543</p>
              </div>
            </li>
          </ul>
        </div>

        {/* Column 3: Newsletter */}
        <div className="md:col-span-4 space-y-6">
          <h4 className="font-serif text-sm font-semibold uppercase tracking-wider text-[#C9A15E]">
            Subscrever Novidades
          </h4>
          <p className="text-sm text-[#A3A099] leading-relaxed">
            Receba convites para os nossos eventos exclusivos, harmonizações de vinhos e actualizações do menu sazonal.
          </p>

          {!isSubscribed ? (
            <form onSubmit={handleSubscribe} className="space-y-2" id="newsletter-form">
              <div className="relative">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="O seu e-mail de eleição"
                  className="w-full rounded-[8px] bg-[#16181C] border border-[#C9A15E]/10 py-3 pl-4 pr-12 text-sm text-[#F2F0EA] placeholder-[#A3A099]/40 outline-none transition-all focus:border-[#C9A15E]"
                  id="newsletter-email-input"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1.5 h-9 w-9 flex items-center justify-center rounded-[6px] bg-[#C9A15E] text-[#16181C] hover:bg-[#B88F4C] transition-colors cursor-pointer"
                  id="newsletter-submit-btn"
                  aria-label="Subscrever"
                >
                  <Send size={14} />
                </button>
              </div>
              {errorMsg && (
                <p className="text-xs text-red-400 font-sans pl-1" id="newsletter-error">
                  {errorMsg}
                </p>
              )}
            </form>
          ) : (
            <div 
              className="rounded-[8px] bg-[#C9A15E]/10 border border-[#C9A15E]/20 p-4 flex items-start gap-3 text-sm text-[#C9A15E]"
              id="newsletter-success-box"
            >
              <Check size={18} className="shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold">Subscrição Concluída!</p>
                <p className="text-xs text-[#A3A099] mt-0.5">Obrigado por se juntar à comunidade Sabor Urbano.</p>
              </div>
            </div>
          )}
        </div>

      </div>

      {/* Footer Bottom Rights */}
      <div className="mx-auto max-w-7xl px-6 sm:px-12 pt-8 border-t border-[#C9A15E]/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A3A099]">
        <p id="footer-copyright">
          &copy; {currentYear} Sabor Urbano. Todos os direitos reservados.
        </p>
        <p className="flex items-center gap-1" id="footer-signature">
          Cozinha de Autor em Maputo <Award size={14} className="text-[#C9A15E]" />
        </p>
      </div>
    </footer>
  );
}
