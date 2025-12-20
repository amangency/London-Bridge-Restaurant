import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import SpecialOffers from './components/SpecialOffers';
import ChefsRecommendations from './components/ChefsRecommendations';
import Reservations from './components/Reservations';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';
import AboutUs from './components/AboutUs';
import Events from './components/Events';

function App() {
  return (
    <div className="min-h-screen selection:bg-[#F3E5AB] selection:text-[#0B1026] bg-[#0B1026]">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Comprehensive About Section */}
        <AboutUs />

        <Menu />

        {/* New Special Offers Section */}
        <SpecialOffers />

        {/* New Chef's Recommendations Section */}
        <ChefsRecommendations />

        <Events />

        <Testimonials />
        
        <Reservations />

        {/* Gallery Preview Placeholder Section */}
        <section id="gallery" className="pb-32 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-[600px]">
                    <div className="col-span-2 row-span-2 rounded-3xl overflow-hidden bg-white/5 border border-white/5 group">
                        <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop" loading="lazy" className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" alt="Ambiance" />
                    </div>
                    <div className="rounded-3xl overflow-hidden bg-white/5 border border-white/5 group">
                         <img src="https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=2070&auto=format&fit=crop" loading="lazy" className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" alt="Drink" />
                    </div>
                    <div className="rounded-3xl overflow-hidden bg-white/5 border border-white/5 group">
                         <img src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop" loading="lazy" className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" alt="Cocktail" />
                    </div>
                    <div className="col-span-2 rounded-3xl overflow-hidden bg-white/5 border border-white/5 group">
                         <img src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop" loading="lazy" className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" alt="Dining" />
                    </div>
                </div>
            </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;