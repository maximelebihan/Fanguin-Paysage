import React, { useState } from 'react';
import { Phone, MapPin, Mail, Calendar, Send, CheckCircle, Leaf } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'entretien',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulation d'envoi API
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', phone: '', email: '', service: 'entretien', message: '' });
      // Reset status after 5 seconds to allow new submission if needed
      setTimeout(() => setStatus('idle'), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">Parlons de votre Jardin</h2>
          <div className="w-24 h-1 bg-fanguin-green mx-auto rounded-full"></div>
          <p className="mt-4 text-xl text-gray-600">Un projet ? Une question ? Demandez votre devis gratuit.</p>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col lg:flex-row border border-gray-100">
          
          {/* Contact Info (Left Side) */}
          <div className="bg-fanguin-soil text-white p-10 lg:w-2/5 flex flex-col justify-between relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-white/5 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-fanguin-green/50 rounded-full blur-2xl"></div>

            <div className="relative z-10">
              <h3 className="text-2xl font-serif font-bold mb-6">Nos Coordonnées</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Basés à Vaucresson, nous intervenons rapidement pour embellir vos extérieurs. 
                N'hésitez pas à nous appeler directement ou à remplir le formulaire.
              </p>

              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-white/10 p-3 rounded-lg mr-4 backdrop-blur-sm">
                    <MapPin className="w-6 h-6 text-fanguin-light" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-fanguin-light">Adresse</h4>
                    <p className="text-gray-200">32 allée St Gilles<br/>92420 Vaucresson</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-white/10 p-3 rounded-lg mr-4 backdrop-blur-sm">
                    <Phone className="w-6 h-6 text-fanguin-light" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-fanguin-light">Téléphone</h4>
                    <a href="tel:0147411146" className="text-white hover:text-fanguin-light transition text-xl font-semibold block mt-1">
                      01 47 41 11 46
                    </a>
                    <p className="text-xs text-gray-400 mt-1">Lun-Ven : 8h - 18h</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-white/10 p-3 rounded-lg mr-4 backdrop-blur-sm">
                    <Mail className="w-6 h-6 text-fanguin-light" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-fanguin-light">Email</h4>
                    <a href="mailto:contact@fanguin-paysage.fr" className="text-gray-200 hover:text-white transition">
                      contact@fanguin-paysage.fr
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-white/10 relative z-10">
              <div className="flex items-center text-sm text-gray-400 italic">
                <Leaf className="w-4 h-4 mr-2 text-fanguin-green" />
                <span>Réponse sous 24h ouvrées garantie.</span>
              </div>
            </div>
          </div>

          {/* Quote Form (Right Side) */}
          <div className="p-10 lg:w-3/5 bg-gray-50">
            {status === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-8 animate-fade-in">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="w-10 h-10 text-fanguin-green" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Message envoyé !</h3>
                <p className="text-gray-600 mb-8">
                  Merci de nous avoir contactés. Notre équipe a bien reçu votre demande et vous rappellera très prochainement pour discuter de votre projet.
                </p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="text-fanguin-green font-semibold hover:text-green-800 underline"
                >
                  Envoyer une autre demande
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Demandez votre Devis Gratuit</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nom complet *</label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-fanguin-green focus:border-transparent outline-none transition bg-white"
                        placeholder="Jean Dupont"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Téléphone *</label>
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-fanguin-green focus:border-transparent outline-none transition bg-white"
                        placeholder="06 12 34 56 78"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-fanguin-green focus:border-transparent outline-none transition bg-white"
                        placeholder="jean.dupont@email.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Type de projet *</label>
                      <select
                        name="service"
                        id="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-fanguin-green focus:border-transparent outline-none transition bg-white"
                      >
                        <option value="entretien">Entretien courant (Tonte, Taille)</option>
                        <option value="plantation">Plantation / Création</option>
                        <option value="elagage">Élagage d'arbres</option>
                        <option value="remise_en_etat">Remise en état complète</option>
                        <option value="autre">Autre demande</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Votre message</label>
                    <textarea
                      name="message"
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-fanguin-green focus:border-transparent outline-none transition bg-white"
                      placeholder="Décrivez brièvement votre besoin (surface approximative, accès, particularités...)"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className={`w-full py-4 px-6 rounded-lg font-bold text-lg text-white shadow-lg transition transform hover:-translate-y-1 flex items-center justify-center ${
                      status === 'submitting' ? 'bg-gray-400 cursor-not-allowed' : 'bg-fanguin-green hover:bg-green-800'
                    }`}
                  >
                    {status === 'submitting' ? (
                      <>Envoi en cours...</>
                    ) : (
                      <>
                        Envoyer ma demande <Send className="ml-2 w-5 h-5" />
                      </>
                    )}
                  </button>
                  <p className="text-xs text-gray-500 text-center mt-4">
                    Vos données sont confidentielles et servent uniquement à traiter votre demande.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;