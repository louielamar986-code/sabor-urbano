import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, Users, Clock, Phone, User, Check, Sparkles } from 'lucide-react';
import { ReservationData } from '../types';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ReservationModal({ isOpen, onClose }: ReservationModalProps) {
  const [name, setName] = useState('');
  const [guests, setGuests] = useState(2);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [minDate, setMinDate] = useState('');

  // Set minimum date to today
  useEffect(() => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    setMinDate(`${yyyy}-${mm}-${dd}`);
  }, []);

  // Form validation
  const isValid = name.trim() !== '' && phone.trim() !== '' && date !== '' && time !== '';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isValid) {
      setIsSubmitted(true);
    }
  };

  const handleClose = () => {
    onClose();
    // Reset state after transition completes
    setTimeout(() => {
      setName('');
      setGuests(2);
      setDate('');
      setTime('');
      setPhone('');
      setIsSubmitted(false);
    }, 300);
  };

  // Time slots from 18:00 to 23:00 in 30min intervals
  const timeSlots = [
    '18:00', '18:30', '19:00', '19:30', '20:00', '20:30',
    '21:00', '21:30', '22:00', '22:30', '23:00'
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6" id="reservation-modal-wrapper">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            id="modal-backdrop"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="relative w-full max-w-lg overflow-hidden rounded-[12px] bg-[#16181C] border border-[#C9A15E]/20 shadow-2xl z-10"
            id="modal-card"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-[#C9A15E]/10 px-6 py-4">
              <h3 className="font-serif text-2xl text-[#F2F0EA]" id="modal-title">
                {isSubmitted ? 'Reserva Confirmada' : 'Reservar uma Mesa'}
              </h3>
              <button
                onClick={handleClose}
                className="rounded-full p-1.5 text-[#A3A099] hover:bg-[#C9A15E]/10 hover:text-[#C9A15E] transition-all"
                id="modal-close-btn"
                aria-label="Fechar"
              >
                <X size={20} />
              </button>
            </div>

            {/* Content Area */}
            <div className="p-6">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-5" id="booking-form">
                  {/* Name field */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-medium uppercase tracking-wider text-[#A3A099]">
                      Nome Completo *
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-[#C9A15E]/60">
                        <User size={18} />
                      </span>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Ex: Carlos Tembe"
                        className="w-full rounded-[8px] bg-[#22242B] border border-[#C9A15E]/10 py-2.5 pl-10 pr-4 text-[#F2F0EA] placeholder-[#A3A099]/40 outline-none transition-all focus:border-[#C9A15E] focus:ring-1 focus:ring-[#C9A15E]/20"
                        id="form-input-name"
                      />
                    </div>
                  </div>

                  {/* Phone field */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-medium uppercase tracking-wider text-[#A3A099]">
                      Telemóvel *
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-[#C9A15E]/60">
                        <Phone size={18} />
                      </span>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Ex: +258 84 123 4567"
                        className="w-full rounded-[8px] bg-[#22242B] border border-[#C9A15E]/10 py-2.5 pl-10 pr-4 text-[#F2F0EA] placeholder-[#A3A099]/40 outline-none transition-all focus:border-[#C9A15E] focus:ring-1 focus:ring-[#C9A15E]/20"
                        id="form-input-phone"
                      />
                    </div>
                  </div>

                  {/* Guests Selector */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-medium uppercase tracking-wider text-[#A3A099]">
                      Número de Pessoas
                    </label>
                    <div className="flex items-center justify-between rounded-[8px] bg-[#22242B] border border-[#C9A15E]/10 p-2">
                      <div className="flex items-center gap-2 pl-2 text-[#C9A15E]/60">
                        <Users size={18} />
                        <span className="text-sm text-[#F2F0EA]">{guests} {guests === 1 ? 'pessoa' : 'pessoas'}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <button
                          type="button"
                          onClick={() => setGuests(prev => Math.max(1, prev - 1))}
                          disabled={guests <= 1}
                          className="flex h-8 w-8 items-center justify-center rounded-md bg-[#16181C] text-[#F2F0EA] border border-[#C9A15E]/10 hover:border-[#C9A15E] hover:text-[#C9A15E] disabled:opacity-30 disabled:hover:border-[#C9A15E]/10 disabled:hover:text-[#F2F0EA] transition-all"
                          id="btn-guests-dec"
                        >
                          -
                        </button>
                        <button
                          type="button"
                          onClick={() => setGuests(prev => Math.min(10, prev + 1))}
                          disabled={guests >= 10}
                          className="flex h-8 w-8 items-center justify-center rounded-md bg-[#16181C] text-[#F2F0EA] border border-[#C9A15E]/10 hover:border-[#C9A15E] hover:text-[#C9A15E] disabled:opacity-30 disabled:hover:border-[#C9A15E]/10 disabled:hover:text-[#F2F0EA] transition-all"
                          id="btn-guests-inc"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Date & Time Row */}
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {/* Date picker */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-medium uppercase tracking-wider text-[#A3A099]">
                        Data *
                      </label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-[#C9A15E]/60 pointer-events-none">
                          <Calendar size={18} />
                        </span>
                        <input
                          type="date"
                          required
                          min={minDate}
                          value={date}
                          onChange={(e) => setDate(e.target.value)}
                          className="w-full rounded-[8px] bg-[#22242B] border border-[#C9A15E]/10 py-2.5 pl-10 pr-4 text-[#F2F0EA] outline-none transition-all focus:border-[#C9A15E] focus:ring-1 focus:ring-[#C9A15E]/20 [color-scheme:dark]"
                          id="form-input-date"
                        />
                      </div>
                    </div>

                    {/* Time picker */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-medium uppercase tracking-wider text-[#A3A099]">
                        Hora *
                      </label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-[#C9A15E]/60 pointer-events-none">
                          <Clock size={18} />
                        </span>
                        <select
                          required
                          value={time}
                          onChange={(e) => setTime(e.target.value)}
                          className="w-full rounded-[8px] bg-[#22242B] border border-[#C9A15E]/10 py-2.5 pl-10 pr-4 text-[#F2F0EA] outline-none appearance-none transition-all focus:border-[#C9A15E] focus:ring-1 focus:ring-[#C9A15E]/20 cursor-pointer"
                          id="form-input-time"
                        >
                          <option value="" disabled className="text-[#A3A099]/30">Selecione...</option>
                          {timeSlots.map(slot => (
                            <option key={slot} value={slot} className="bg-[#16181C]">
                              {slot}
                            </option>
                          ))}
                        </select>
                        <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-[#A3A099] pointer-events-none">
                          ▼
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={!isValid}
                      className={`w-full font-sans font-medium text-center text-sm py-3 px-6 rounded-[8px] transition-all duration-300 transform ${
                        isValid
                          ? 'bg-[#C9A15E] text-[#16181C] hover:bg-[#B88F4C] hover:-translate-y-0.5 shadow-lg shadow-[#C9A15E]/10 cursor-pointer'
                          : 'bg-[#22242B] text-[#A3A099]/40 border border-[#C9A15E]/10 cursor-not-allowed'
                      }`}
                      id="btn-confirm-booking"
                    >
                      Confirmar Reserva
                    </button>
                  </div>
                </form>
              ) : (
                /* Success Confirmation View */
                <div className="text-center space-y-6 py-4" id="confirmation-view">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#C9A15E]/10 border border-[#C9A15E]/30 text-[#C9A15E] animate-pulse">
                    <Check size={32} />
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-serif text-xl text-[#F2F0EA]">Mesa Reservada com Sucesso!</h4>
                    <p className="text-sm text-[#A3A099] max-w-sm mx-auto">
                      Agradecemos a sua preferência. Enviámos uma confirmação por SMS para o seu telemóvel.
                    </p>
                  </div>

                  {/* Summary Card */}
                  <div className="rounded-[12px] bg-[#22242B] border border-[#C9A15E]/10 p-5 text-left space-y-3.5 max-w-sm mx-auto">
                    <h5 className="font-serif text-[#C9A15E] border-b border-[#C9A15E]/10 pb-2 text-sm uppercase tracking-wider font-semibold">
                      Resumo do Pedido
                    </h5>
                    
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-[#A3A099]">Cliente:</span>
                        <span className="font-medium text-[#F2F0EA]">{name}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#A3A099]">Telemóvel:</span>
                        <span className="font-medium text-[#F2F0EA]">{phone}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#A3A099]">Lugares:</span>
                        <span className="font-medium text-[#F2F0EA]">{guests} {guests === 1 ? 'Pessoa' : 'Pessoas'}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#A3A099]">Data:</span>
                        <span className="font-medium text-[#F2F0EA]">
                          {new Date(date + 'T00:00:00').toLocaleDateString('pt-PT', {
                            weekday: 'long',
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#A3A099]">Horário:</span>
                        <span className="font-medium text-[#F2F0EA]">{time}</span>
                      </div>
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="pt-2">
                    <button
                      onClick={handleClose}
                      className="w-full max-w-sm mx-auto flex items-center justify-center gap-2 font-sans font-medium text-sm py-2.5 px-6 rounded-[8px] bg-[#C9A15E]/10 text-[#C9A15E] border border-[#C9A15E]/20 hover:bg-[#C9A15E] hover:text-[#16181C] transition-all duration-300 cursor-pointer"
                      id="btn-close-confirmation"
                    >
                      <Sparkles size={16} /> Voltar à Página Principal
                    </button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
