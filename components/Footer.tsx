import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <h4 className="text-lg font-bold font-serif">Fanguin Paysage</h4>
          <p className="text-sm text-gray-400">Entreprise familiale depuis 1962</p>
        </div>
        <div className="text-sm text-gray-400 text-center md:text-right">
          <p>&copy; {new Date().getFullYear()} Fanguin Paysage. Tous droits réservés.</p>
          <p className="mt-1">32 allée St Gilles, 92420 Vaucresson</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;