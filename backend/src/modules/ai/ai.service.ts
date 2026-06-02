import "dotenv/config";
import { GoogleGenerativeAI } from "@google/generative-ai";

console.log("GEMINI KEY EXISTS:", !!process.env.GEMINI_API_KEY);
console.log(
  "KEY PREFIX:",
  process.env.GEMINI_API_KEY?.substring(0, 8)
);

const genAI = new GoogleGenerativeAI(
  process.env.GEMINI_API_KEY as string
);

export const generateAIContent = async (
  prompt: string
) => {
  try {
  const model = genAI.getGenerativeModel({
  model: "gemini-2.5-flash",
});

    const result = await model.generateContent(prompt);

    return result.response.text();
  } catch (error) {
    console.error("GEMINI ERROR:", error);
    throw error;
  }
};