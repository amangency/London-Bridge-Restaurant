import React from 'react';
import { motion } from 'framer-motion';
import { Award, UtensilsCrossed, Waves, Sparkles, GraduationCap, Medal, Heart } from 'lucide-react';

const MotionDiv = motion.div as any;

const AboutUs: React.FC = () => {
  const accolades = [
    { icon: <Award className="text-[#CD7F32]" />, title: "Best Rooftop Lounge", year: "2023" },
    { icon: <UtensilsCrossed className="text-[#CD7F32]" />, title: "Culinary Excellence", year: "2022" },
    { icon: <Waves className="text-[#CD7F32]" />, title: "Ambiance of the Year", year: "2023" },
  ];

  return (
    <section id="about" className="py-24 bg-[#0B1026] relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#CD7F32]/30 to-transparent"></div>
      <div className="absolute top-1/2 -left-24 w-64 h-64 bg-[#CD7F32]/5 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Story & Philosophy Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <MotionDiv
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#CD7F32] uppercase tracking-[0.4em] text-xs mb-4 block">Our Heritage</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#F3E5AB] font-serif mb-8 leading-tight">
              A Legacy Crafted <br /> <span className="italic">In the Skies</span>
            </h2>
            <div className="space-y-6 text-[#E5E7EB]/70 font-light leading-relaxed text-lg">
              <p>
                London Bridge Rooftop Restaurant was born from a singular dream: to offer Muzaffarpur a dining destination that touches the stars. What started as a vision of architectural elegance has evolved into the city's premier culinary landmark.
              </p>
              <p>
                Our philosophy is simple—<strong>"The Gold Standard."</strong> We believe every ingredient has a soul, and every dish should be a symphony. By blending local seasonal produce with global gastronomic techniques, we create an experience that transcends the plate.
              </p>
            </div>
            
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
              {accolades.map((item, i) => (
                <div key={i} className="flex flex-col items-center sm:items-start text-center sm:text-left">
                  <div className="mb-3">{item.icon}</div>
                  <h4 className="text-[#F3E5AB] font-serif text-sm uppercase tracking-wider">{item.title}</h4>
                  <p className="text-[#CD7F32]/60 text-xs tracking-widest">{item.year}</p>
                </div>
              ))}
            </div>
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-4 border border-[#CD7F32]/20 rounded-[2rem] transform rotate-3"></div>
            <img 
              src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop" 
              alt="Restaurant Ambiance" 
              loading="lazy"
              className="rounded-[2rem] shadow-2xl relative z-10 grayscale hover:grayscale-0 transition-all duration-700 h-[600px] w-full object-cover"
            />
            <div className="absolute -bottom-10 -left-10 z-20 bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-2xl hidden md:block max-w-xs">
              <span className="text-[#F3E5AB] mb-4 block"><Sparkles size={24} /></span>
              <p className="text-[#E5E7EB] italic font-light">"The atmosphere here isn't just felt; it's inhaled. A true sanctuary above the hustle."</p>
            </div>
          </MotionDiv>
        </div>

        {/* Executive Chef Section */}
        <div id="chef" className="bg-white/[0.02] border border-white/5 rounded-[3rem] p-8 md:p-16 flex flex-col lg:flex-row gap-16 items-start scroll-mt-24">
          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:w-2/5 sticky top-24"
          >
            <div className="relative inline-block w-full">
              <img 
                src="https://images.unsplash.com/photo-1581299894007-aaa50297cf16?q=80&w=1974&auto=format&fit=crop" 
                alt="Executive Chef Vikram Rathore" 
                loading="lazy"
                className="w-full h-[550px] object-cover rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-[#CD7F32]/30"></div>
              <div className="absolute -bottom-6 -right-6 bg-[#CD7F32] p-6 rounded-2xl shadow-xl hidden lg:block">
                 <p className="text-[#0B1026] font-serif text-lg leading-tight">Winner of the <br/><strong>Rising Star of Asian Cuisine</strong></p>
              </div>
            </div>
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:w-3/5"
          >
            <span className="text-[#CD7F32] uppercase tracking-[0.4em] text-xs mb-4 block">The Mastermind</span>
            <h3 className="text-4xl md:text-5xl text-[#F3E5AB] font-serif mb-8">Chef Vikram Rathore</h3>
            
            <div className="space-y-8 text-[#E5E7EB]/70 font-light leading-relaxed text-lg mb-12">
              <p>
                The culinary journey of Chef Vikram Rathore began in the aromatic spice markets of Rajasthan, where as a child, he assisted his grandmother in crushing hand-ground spices—a memory that remains his primary inspiration for every blend he creates today.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8 border-y border-white/5">
                <div className="flex gap-4">
                  <GraduationCap className="text-[#CD7F32] flex-shrink-0" size={28} />
                  <div>
                    <h4 className="text-[#F3E5AB] font-serif text-lg mb-1">Early Career</h4>
                    <p className="text-sm">Trained at the iconic <strong>Taj Mahal Palace</strong>, Mumbai, before perfecting French techniques at <strong>Le Cordon Bleu, Paris</strong>.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Heart className="text-[#CD7F32] flex-shrink-0" size={28} />
                  <div>
                    <h4 className="text-[#F3E5AB] font-serif text-lg mb-1">Inspirations</h4>
                    <p className="text-sm">A fusion of ancestral Rajasthani fire and the geometric precision of classic European patisserie.</p>
                  </div>
                </div>
              </div>

              <p>
                After a decade leading Michelin-starred kitchens in London and Singapore, Vikram returned to his roots with a mission: to elevate regional Indian cuisine to a global luxury standard. His philosophy, <strong>"The Soul of the Spice,"</strong> ensures that while techniques may be modern, the heart of the dish remains unapologetically authentic.
              </p>

              <div className="bg-[#CD7F32]/5 p-8 rounded-2xl border border-[#CD7F32]/20">
                <div className="flex items-center gap-3 mb-4">
                  <Medal className="text-[#CD7F32]" size={24} />
                  <h4 className="text-[#F3E5AB] font-serif text-xl">Awards & Recognition</h4>
                </div>
                <ul className="space-y-3 text-sm italic">
                  <li className="flex gap-2 items-start"><Sparkles size={14} className="mt-1 text-[#CD7F32]" /> Best Innovation in Fusion Cuisine (2021)</li>
                  <li className="flex gap-2 items-start"><Sparkles size={14} className="mt-1 text-[#CD7F32]" /> Gourmand World Cookbook Award for Ancient Grain Research</li>
                  <li className="flex gap-2 items-start"><Sparkles size={14} className="mt-1 text-[#CD7F32]" /> Featured in 'Modern Masters' Culinary Series</li>
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div>
                <p className="text-[#F3E5AB] font-serif text-3xl">15+</p>
                <p className="text-[10px] uppercase tracking-widest text-[#CD7F32] font-bold">Years of Mastery</p>
              </div>
              <div>
                <p className="text-[#F3E5AB] font-serif text-3xl">100+</p>
                <p className="text-[10px] uppercase tracking-widest text-[#CD7F32] font-bold">Signature Masterpieces</p>
              </div>
            </div>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;