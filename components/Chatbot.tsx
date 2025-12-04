import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Leaf, User, Bot } from 'lucide-react';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage } from '../types';

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  // Message initial proactif
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Bonjour ! Je suis l'IA Paysage de Fanguin. Avez-vous une question sur l'entretien de votre jardin ou nos services ?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Auto-scroll quand les messages changent ou quand la fenêtre s'ouvre
  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  // Ouverture automatique après 10 secondes
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const responseText = await sendMessageToGemini(messages, userMessage.text);
      const botMessage: ChatMessage = { role: 'model', text: responseText };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      const errorMessage: ChatMessage = { role: 'model', text: "Désolé, je rencontre un problème technique. Veuillez nous appeler." };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <>
      {/* Toggle Button - Positionné en haut à droite (top-24 pour être sous le header) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed top-24 right-6 z-50 p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center ${
          isOpen ? 'bg-red-500 rotate-90' : 'bg-fanguin-green hover:bg-green-800 animate-pulse'
        } text-white`}
        aria-label="Ouvrir le chat"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={28} />}
      </button>

      {/* Chat Window - Positionnée en dessous du bouton (top-40 right-6) */}
      {isOpen && (
        <div className="fixed top-40 right-6 w-full max-w-sm bg-white rounded-2xl shadow-2xl border border-gray-100 z-50 flex flex-col overflow-hidden max-h-[500px] h-[70vh] origin-top-right">
          {/* Header */}
          <div className="bg-fanguin-green p-4 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="bg-white p-1 rounded-full">
                <Leaf className="w-5 h-5 text-fanguin-green" />
              </div>
              <div>
                <h3 className="text-white font-bold text-sm">IA Paysage</h3>
                <span className="flex items-center text-xs text-green-100">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-1 animate-pulse"></span>
                  En ligne
                </span>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 scrollbar-hide">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex items-start space-x-2 ${msg.role === 'user' ? 'flex-row-reverse space-x-reverse' : 'flex-row'}`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${msg.role === 'user' ? 'bg-gray-300' : 'bg-fanguin-green'}`}>
                  {msg.role === 'user' ? <User size={16} className="text-gray-600" /> : <Bot size={16} className="text-white" />}
                </div>
                <div
                  className={`max-w-[75%] p-3 rounded-xl text-sm leading-relaxed shadow-sm ${
                    msg.role === 'user'
                      ? 'bg-fanguin-green text-white rounded-tr-none'
                      : 'bg-white text-gray-800 border border-gray-100 rounded-tl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
               <div className="flex items-start space-x-2">
                 <div className="w-8 h-8 bg-fanguin-green rounded-full flex items-center justify-center">
                    <Bot size={16} className="text-white" />
                 </div>
                 <div className="bg-white p-3 rounded-xl rounded-tl-none border border-gray-100 shadow-sm">
                   <div className="flex space-x-1">
                     <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                     <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                     <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                   </div>
                 </div>
               </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 bg-white border-t border-gray-100">
            <div className="flex items-center bg-gray-100 rounded-full px-4 py-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Votre question..."
                className="flex-1 bg-transparent focus:outline-none text-sm text-gray-800"
                disabled={isLoading}
              />
              <button
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                className={`ml-2 p-2 rounded-full transition-colors ${
                  !input.trim() || isLoading ? 'text-gray-400' : 'text-fanguin-green hover:bg-green-100'
                }`}
              >
                <Send size={18} />
              </button>
            </div>
            <p className="text-[10px] text-center text-gray-400 mt-2">L'IA Fanguin peut faire des erreurs.</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;