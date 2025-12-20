
import React from 'react';
import { motion } from 'framer-motion';

// Bypassing framer-motion TS inference issues in this environment
const MotionDiv = motion.div as any;

const ChefStory: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#0B1026] px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        <MotionDiv 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:w-1/2 relative"
        >
          <div className="absolute -inset-4 border border-[#CD7F32]/20 rounded-3xl"></div>
          <img 
            src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=1954&auto=format&fit=crop" 
            alt="Executive Chef" 
            className="rounded-2xl relative z-10 w-full h-[500px] object-cover grayscale hover:grayscale-0 transition-all duration-1000"
          />
          <div className="absolute bottom-8 right-8 z-20 bg-[#F3E5AB] text-[#0B1026] p-6 rounded-xl shadow-2xl">
            <p className="font-serif text-2xl italic">"Passion is the secret ingredient."</p>
          </div>
        </MotionDiv>

        <MotionDiv 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:w-1/2"
        >
          <span className="text-[#CD7F32] uppercase tracking-[0.4em] text-xs mb-4 block">The Culinary Visionary</span>
          <h2 className="text-4xl md:text-5xl text-[#F3E5AB] font-serif mb-8">Our Story of Taste</h2>
          <div className="space-y-6 text-[#E5E7EB]/70 font-light leading-relaxed text-lg">
            <p>
              Founded on the belief that dining should be a ritual of pleasure, London Bridge Rooftop Restaurant brings together the finest local ingredients and global culinary techniques.
            </p>
            <p>
              Our journey began with a simple vision: to create a space where the sky meets the plate. Every recipe in our kitchen is a blend of traditional heritage and modern innovation, carefully curated to provide an explosion of flavors in every bite.
            </p>
            <p>
              From our signature Dal Makhani to our artisanal Pizzas, excellence is not an option—it is our standard.
            </p>
          </div>
          <div className="mt-12 flex items-center gap-6">
             <div className="text-center">
                <p className="text-3xl text-[#F3E5AB] font-serif">12+</p>
                <p className="text-[10px] uppercase tracking-widest text-[#CD7F32]">Awards Won</p>
             </div>
             <div className="w-px h-10 bg-white/10"></div>
             <div className="text-center">
                <p className="text-3xl text-[#F3E5AB] font-serif">15k+</p>
                <p className="text-[10px] uppercase tracking-widest text-[#CD7F32]">Happy Guests</p>
             </div>
          </div>
        </MotionDiv>
      </div>
    </section>
  );
};

export default ChefStory;
