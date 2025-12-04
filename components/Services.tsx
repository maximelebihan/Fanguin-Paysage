import React from 'react';
import { Shovel, Scissors, Trees, Flower2, CheckCircle2, AlertCircle } from 'lucide-react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    title: "Entretien de Jardins",
    description: "Tonte de pelouse, désherbage, ramassage de feuilles. Nous gardons votre jardin impeccable toute l'année.",
    icon: <Scissors className="w-12 h-12 text-white" />
  },
  {
    title: "Plantations",
    description: "Création de massifs, plantation d'arbres, d'arbustes et de fleurs adaptés au sol de Vaucresson.",
    icon: <Flower2 className="w-12 h-12 text-white" />
  },
  {
    title: "Élagage & Taille",
    description: "Taille de haies, élagage d'arbres en hauteur. Travail soigné et sécurisé pour la santé de vos végétaux.",
    icon: <Trees className="w-12 h-12 text-white" />
  },
  {
    title: "Remise en état",
    description: "Nettoyage complet de jardins laissés à l'abandon. Redonnez vie à votre espace extérieur.",
    icon: <Shovel className="w-12 h-12 text-white" />
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">Notre Savoir-Faire</h2>
          <div className="w-24 h-1 bg-fanguin-green mx-auto rounded-full"></div>
          <p className="mt-4 text-xl text-gray-600">Experts du végétal, nous prenons soin de votre nature.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-fanguin-cream rounded-xl p-8 transition duration-300 hover:shadow-xl hover:-translate-y-2 group">
              <div className="w-20 h-20 bg-fanguin-green rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bg-green-800 transition">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{service.title}</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Important Note about construction */}
        <div className="mt-16 bg-gray-50 border-l-4 border-fanguin-green p-6 rounded-r-lg max-w-3xl mx-auto shadow-sm">
          <div className="flex items-start">
            <CheckCircle2 className="flex-shrink-0 h-6 w-6 text-fanguin-green mt-1" />
            <div className="ml-4">
              <h4 className="text-lg font-bold text-gray-900">Une expertise 100% Végétale</h4>
              <p className="mt-1 text-gray-600">
                Chez Fanguin Paysage, nous nous concentrons exclusivement sur la santé et la beauté de vos plantes. 
                <span className="font-semibold text-gray-800"> Notez que nous ne réalisons pas de travaux de maçonnerie paysagère</span> (terrasses, allées bétonnées, murets).
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;