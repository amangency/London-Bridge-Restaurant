
import React from 'react';
import { motion } from 'framer-motion';
import { Star, Utensils } from 'lucide-react';

const MotionDiv = motion.div as any;

const ChefsRecommendations: React.FC = () => {
  const recommendations = [
    {
      name: "London Bridge Special Platter",
      description: "A grand assortment of our finest appetizers including Paneer Tikka, Crispy Corn, and Mushroom Chilli, served with mint chutney.",
      price: "₹850",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2069&auto=format&fit=crop",
      tag: "Signature"
    },
    {
      name: "Signature Butter Chicken",
      description: "Slow-cooked for 12 hours in a rich, creamy tomato gravy with a secret blend of hand-ground spices and a touch of honey.",
      price: "₹420",
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?q=80&w=2070&auto=format&fit=crop",
      tag: "Best Seller"
    },
    {
      name: "Royal Paneer Lababdar",
      description: "Fresh cottage cheese cubes simmered in a tangy, spicy, and creamy onion-tomato gravy with grated paneer and cashews.",
      price: "₹380",
      image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=1974&auto=format&fit=crop",
      tag: "Chef's Choice"
    }
  ];

  return (
    <section id="recommendations" className="py-24 bg-[#0B1026] relative overflow-hidden border-t border-white/5">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#CD7F32]/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[#CD7F32] uppercase tracking-[0.4em] text-xs mb-4 block">Gastronomic Excellence</span>
            <h2 className="text-4xl md:text-5xl text-[#F3E5AB] font-serif mb-4 italic">Chef's Recommendations</h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#CD7F32] to-transparent mx-auto"></div>
          </MotionDiv>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {recommendations.map((dish, idx) => (
            <MotionDiv
              key={dish.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.8 }}
              className="group flex flex-col h-full bg-[#1F2937]/20 border border-white/5 rounded-[2.5rem] overflow-hidden hover:border-[#CD7F32]/30 transition-all duration-500"
            >
              <div className="relative h-72 overflow-hidden">
                <img 
                  src={dish.image} 
                  alt={dish.name} 
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1026] via-transparent to-transparent opacity-60"></div>
                <div className="absolute top-6 right-6">
                  <span className="bg-[#F3E5AB] text-[#0B1026] text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-xl">
                    {dish.tag}
                  </span>
                </div>
              </div>

              <div className="p-10 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl text-[#F3E5AB] font-serif leading-snug group-hover:text-white transition-colors">
                    {dish.name}
                  </h3>
                  <span className="text-xl text-[#CD7F32] font-serif ml-4">{dish.price}</span>
                </div>

                <p className="text-[#E5E7EB]/60 font-light text-sm leading-relaxed mb-8 italic">
                  "{dish.description}"
                </p>

                <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={12} fill="#CD7F32" className="text-[#CD7F32] opacity-40 group-hover:opacity-100 transition-opacity" />
                    ))}
                  </div>
                  <button className="flex items-center gap-2 text-[#CD7F32] text-xs uppercase tracking-[0.2em] font-bold group-hover:text-[#F3E5AB] transition-colors">
                    Order Now <Utensils size={14} />
                  </button>
                </div>
              </div>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChefsRecommendations;
