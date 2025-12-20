
import React from 'react';
import { Instagram, Facebook, Mail, MapPin, Phone } from 'lucide-react';
import { CONTACT_PHONE } from '../constants';

const Footer: React.FC = () => {
  // Format phone for display: +91 91221 17250
  const displayPhone = CONTACT_PHONE.length === 10 
    ? `+91 ${CONTACT_PHONE.slice(0, 5)} ${CONTACT_PHONE.slice(5)}`
    : CONTACT_PHONE;

  return (
    <footer id="contact" className="bg-[#0B1026] border-t border-white/5 pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          {/* Contact Details */}
          <div>
            <div className="flex flex-col mb-10">
              <span className="heading-cinzel text-3xl tracking-[0.2em] text-[#F3E5AB]">LONDON BRIDGE</span>
              <span className="text-xs tracking-[0.5em] uppercase text-[#CD7F32] font-light -mt-1">Rooftop Restaurant</span>
            </div>
            
            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-white/5 border border-white/10 text-[#CD7F32]">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-[#F3E5AB] font-serif text-xl mb-1">Our Location</h4>
                  <p className="text-[#E5E7EB]/60 font-light max-w-xs">
                    London Bridge Rooftop Restaurant, Muzaffarpur, Bihar, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-white/5 border border-white/10 text-[#CD7F32]">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-[#F3E5AB] font-serif text-xl mb-1">General Inquiries</h4>
                  <p className="text-[#E5E7EB]/60 font-light">{displayPhone}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-white/5 border border-white/10 text-[#CD7F32]">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-[#F3E5AB] font-serif text-xl mb-1">Email Us</h4>
                  <p className="text-[#E5E7EB]/60 font-light">info@londonbridgerooftop.com</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <a href="#" className="p-4 rounded-full bg-white/5 border border-white/10 text-[#E5E7EB] hover:text-[#F3E5AB] hover:border-[#F3E5AB] transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-4 rounded-full bg-white/5 border border-white/10 text-[#E5E7EB] hover:text-[#F3E5AB] hover:border-[#F3E5AB] transition-all">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Map Section */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-[#CD7F32]/20 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-[#0B1026] border border-[#CD7F32]/30 rounded-2xl overflow-hidden shadow-2xl">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3582.6241865469474!2d85.3939879754121!3d26.111183777134002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed11e33aae49c3%3A0x3b08fdf92caea3ae!2sLondon%20Bridge%20Rooftop%20Restaurant!5e0!3m2!1sen!2sin!4v1766150561420!5m2!1sen!2sin" 
                width="100%" 
                height="450" 
                className="dark-map"
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[#E5E7EB]/30 text-xs tracking-widest uppercase">
            &copy; 2024 London Bridge Rooftop. Designed for Luxury.
          </p>
          <div className="flex gap-8 text-[10px] uppercase tracking-[0.2em] text-[#E5E7EB]/40">
            <a href="#" className="hover:text-[#CD7F32]">Privacy Policy</a>
            <a href="#" className="hover:text-[#CD7F32]">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
