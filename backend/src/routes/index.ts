import { Router } from "express";
import authRoutes from "../modules/auth/auth.routes";
import aiRoutes from "../modules/ai/ai.routes";
import contentRoutes from "../modules/content/content.routes";

const router = Router();

router.use("/auth", authRoutes);
router.use("/ai", aiRoutes);
router.use("/content", contentRoutes);

export default router;