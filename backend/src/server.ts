import dotenv from "dotenv";

dotenv.config();

import app from "./app";
import { connectDB } from "./config/database";

const PORT = process.env.PORT || 5000;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("❌ Server startup error:", error);
  });