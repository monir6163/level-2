import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.join(process.cwd(), ".env") });

const config = {
  app_mode: process.env.NODE_MODE,
  port: process.env.PORT ? Number(process.env.PORT) : 8000,
};
export default config;
