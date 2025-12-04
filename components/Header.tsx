import React, { useState } from 'react';
import { Menu, X, Phone, Leaf } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80; // Hauteur du header (h-20 = 5rem = 80px)
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <Leaf className="h-8 w-8 text-fanguin-green mr-2" />
              <div>
                <span className="font-serif text-2xl font-bold text-gray-900 block leading-none">Fanguin Paysage</span>
                <span className="text-xs text-fanguin-green tracking-widest uppercase font-semibold">Depuis 1962</span>
              </div>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" onClick={(e) => scrollToSection(e, 'services')} className="text-gray-700 hover:text-fanguin-green transition font-medium">Nos Services</a>
            <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="text-gray-700 hover:text-fanguin-green transition font-medium">À Propos</a>
            <a href="#reviews" onClick={(e) => scrollToSection(e, 'reviews')} className="text-gray-700 hover:text-fanguin-green transition font-medium">Avis Clients</a>
            <a href="#pricing" onClick={(e) => scrollToSection(e, 'pricing')} className="text-gray-700 hover:text-fanguin-green transition font-medium">Tarifs</a>
            <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="text-gray-700 hover:text-fanguin-green transition font-medium">Contact</a>
            <a href="tel:0147411146" className="flex items-center bg-fanguin-green text-white px-4 py-2 rounded-full hover:bg-green-800 transition">
              <Phone className="w-4 h-4 mr-2" />
              01 47 41 11 46
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-fanguin-green focus:outline-none">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t shadow-xl">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#services" onClick={(e) => scrollToSection(e, 'services')} className="block px-3 py-2 text-gray-700 hover:text-fanguin-green font-medium rounded-md hover:bg-gray-50">Nos Services</a>
            <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="block px-3 py-2 text-gray-700 hover:text-fanguin-green font-medium rounded-md hover:bg-gray-50">À Propos</a>
            <a href="#reviews" onClick={(e) => scrollToSection(e, 'reviews')} className="block px-3 py-2 text-gray-700 hover:text-fanguin-green font-medium rounded-md hover:bg-gray-50">Avis Clients</a>
            <a href="#pricing" onClick={(e) => scrollToSection(e, 'pricing')} className="block px-3 py-2 text-gray-700 hover:text-fanguin-green font-medium rounded-md hover:bg-gray-50">Tarifs</a>
            <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="block px-3 py-2 text-gray-700 hover:text-fanguin-green font-medium rounded-md hover:bg-gray-50">Demander un devis</a>
            <a href="tel:0147411146" className="block px-3 py-2 text-fanguin-green font-bold bg-gray-50 mt-2 rounded-md">Appeler : 01 47 41 11 46</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;