
import React from 'react';
import { motion } from 'framer-motion';
import { Users, Heart, Briefcase } from 'lucide-react';

// Bypassing framer-motion TS inference issues in this environment
const MotionDiv = motion.div as any;

const Events: React.FC = () => {
  const eventTypes = [
    {
      title: "Romantic Dates",
      icon: <Heart size={24} />,
      desc: "An intimate setting under the stars for your most special moments."
    },
    {
      title: "Private Parties",
      icon: <Users size={24} />,
      desc: "Birthdays or anniversaries, we turn celebrations into lifelong memories."
    },
    {
      title: "Corporate Events",
      icon: <Briefcase size={24} />,
      desc: "Sophisticated environment for networking and formal gatherings."
    }
  ];

  return (
    <section id="events" className="py-24 bg-[#0B1026] px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-[#F3E5AB] font-serif mb-4">Signature Occasions</h2>
          <p className="text-[#E5E7EB]/40 uppercase tracking-[0.3em] text-[10px]">Your Venue for Every Milestone</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {eventTypes.map((event, idx) => (
            <MotionDiv
              key={event.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group p-10 bg-gradient-to-b from-white/[0.05] to-transparent border border-white/5 rounded-[2rem] hover:border-[#CD7F32]/40 transition-all"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#CD7F32]/10 flex items-center justify-center text-[#CD7F32] mb-6 group-hover:bg-[#CD7F32] group-hover:text-[#0B1026] transition-all">
                {event.icon}
              </div>
              <h3 className="text-2xl text-[#F3E5AB] font-serif mb-4">{event.title}</h3>
              <p className="text-[#E5E7EB]/50 font-light leading-relaxed">
                {event.desc}
              </p>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
