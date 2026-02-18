import { GoogleGenAI, Type } from "@google/genai";

export const translateText = async (
  text: string, 
  options: string[], 
  explanation?: string
): Promise<{ text: string; options: string[]; explanation: string } | null> => {
  if (!process.env.API_KEY) {
    console.warn("API_KEY is not defined");
    return null;
  }

  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Translate the following astronomy quiz question, options, and explanation into Italian. Ensure the translation is scientifically accurate.

Question: ${text}
Options: ${options.join(', ')}
Explanation: ${explanation || ''}`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            text: { type: Type.STRING, description: "The translated question text" },
            options: { 
              type: Type.ARRAY, 
              items: { type: Type.STRING },
              description: "The translated options"
            },
            explanation: { type: Type.STRING, description: "The translated explanation" }
          },
          required: ["text", "options", "explanation"]
        }
      }
    });

    const jsonStr = response.text;
    if (!jsonStr) return null;
    return JSON.parse(jsonStr);

  } catch (error) {
    console.error("Translation failed:", error);
    return null;
  }
};
