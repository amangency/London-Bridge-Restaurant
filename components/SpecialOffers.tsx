
import React from 'react';
import { motion } from 'framer-motion';
import { Percent, Gift, Calendar, Sparkles } from 'lucide-react';

const MotionDiv = motion.div as any;

const SpecialOffers: React.FC = () => {
  const offers = [
    {
      title: "Midnight Magic Set Menu",
      description: "A specially curated 5-course experience featuring Chef Vikram's signature dishes.",
      price: "₹1,200",
      validity: "Daily after 9:00 PM",
      icon: <Sparkles className="text-[#CD7F32]" size={24} />,
      badge: "Best Seller"
    },
    {
      title: "Rooftop Romance",
      description: "Includes a private corner table with candlelight setup, 3-course meal, and complimentary Blue Lagoons.",
      price: "₹2,499 / Couple",
      validity: "Booking Required",
      icon: <Gift className="text-[#CD7F32]" size={24} />,
      badge: "Signature"
    },
    {
      title: "Golden Hour Special",
      description: "Enjoy a 20% discount on all starters and mocktails as you watch the city transition to night.",
      price: "20% OFF",
      validity: "5:00 PM - 7:00 PM",
      icon: <Percent className="text-[#CD7F32]" size={24} />,
      badge: "Limited Time"
    }
  ];

  return (
    <section id="offers" className="py-24 bg-[#0B1026] relative overflow-hidden border-t border-white/5">
      {/* Decorative Light Glows */}
      <div className="absolute top-1/4 -right-20 w-80 h-80 bg-[#CD7F32]/5 blur-[100px] rounded-full"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[#CD7F32] uppercase tracking-[0.4em] text-xs mb-4 block">Exclusive Promotions</span>
            <h2 className="text-4xl md:text-5xl text-[#F3E5AB] font-serif mb-4">Special Offers</h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#CD7F32] to-transparent mx-auto"></div>
          </MotionDiv>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offers.map((offer, idx) => (
            <MotionDiv
              key={offer.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              className="group relative bg-[#1F2937]/30 backdrop-blur-md border border-white/5 rounded-[2.5rem] p-8 hover:border-[#CD7F32]/40 transition-all duration-500 overflow-hidden"
            >
              {/* Badge */}
              <div className="absolute top-6 right-6 bg-[#CD7F32] text-[#0B1026] text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                {offer.badge}
              </div>

              <div className="mb-8 p-4 w-fit rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-500">
                {offer.icon}
              </div>

              <h3 className="text-2xl text-[#F3E5AB] font-serif mb-4 group-hover:text-white transition-colors">
                {offer.title}
              </h3>
              
              <p className="text-[#E5E7EB]/60 font-light text-sm mb-6 leading-relaxed">
                {offer.description}
              </p>

              <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/5">
                <div>
                  <div className="flex items-center gap-2 text-[#E5E7EB]/40 text-[10px] uppercase tracking-widest mb-1">
                    <Calendar size={12} />
                    {offer.validity}
                  </div>
                  <div className="text-xl text-[#F3E5AB] font-serif">{offer.price}</div>
                </div>
                
                <button className="w-10 h-10 rounded-full border border-[#CD7F32]/30 flex items-center justify-center text-[#CD7F32] group-hover:bg-[#CD7F32] group-hover:text-[#0B1026] transition-all">
                  <span className="text-xl">→</span>
                </button>
              </div>

              {/* Hover Effect Light Beam Overlay (Reflected in CSS .btn-luxury logic but custom applied here) */}
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-tr from-transparent via-[#CD7F32]/5 to-transparent"></div>
            </MotionDiv>
          ))}
        </div>

        <MotionDiv
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-[#E5E7EB]/30 text-xs italic">
            * Terms & conditions apply. Offers cannot be combined with other discounts.
          </p>
        </MotionDiv>
      </div>
    </section>
  );
};

export default SpecialOffers;
