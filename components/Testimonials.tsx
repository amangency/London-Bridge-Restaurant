
import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

// Bypassing framer-motion TS inference issues in this environment
const MotionDiv = motion.div as any;

const RatingBar: React.FC<{ stars: number; percentage: number }> = ({ stars, percentage }) => (
  <div className="flex items-center gap-4 w-full">
    <div className="flex items-center gap-1 w-12 shrink-0">
      <span className="text-[10px] text-[#E5E7EB]/60 font-medium">{stars}</span>
      <Star size={10} fill="#CD7F32" className="text-[#CD7F32]" />
    </div>
    <div className="flex-grow h-1.5 bg-white/5 rounded-full overflow-hidden">
      <MotionDiv
        initial={{ width: 0 }}
        whileInView={{ width: `${percentage}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
        className="h-full bg-gradient-to-r from-[#CD7F32] to-[#F3E5AB]"
      />
    </div>
    <span className="text-[10px] text-[#E5E7EB]/40 w-8 shrink-0 text-right">{percentage}%</span>
  </div>
);

const Testimonials: React.FC = () => {
  // Star distribution data for visual flair
  const distribution = [
    { stars: 5, percentage: 88 },
    { stars: 4, percentage: 9 },
    { stars: 3, percentage: 2 },
    { stars: 2, percentage: 1 },
    { stars: 1, percentage: 0 },
  ];

  return (
    <section id="testimonials" className="py-24 bg-[#0B1026] relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#CD7F32]/5 blur-[120px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20 items-start">
          
          {/* Header & Context */}
          <div className="lg:col-span-5 text-left">
            <MotionDiv
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-[#CD7F32] uppercase tracking-[0.4em] text-xs mb-4 block font-bold">Client Voices</span>
              <h2 className="text-4xl md:text-5xl text-[#F3E5AB] font-serif mb-6 leading-tight">
                Reflections of <br /> <span className="italic">Excellence</span>
              </h2>
              <div className="w-20 h-px bg-gradient-to-r from-[#CD7F32] to-transparent mb-8"></div>
              <p className="text-[#E5E7EB]/60 text-lg font-light leading-relaxed mb-8">
                With a legacy of over 15,000 delighted guests, our commitment to culinary perfection is reflected in every review we receive. Experience the standard that has made us the city's highest-rated rooftop.
              </p>
              
              <div className="flex items-center gap-3 py-4 px-6 bg-white/[0.03] border border-white/5 rounded-2xl w-fit">
                <CheckCircle2 className="text-[#CD7F32]" size={20} />
                <span className="text-[#F3E5AB] text-sm font-medium tracking-wide">Verified Dining Establishment</span>
              </div>
            </MotionDiv>
          </div>
          
          {/* Prominent Rating Dashboard */}
          <MotionDiv
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-[#1F2937]/20 backdrop-blur-xl border border-[#CD7F32]/20 p-8 md:p-12 rounded-[2.5rem] relative overflow-hidden group shadow-2xl"
          >
            {/* Background shimmer */}
            <div className="absolute -inset-1 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
            
            <div className="flex flex-col md:flex-row gap-12 items-center relative z-10">
              {/* Massive Score */}
              <div className="text-center md:border-r border-white/5 md:pr-12">
                <div className="text-[#F3E5AB] text-7xl md:text-8xl font-serif mb-2 drop-shadow-lg">4.8</div>
                <div className="flex justify-center gap-1.5 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} fill={i < 4 ? "#CD7F32" : "url(#partial)"} className="text-[#CD7F32]" />
                  ))}
                  {/* Definition for partial star fill if needed, simplified for this build */}
                </div>
                <div className="text-[#E5E7EB]/40 text-[10px] uppercase tracking-[0.3em] whitespace-nowrap">
                  1,778 Genuine Reviews
                </div>
              </div>

              {/* Star Distribution Breakdown */}
              <div className="w-full space-y-3">
                <p className="text-[#F3E5AB] text-xs uppercase tracking-widest font-bold mb-4">Rating Distribution</p>
                {distribution.map((item) => (
                  <RatingBar key={item.stars} stars={item.stars} percentage={item.percentage} />
                ))}
              </div>
            </div>
          </MotionDiv>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <MotionDiv
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white/[0.03] border border-white/5 p-10 rounded-[2rem] relative group hover:border-[#CD7F32]/30 hover:bg-white/[0.05] transition-all duration-500 flex flex-col"
            >
              <Quote className="absolute top-8 right-10 text-[#CD7F32]/5 group-hover:text-[#CD7F32]/10 transition-colors" size={56} />
              
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={14} fill="#CD7F32" className="text-[#CD7F32] group-hover:scale-110 transition-transform duration-500" style={{ transitionDelay: `${i * 50}ms` }} />
                ))}
              </div>

              <p className="text-[#E5E7EB]/80 font-light italic mb-10 leading-relaxed text-base flex-grow">
                "{t.content}"
              </p>

              <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#CD7F32] to-[#F3E5AB] p-[1px] group-hover:p-[2px] transition-all duration-500 shadow-lg">
                  <div className="w-full h-full rounded-full bg-[#0B1026] flex items-center justify-center text-[#F3E5AB] font-serif text-xl font-bold">
                    {t.name.charAt(0)}
                  </div>
                </div>
                <div>
                  <h4 className="text-[#F3E5AB] font-serif text-lg tracking-wide group-hover:text-white transition-colors">{t.name}</h4>
                  <p className="text-[#CD7F32] text-[10px] uppercase tracking-widest font-bold mt-0.5">{t.role}</p>
                </div>
              </div>
            </MotionDiv>
          ))}
        </div>

        <MotionDiv
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <a 
            href="https://www.google.com/maps" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#E5E7EB]/40 hover:text-[#F3E5AB] transition-colors text-xs uppercase tracking-[0.4em] flex items-center justify-center gap-3"
          >
            <div className="w-12 h-px bg-white/10"></div>
            View all reviews on Google
            <div className="w-12 h-px bg-white/10"></div>
          </a>
        </MotionDiv>
      </div>
    </section>
  );
};

export default Testimonials;
