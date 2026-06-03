import axios from "axios";
import { API_URL } from "@/lib/api";

export const generateAIContent = async (
  topic: string,
  tone: string
) => {
  const response = await axios.post(
    `${API_URL}/api/ai/generate`,
    {
      prompt: `Write ${tone} content about ${topic}`,
    }
  );

  return response.data.content;
};

