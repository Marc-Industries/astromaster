import { GoogleGenAI } from "@google/genai";

// Note: In a production static app, you wouldn't typically have process.env available
// without a build step or user input. Following instructions to use process.env.API_KEY.
const getAiClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.warn("API_KEY is not set. Translation will not work.");
    return null;
  }
  return new GoogleGenAI({ apiKey });
};

export const translateText = async (
  text: string, 
  options: string[], 
  explanation?: string
): Promise<{ text: string; options: string[]; explanation: string } | null> => {
  const ai = getAiClient();
  if (!ai) return null;

  try {
    const prompt = `
      Translate the following astronomy quiz question, its options, and the explanation into Italian.
      Return ONLY a valid JSON object with the following structure:
      {
        "question": "Translated question text",
        "options": ["Translated Option 1", "Translated Option 2", "Translated Option 3", "Translated Option 4"],
        "explanation": "Translated explanation (or generate a brief one if empty)"
      }

      Input:
      Question: "${text}"
      Options: ${JSON.stringify(options)}
      Explanation: "${explanation || ''}"
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-latest',
      contents: prompt,
      config: {
        responseMimeType: "application/json"
      }
    });

    const resultText = response.text;
    if (!resultText) return null;
    
    return JSON.parse(resultText);
  } catch (error) {
    console.error("Translation failed:", error);
    return null;
  }
};
