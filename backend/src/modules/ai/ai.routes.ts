import { Router } from "express";
import { generateContent } from "./ai.controller";

const router = Router();

router.post("/generate", generateContent);

export default router;