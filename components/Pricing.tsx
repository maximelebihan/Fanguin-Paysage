import React from 'react';
import { Calendar, Flower, Building2, Check, ArrowRight, Scissors } from 'lucide-react';

const Pricing: React.FC = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="pricing" className="py-20 bg-fanguin-cream relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -ml-20 w-64 h-64 bg-fanguin-green/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">Nos Formules & Tarifs</h2>
          <div className="w-24 h-1 bg-fanguin-green mx-auto rounded-full"></div>
          <p className="mt-4 text-xl text-gray-600">Des solutions adaptées à chaque jardin et à chaque budget.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Forfait Mensuel */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-t-4 border-fanguin-green flex flex-col transform transition hover:-translate-y-2 duration-300">
            <div className="p-8 flex-grow">
              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <Calendar className="w-8 h-8 text-fanguin-green" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-2">Entretien Mensuel</h3>
              <p className="text-gray-500 mb-6 text-sm">Pour un jardin impeccable toute l'année sans effort.</p>
              
              <div className="flex items-baseline mb-6">
                <span className="text-4xl font-bold text-fanguin-green">~250€</span>
                <span className="text-gray-500 ml-2">/ mois</span>
              </div>
              <p className="text-xs text-gray-400 italic mb-6">*Tarif indicatif moyen, selon surface.</p>

              <ul className="space-y-4">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-fanguin-green mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">1 à 2 passages par mois</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-fanguin-green mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Tonte de pelouse & finitions</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-fanguin-green mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Taille légère des arbustes</span>
                </li>
                <li className="flex items-start pt-4 border-t border-dashed border-gray-200">
                  <Scissors className="w-5 h-5 text-fanguin-soil mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-fanguin-soil font-semibold">Option Élagage : Tarif à définir selon hauteur</span>
                </li>
              </ul>
            </div>
            <div className="p-6 bg-gray-50">
              <button onClick={scrollToContact} className="w-full py-3 border-2 border-fanguin-green text-fanguin-green font-bold rounded-lg hover:bg-fanguin-green hover:text-white transition flex items-center justify-center">
                Choisir ce forfait
              </button>
            </div>
          </div>

          {/* Forfait Annuel / Saisonnier */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-t-4 border-fanguin-light flex flex-col transform transition hover:-translate-y-2 duration-300 relative">
            <div className="absolute top-0 right-0 bg-fanguin-light text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
              SUR MESURE
            </div>
            <div className="p-8 flex-grow">
              <div className="w-14 h-14 bg-lime-100 rounded-full flex items-center justify-center mb-6">
                <Flower className="w-8 h-8 text-fanguin-light" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-2">Saisons & Création</h3>
              <p className="text-gray-500 mb-6 text-sm">Embellissement ponctuel ou annuel.</p>
              
              <div className="flex items-baseline mb-6">
                <span className="text-2xl font-bold text-gray-900">Sur Devis</span>
              </div>
              <p className="text-xs text-gray-400 italic mb-6">Selon les végétaux et la surface.</p>

              <ul className="space-y-4">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-fanguin-light mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Plantations de saison (fleurs, bulbes)</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-fanguin-light mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Engazonnage (création ou rénovation)</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-fanguin-light mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Apport d'engrais et soins</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-fanguin-light mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Suivi du calendrier végétal</span>
                </li>
              </ul>
            </div>
            <div className="p-6 bg-gray-50">
              <button onClick={scrollToContact} className="w-full py-3 border-2 border-fanguin-light text-fanguin-green font-bold rounded-lg hover:bg-fanguin-light hover:text-white transition flex items-center justify-center">
                Demander un devis
              </button>
            </div>
          </div>

          {/* Collectivités */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-t-4 border-gray-400 flex flex-col transform transition hover:-translate-y-2 duration-300">
            <div className="p-8 flex-grow">
              <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                <Building2 className="w-8 h-8 text-gray-600" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-2">Collectivités</h3>
              <p className="text-gray-500 mb-6 text-sm">Syndics, copropriétés et entreprises.</p>
              
              <div className="flex items-baseline mb-6">
                <span className="text-2xl font-bold text-gray-900">Devis Spécial</span>
              </div>
              <p className="text-xs text-gray-400 italic mb-6">Contrats annuels adaptés.</p>

              <ul className="space-y-4">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-gray-400 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Gestion de grands espaces verts</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-gray-400 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Entretien parties communes</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-gray-400 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Facturation adaptée aux syndics</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-gray-400 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Interventions rapides</span>
                </li>
              </ul>
            </div>
            <div className="p-6 bg-gray-50">
              <button onClick={scrollToContact} className="w-full py-3 border-2 border-gray-400 text-gray-600 font-bold rounded-lg hover:bg-gray-600 hover:text-white transition flex items-center justify-center">
                Contacter pro <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Pricing;