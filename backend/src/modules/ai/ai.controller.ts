import { Request, Response } from "express";
import { generateAIContent } from "./ai.service";

export const generateContent = async (
  req: Request,
  res: Response
) => {
  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({
        success: false,
        message: "Prompt is required",
      });
    }

    const content = await generateAIContent(prompt);

    res.status(200).json({
      success: true,
      content,
    });
  } catch (error: any) {
  console.error("FULL ERROR:", error);

  return res.status(500).json({
    success: false,
    error: error?.message || String(error),
  });
}
};