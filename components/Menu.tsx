
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MENU_DATA } from '../constants';
import { Utensils, ChevronDown, Sparkles, Star } from 'lucide-react';

// Bypassing framer-motion TS inference issues in this environment
const MotionDiv = motion.div as any;

const MenuAccordionItem: React.FC<{ 
  category: typeof MENU_DATA[0]; 
  isOpen: boolean; 
  toggle: () => void;
  index: number;
}> = ({ category, isOpen, toggle, index }) => {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="mb-4 overflow-hidden border border-white/5 rounded-2xl bg-white/[0.02] backdrop-blur-md"
    >
      <button
        onClick={toggle}
        className="w-full flex items-center justify-between p-6 md:p-8 text-left transition-all hover:bg-white/[0.04]"
      >
        <h3 className="heading-cinzel text-lg md:text-xl text-[#F3E5AB] tracking-widest flex items-center gap-4">
          <span className="text-[#CD7F32] text-sm opacity-50 font-sans font-bold">0{index + 1}</span>
          {category.title}
        </h3>
        <MotionDiv
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="text-[#CD7F32]"
        >
          <ChevronDown size={24} />
        </MotionDiv>
      </button>

      <AnimatePresence>
        {isOpen && (
          <MotionDiv
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <div className="px-6 md:px-12 pb-10 pt-2 space-y-6">
              {category.items.map((item) => (
                <div key={item.name} className="group cursor-pointer">
                  <div className="flex items-end justify-between mb-1">
                    <span className="text-[#E5E7EB] font-serif text-lg tracking-wide group-hover:text-[#F3E5AB] transition-all duration-500 flex items-center gap-0 group-hover:gap-3 group-hover:translate-x-2">
                      {/* Decorative icon that reveals and glows on hover */}
                      <span className="w-0 opacity-0 group-hover:w-5 group-hover:opacity-100 transition-all duration-500 flex items-center overflow-hidden">
                        <Sparkles 
                          size={16} 
                          className="text-[#CD7F32] flex-shrink-0 animate-pulse transition-transform duration-700 group-hover:rotate-12" 
                        />
                      </span>
                      
                      {item.name}
                      
                      {item.isNonVeg && (
                        <span 
                          className="w-2 h-2 rounded-full bg-red-500 inline-block shadow-lg shadow-red-500/50 ml-2" 
                          title="Non-Veg"
                        ></span>
                      )}
                    </span>
                    
                    <div className="dot-leader opacity-20 group-hover:opacity-60 group-hover:border-[#F3E5AB]/40 transition-all duration-700"></div>
                    
                    <span className="text-[#CD7F32] font-serif text-lg group-hover:text-[#F3E5AB] transition-all duration-500 group-hover:scale-110">
                      ₹{item.price}
                    </span>
                  </div>
                  
                  {item.description && (
                    <p className="text-[#E5E7EB]/40 text-sm font-light italic pl-0 group-hover:pl-10 group-hover:text-[#E5E7EB]/60 transition-all duration-500">
                      {item.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </MotionDiv>
        )}
      </AnimatePresence>
    </MotionDiv>
  );
};

const Menu: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="menu" className="py-24 px-6 bg-[#0B1026] relative">
      {/* Decorative side element */}
      <div className="absolute right-0 top-1/4 w-32 h-96 bg-gradient-to-l from-[#CD7F32]/5 to-transparent blur-3xl pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <MotionDiv 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex justify-center mb-6"
          >
             <div className="relative">
                <div className="absolute inset-0 blur-xl bg-[#CD7F32]/20 rounded-full animate-pulse"></div>
                <Utensils className="text-[#CD7F32] relative z-10" size={40} />
             </div>
          </MotionDiv>
          <h2 className="text-4xl md:text-5xl text-[#F3E5AB] font-serif mb-4 tracking-tight">Our Curated Menu</h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#CD7F32] to-transparent mx-auto mb-6"></div>
          <p className="text-[#E5E7EB]/60 max-w-xl mx-auto font-light italic text-lg">
            A symphony of flavors, where each dish is a masterpiece designed to elevate your senses.
          </p>
        </div>

        <div className="space-y-4">
          {MENU_DATA.map((category, idx) => (
            <MenuAccordionItem
              key={category.title}
              category={category}
              index={idx}
              isOpen={openIndex === idx}
              toggle={() => handleToggle(idx)}
            />
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-4 px-8 py-3 rounded-full bg-white/[0.03] border border-white/5">
            <Star size={14} className="text-[#CD7F32]" />
            <p className="text-[#E5E7EB]/40 text-[10px] uppercase tracking-[0.3em]">
              Prices are in INR • Government taxes applicable
            </p>
            <Star size={14} className="text-[#CD7F32]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
