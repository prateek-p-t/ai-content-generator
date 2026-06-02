import { Router } from "express";
import {
  saveContent,
  getHistory,
  getStats,
  deleteContent,
} from "./content.controller";

import {
  protect,
} from "../../middleware/auth.Middleware";

const router = Router();

router.post(
  "/save",
  protect,
  saveContent
);

router.get(
  "/history",
  protect,
  getHistory
);

router.get(
  "/stats",
  protect,
  getStats
);

router.delete(
  "/:id",
  protect,
  deleteContent
);

export default router;