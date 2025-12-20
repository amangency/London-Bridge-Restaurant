import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { CONTACT_PHONE } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'The Chef', id: 'chef' },
    { name: 'Menu', id: 'menu' },
    { name: 'Offers', id: 'offers' },
    { name: 'Chef\'s Choice', id: 'recommendations' },
    { name: 'Events', id: 'events' },
    { name: 'Reviews', id: 'testimonials' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      scrolled ? 'bg-[#0B1026]/95 backdrop-blur-md py-3' : 'bg-transparent py-6'
    } border-b border-white/5`}>
      {/* Container is set to max-w-full with generous horizontal padding for a more expansive, high-end feel */}
      <div className="w-full px-6 md:px-12 flex justify-between items-center">
        
        {/* Logo Section - Pinned to the far left */}
        <a href="#home" onClick={(e) => scrollToSection(e, 'home')} className="flex flex-col group flex-shrink-0">
          <span className="heading-cinzel text-xl md:text-2xl lg:text-3xl tracking-[0.2em] text-[#F3E5AB] group-hover:text-[#CD7F32] transition-colors whitespace-nowrap">
            LONDON BRIDGE
          </span>
          <span className="text-[8px] md:text-[10px] tracking-[0.4em] uppercase text-[#CD7F32] font-light -mt-1 group-hover:text-[#F3E5AB] transition-colors">
            Rooftop Restaurant
          </span>
        </a>

        {/* Desktop Links Section - Spaced out evenly for a clean, non-crowded look */}
        <div className="hidden lg:flex items-center justify-end flex-1 ml-12">
          <div className="flex items-center space-x-6 xl:space-x-10 2xl:space-x-12 mr-8 xl:mr-12">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => scrollToSection(e, link.id)}
                className="nav-link text-[#E5E7EB] hover:text-[#F3E5AB] transition-colors text-[10px] xl:text-xs uppercase tracking-[0.2em] font-light whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
          </div>
          
          <a
            href={`tel:${CONTACT_PHONE}`}
            className="btn-luxury animate-pulse-gold bg-[#CD7F32] text-[#0B1026] px-8 py-3 rounded-full text-[10px] xl:text-xs font-bold uppercase tracking-widest whitespace-nowrap flex-shrink-0"
          >
            Book a Table
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <button className="lg:hidden text-[#F3E5AB] p-2 hover:bg-white/5 rounded-full transition-colors" onClick={() => setIsOpen(true)}>
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Menu Drawer Overlay */}
      <div className={`fixed inset-0 z-[60] transition-opacity duration-500 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-[#0B1026]/98 backdrop-blur-2xl flex flex-col items-center justify-center space-y-8">
          <button className="absolute top-8 right-8 text-[#F3E5AB] p-2 hover:bg-white/5 rounded-full" onClick={() => setIsOpen(false)}>
            <X size={32} />
          </button>
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="text-2xl text-[#E5E7EB] hover:text-[#F3E5AB] uppercase tracking-[0.2em] font-serif transition-colors"
              onClick={(e) => scrollToSection(e, link.id)}
            >
              {link.name}
            </a>
          ))}
          <a
            href={`tel:${CONTACT_PHONE}`}
            className="btn-luxury bg-[#CD7F32] text-[#0B1026] px-12 py-4 rounded-full text-sm font-bold uppercase tracking-widest"
            onClick={() => setIsOpen(false)}
          >
            Book a Table
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;