
import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_MESSAGE, CONTACT_PHONE } from '../constants';

// Bypassing framer-motion TS inference issues in this environment
const MotionP = motion.p as any;
const MotionH1 = motion.h1 as any;
const MotionDiv = motion.div as any;

const Hero: React.FC = () => {
  // Ensure the phone number is clean for the WhatsApp URL
  const cleanPhone = CONTACT_PHONE.replace(/\D/g, '');
  const waNumber = cleanPhone.startsWith('91') ? cleanPhone : `91${cleanPhone}`;

  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?q=80&w=2070&auto=format&fit=crop')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1026]/90 via-[#0B1026]/60 to-[#0B1026]"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <MotionP
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-[#CD7F32] uppercase tracking-[0.5em] text-sm mb-4 font-light"
        >
          An Elevation of Taste
        </MotionP>
        
        <MotionH1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-[#F3E5AB] font-serif mb-8 leading-tight"
        >
          Experience Dining <br /> <span className="italic">Above the Clouds</span>
        </MotionH1>

        <MotionP
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-[#E5E7EB] text-lg md:text-xl font-light mb-12 max-w-2xl mx-auto"
        >
          The finest rooftop culinary experience in the city. Where every dish tells a story of exclusivity and heritage.
        </MotionP>

        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a
            href="#menu"
            className="btn-luxury w-full sm:w-auto bg-[#CD7F32] hover:bg-[#F3E5AB] text-[#0B1026] px-12 py-4 rounded-full text-sm font-bold uppercase tracking-widest transition-all shadow-xl shadow-[#CD7F32]/10"
          >
            View Menu
          </a>
          <a
            href={`https://wa.me/${waNumber}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-luxury w-full sm:w-auto bg-transparent border border-[#F3E5AB]/30 text-[#F3E5AB] px-12 py-4 rounded-full text-sm font-bold uppercase tracking-widest hover:border-[#F3E5AB] transition-all flex items-center justify-center gap-2"
          >
            <MessageCircle size={18} />
            Order via WhatsApp
          </a>
        </MotionDiv>
      </div>

      {/* Scroll indicator */}
      <MotionDiv
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[#F3E5AB]/30 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest font-light">Scroll Down</span>
        <div className="w-px h-12 bg-gradient-to-b from-[#F3E5AB]/30 to-transparent"></div>
      </MotionDiv>
    </section>
  );
};

export default Hero;
