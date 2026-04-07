import { google } from "googleapis";
import dotenv from "dotenv";

dotenv.config();

const keyBuffer = Buffer.from(process.env.GOOGLE_KEY_BASE64, "base64");
const keyJson = JSON.parse(keyBuffer.toString("utf8"));

const auth = new google.auth.GoogleAuth({
  credentials: keyJson,
  scopes: ["https://www.googleapis.com/auth/calendar"],
});

export default auth;