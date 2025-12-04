import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Les devis sont-ils gratuits ?",
      answer: "Absolument. Nous nous déplaçons gratuitement à Vaucresson et aux alentours pour évaluer les travaux et vous fournir un devis détaillé sans engagement."
    },
    {
      question: "Évacuez-vous les déchets verts ?",
      answer: "Oui, nous nous chargeons de l'évacuation complète des déchets verts (tontes, branchages) vers une déchetterie agréée. Votre jardin reste propre après notre départ."
    },
    {
      question: "Intervenez-vous pour de petits travaux ponctuels ?",
      answer: "Tout à fait. Que ce soit pour une simple taille de haie annuelle ou un débroussaillage ponctuel, nous répondons à toutes les demandes."
    },
    {
      question: "Proposez-vous le crédit d'impôt (Service à la personne) ?",
      answer: "Nous pouvons vous orienter vers des structures partenaires pour les petits travaux de jardinage éligibles, mais pour les gros travaux d'élagage ou de création, c'est une facturation classique."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Questions Fréquentes</h2>
          <div className="w-16 h-1 bg-fanguin-green mx-auto rounded-full"></div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
              >
                <span className="font-bold text-gray-800">{faq.question}</span>
                {openIndex === idx ? (
                  <ChevronUp className="w-5 h-5 text-fanguin-green" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                )}
              </button>
              {openIndex === idx && (
                <div className="px-6 pb-4 pt-0">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;