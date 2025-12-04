import React from 'react';
import { MapPin, Clock, ShieldCheck } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-fanguin-green text-white relative overflow-hidden">
      {/* Decorative pattern */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-black/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-serif font-bold mb-6">Une histoire de famille depuis 1962</h2>
            <p className="text-lg text-green-100 mb-6 leading-relaxed">
              Fondée il y a plus de 60 ans, Fanguin Paysage est une institution à Vaucresson. 
              Nous avons vu grandir les jardins du quartier et nous en prenons soin comme s'ils étaient les nôtres.
            </p>
            <p className="text-lg text-green-100 mb-8 leading-relaxed">
              Notre longévité est le gage de notre sérieux. Nous privilégions une relation de confiance, 
              le respect des saisons et un travail soigné. Pas de sous-traitance, juste de la passion.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-center space-x-3 bg-white/10 p-4 rounded-lg">
                <Clock className="w-8 h-8 text-fanguin-light" />
                <div>
                  <p className="font-bold">Expérience</p>
                  <p className="text-sm text-green-100">+60 ans d'expertise</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 bg-white/10 p-4 rounded-lg">
                <MapPin className="w-8 h-8 text-fanguin-light" />
                <div>
                  <p className="font-bold">Local</p>
                  <p className="text-sm text-green-100">Basé à Vaucresson</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 bg-white/10 p-4 rounded-lg sm:col-span-2">
                <ShieldCheck className="w-8 h-8 text-fanguin-light" />
                <div>
                  <p className="font-bold">Qualité Garanti</p>
                  <p className="text-sm text-green-100">Travail soigné et professionnel</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -inset-4 bg-fanguin-light/30 rounded-xl transform rotate-3"></div>
            <img 
              src="https://images.unsplash.com/photo-1558904541-efa843a96f01?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Jardinier travaillant" 
              className="relative rounded-xl shadow-2xl w-full h-auto object-cover transform -rotate-1 transition hover:rotate-0 duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;