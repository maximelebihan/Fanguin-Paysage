import { GoogleGenAI } from "@google/genai";
import { ChatMessage } from "../types";

const SYSTEM_INSTRUCTION = `
Tu es l'assistant virtuel de l'entreprise "Fanguin Paysage".
Informations clés :
- Nom : Fanguin Paysage
- Création : 1962 (Entreprise historique et familiale)
- Adresse : 32 allée St Gilles, 92420 Vaucresson
- Téléphone : 01 47 41 11 46
- Zone d'intervention : Vaucresson et alentours (92).

Services proposés :
- Entretien de jardin (tonte, taille de haies, désherbage).
- Plantation (arbres, arbustes, fleurs).
- Élagage d'arbres.
- Conseils paysagers.

Tarifs et Formules (A SAVOIR) :
1. Forfait Mensuel "Entretien Courant" : Environ 250€ / mois. Comprend 1 à 2 passages par mois pour tonte et taille légère.
2. Option Élagage : Tarif à définir sur devis (selon hauteur/volume).
3. Forfait Annuel "Saisons" : Sur devis. Comprend plantation de saison et/ou engazonnage.
4. Forfait "Collectivités & Copropriétés" : Devis sur demande uniquement.

IMPORTANT - Services NON proposés (Exclusions) :
- Nous ne faisons PAS de construction en dur.
- PAS de terrasses, PAS d'allées bétonnées, PAS de maçonnerie paysagère.

Ton rôle :
- Répondre aux questions des clients de manière chaleureuse, professionnelle et polie.
- Donner des conseils simples de jardinage si demandé.
- Si le client demande le prix d'un entretien classique, mentionne le forfait mensuel autour de 250€.
- Pour les demandes de prix précis ou d'élagage : Encourage le client à remplir le formulaire de devis gratuit disponible en bas de la page ou à appeler.
- Si le client demande une terrasse ou une allée, explique poliment que Fanguin Paysage est spécialisé dans le végétal et l'entretien, et ne fait pas de maçonnerie.

Langue : Français uniquement.
Ton : Expert, passionné, bienveillant.
`;

export const sendMessageToGemini = async (history: ChatMessage[], newMessage: string): Promise<string> => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    // Transform history for the API format if needed, but for single generateContent we often just use system prompt + context
    // Ideally use chat history.
    
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
      history: history.map(msg => ({
        role: msg.role,
        parts: [{ text: msg.text }]
      }))
    });

    const response = await chat.sendMessage({
      message: newMessage
    });

    return response.text || "Désolé, je n'ai pas pu générer de réponse pour le moment.";
  } catch (error) {
    console.error("Error calling Gemini:", error);
    return "Je rencontre actuellement des difficultés techniques. Veuillez nous appeler directement au 01 47 41 11 46.";
  }
};