import React from 'react';
import { Phone, ClipboardList, Shovel, Smile } from 'lucide-react';

const Process: React.FC = () => {
  const steps = [
    {
      icon: <Phone className="w-8 h-8 text-white" />,
      title: "1. Contact",
      desc: "Vous nous appelez ou remplissez le formulaire en ligne."
    },
    {
      icon: <ClipboardList className="w-8 h-8 text-white" />,
      title: "2. Visite & Devis",
      desc: "Nous passons voir votre jardin pour établir un devis gratuit et précis."
    },
    {
      icon: <Shovel className="w-8 h-8 text-white" />,
      title: "3. Intervention",
      desc: "Notre équipe intervient avec son matériel professionnel à la date convenue."
    },
    {
      icon: <Smile className="w-8 h-8 text-white" />,
      title: "4. Satisfaction",
      desc: "Vous profitez d'un jardin impeccable. Nous assurons le suivi."
    }
  ];

  return (
    <section className="py-16 bg-fanguin-soil text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold mb-4">Comment ça marche ?</h2>
          <p className="text-gray-300">Un processus simple et transparent.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center text-center relative">
              {/* Ligne de connexion entre les étapes (sauf le dernier) */}
              {idx < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-white/20 -z-0"></div>
              )}
              
              <div className="w-16 h-16 bg-fanguin-green rounded-full flex items-center justify-center mb-4 relative z-10 shadow-lg border-4 border-fanguin-soil">
                {step.icon}
              </div>
              <h3 className="font-bold text-xl mb-2">{step.title}</h3>
              <p className="text-sm text-gray-300 px-4">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;