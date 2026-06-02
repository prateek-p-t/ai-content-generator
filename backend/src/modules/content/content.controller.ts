import { Response } from "express";
import Content from "./content.model";
import {
  AuthRequest,
} from "../../middleware/auth.Middleware";

export const saveContent = async (
  req: AuthRequest,
  res: Response
) => {
  try {
    const { prompt, content } = req.body;

    const savedContent =
      await Content.create({
        userId: req.userId,
        prompt,
        content,
      });

    res.status(201).json({
      success: true,
      data: savedContent,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to save content",
    });
  }
};

export const getHistory = async (
  req: AuthRequest,
  res: Response
) => {
  try {
    const history =
      await Content.find({
        userId: req.userId,
      }).sort({
        createdAt: -1,
      });

    res.status(200).json({
      success: true,
      data: history,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch history",
    });
  }
};

export const getStats = async (
  req: AuthRequest,
  res: Response
) => {
  try {
    const contents =
      await Content.find({
        userId: req.userId,
      });

    const totalGenerations =
      contents.length;

    const totalWords =
      contents.reduce(
        (sum, item) =>
          sum +
          item.content
            .split(" ")
            .filter(Boolean).length,
        0
      );

    res.status(200).json({
      success: true,
      totalGenerations,
      totalWords,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch stats",
    });
  }
};

export const deleteContent = async (
  req: AuthRequest,
  res: Response
) => {
  try {
    const content =
      await Content.findOne({
        _id: req.params.id,
        userId: req.userId,
      });

    if (!content) {
      return res.status(404).json({
        success: false,
        message: "Content not found",
      });
    }

    await Content.findByIdAndDelete(
      req.params.id
    );

    res.status(200).json({
      success: true,
      message: "Content deleted",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to delete content",
    });
  }
};