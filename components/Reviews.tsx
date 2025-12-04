import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Review } from '../types';

const reviews: Review[] = [
  {
    name: "Marie L.",
    rating: 5,
    comment: "Fanguin Paysage entretient mon jardin depuis 10 ans. Toujours ponctuels, discrets et efficaces. Ils connaissent parfaitement mes plantes. Je recommande vivement !",
    date: "Il y a 2 mois"
  },
  {
    name: "Jean-Pierre D.",
    rating: 5,
    comment: "J'ai fait appel à eux pour un gros élagage. Travail impressionnant, nettoyage impeccable après le chantier. De vrais professionnels comme on en voit peu.",
    date: "Il y a 1 semaine"
  },
  {
    name: "Sophie M.",
    rating: 4,
    comment: "Une équipe très sympathique et de bon conseil pour mes nouvelles plantations. Le résultat est magnifique au printemps.",
    date: "Il y a 3 mois"
  }
];

const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="py-20 bg-fanguin-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">Ce que disent nos clients</h2>
          <div className="w-24 h-1 bg-fanguin-green mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg relative border-t-4 border-fanguin-green">
              <Quote className="absolute top-4 right-4 w-8 h-8 text-gray-200" />
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-5 h-5 ${i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                  />
                ))}
              </div>
              <p className="text-gray-600 italic mb-6">"{review.comment}"</p>
              <div className="flex items-center justify-between border-t pt-4">
                <span className="font-bold text-gray-900">{review.name}</span>
                <span className="text-sm text-gray-500">{review.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;