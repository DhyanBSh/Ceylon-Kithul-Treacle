
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getKithulInfo = async (query: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: query,
      config: {
        systemInstruction: "You are an expert on Sri Lankan Kithul Treacle. You are helpful, elegant, and informative. Answer questions about health benefits (low GI), traditional tapping methods, and recipe ideas. Keep answers concise and sophisticated.",
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I apologize, but I'm having trouble connecting right now. Kithul treacle is a healthy, traditional Sri Lankan sweetener with a low glycemic index!";
  }
};
