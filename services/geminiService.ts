import { GoogleGenAI, Type } from "@google/genai";

export const translateText = async (
  text: string, 
  options: string[], 
  explanation?: string
): Promise<{ text: string; options: string[]; explanation: string } | null> => {
  // Always use new GoogleGenAI({apiKey: process.env.API_KEY}) directly as per guidelines.
  // The API key is assumed to be available via the define in vite.config.ts.
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

  try {
    const prompt = `Translate the following astronomy quiz question, its options, and the explanation into Italian.
      
      Input:
      Question: "${text}"
      Options: ${JSON.stringify(options)}
      Explanation: "${explanation || ''}"`;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            text: {
              type: Type.STRING,
              description: "The translated question text"
            },
            options: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: "The translated options"
            },
            explanation: {
              type: Type.STRING,
              description: "The translated explanation"
            }
          },
          required: ["text", "options", "explanation"]
        }
      }
    });

    const resultText = response.text;
    if (!resultText) return null;
    
    // Parse the JSON response which matches the schema
    return JSON.parse(resultText);
  } catch (error) {
    console.error("Translation failed:", error);
    return null;
  }
};
