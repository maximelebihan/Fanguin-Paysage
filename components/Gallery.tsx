import React from 'react';

const Gallery: React.FC = () => {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1557429287-b2e26467fc2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Entretien de massifs",
      desc: "Taille soignée et désherbage"
    },
    {
      url: "https://images.unsplash.com/photo-1628126235206-526053784c77?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Tonte parfaite",
      desc: "Un gazon anglais à Vaucresson"
    },
    {
      url: "https://images.unsplash.com/photo-1598902108854-10e335adac99?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Plantations de printemps",
      desc: "Apport de couleurs et de vie"
    },
    {
      url: "https://images.unsplash.com/photo-1545105511-9a40570b2d41?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Élagage doux",
      desc: "Respect de la silhouette de l'arbre"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">Nos Réalisations</h2>
          <div className="w-24 h-1 bg-fanguin-green mx-auto rounded-full"></div>
          <p className="mt-4 text-xl text-gray-600">Quelques exemples de jardins choyés par nos équipes.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((img, idx) => (
            <div key={idx} className="group relative overflow-hidden rounded-xl shadow-lg h-80">
              <img 
                src={img.url} 
                alt={img.title} 
                className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-white font-bold text-lg">{img.title}</h3>
                <p className="text-gray-300 text-sm">{img.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;