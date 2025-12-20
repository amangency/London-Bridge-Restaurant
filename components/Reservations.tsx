
import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Star } from 'lucide-react';
import { CONTACT_PHONE } from '../constants';

// Bypassing framer-motion TS inference issues in this environment
const MotionDiv = motion.div as any;

const Reservations: React.FC = () => {
  return (
    <section id="reservations" className="py-24 relative overflow-hidden">
      {/* Decorative stars / lights */}
      <div className="absolute top-10 left-10 text-[#F3E5AB]/20 animate-pulse"><Star size={16} /></div>
      <div className="absolute top-40 right-20 text-[#F3E5AB]/10 animate-pulse" style={{ animationDelay: '1s' }}><Star size={12} /></div>
      <div className="absolute bottom-20 left-1/4 text-[#F3E5AB]/20 animate-pulse" style={{ animationDelay: '1.5s' }}><Star size={14} /></div>

      <div className="max-w-5xl mx-auto px-6 text-center">
        <MotionDiv
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[#1F2937]/50 to-[#0B1026]/80 border border-[#CD7F32]/20 p-12 md:p-20 rounded-[3rem] shadow-2xl relative z-10"
        >
          <h2 className="text-4xl md:text-6xl text-[#F3E5AB] font-serif mb-6">Reserve Your Spot</h2>
          <p className="text-[#E5E7EB] text-lg md:text-xl font-light mb-12 max-w-2xl mx-auto">
            Experience an unforgettable evening under the stars. Perfect for birthdays, anniversaries, and romantic evenings.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-8">
            <a
              href={`tel:${CONTACT_PHONE}`}
              className="btn-luxury bg-[#CD7F32] text-[#0B1026] px-12 py-5 rounded-full text-sm font-bold uppercase tracking-widest flex items-center justify-center gap-3 shadow-lg shadow-[#CD7F32]/20"
            >
              <Phone size={20} />
              Call to Reserve
            </a>
            <div className="flex items-center justify-center p-4 border-l border-white/5 pl-8 hidden sm:flex">
                <div className="text-left">
                    <p className="text-[#F3E5AB] font-serif text-xl">Mon - Sun</p>
                    <p className="text-[#E5E7EB]/60 text-sm tracking-widest">7:00 PM - 11:30 PM</p>
                </div>
            </div>
          </div>
        </MotionDiv>
      </div>
    </section>
  );
};

export default Reservations;
