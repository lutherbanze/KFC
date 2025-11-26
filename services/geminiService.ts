import { GoogleGenAI } from "@google/genai";
import { MENU_ITEMS } from "../constants";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const generateChatResponse = async (userMessage: string, history: string[]): Promise<string> => {
  try {
    const menuContext = MENU_ITEMS.map(item => 
      `${item.name} (${item.category}): ${item.price} MT - ${item.description}`
    ).join('\n');

    const systemPrompt = `
      Você é o "Coronel AI", um assistente virtual divertido e prestativo para o KFC Maputo (Moçambique).
      
      Seu objetivo é ajudar os clientes a escolherem o que comer com base na fome deles, orçamento e preferências.
      
      Contexto do Menu Atual (Preços em Meticais - MT):
      ${menuContext}
      
      Regras:
      1. Seja entusiasta, use emojis de frango/comida.
      2. Responda sempre em Português de Moçambique (pode usar calão leve como "mola", "txiling").
      3. Se perguntarem preços, use o contexto acima.
      4. Se o usuário não souber o que pedir, faça perguntas sobre o nível de fome ou quanto querem gastar.
      5. Mantenha as respostas curtas e diretas (máximo 3 frases).
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: [
        { role: 'user', parts: [{ text: systemPrompt }] }, // Pre-prompt context
        ...history.map(msg => ({ role: 'user', parts: [{ text: msg }] })), // Simplified history for context
        { role: 'user', parts: [{ text: userMessage }] }
      ],
      config: {
        temperature: 0.7,
      }
    });

    return response.text || "Desculpe, estou a fritar batatas agora. Pode repetir?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Eish! Tivemos um problema técnico. Tente novamente daqui a pouco.";
  }
};
