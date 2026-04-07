import { google } from 'googleapis';

const base64 = process.env.GOOGLE_KEY_BASE64;

const credentials = JSON.parse(
  Buffer.from(base64, 'base64').toString('utf-8')
);

const auth = new google.auth.GoogleAuth({
  credentials,
  scopes: ['https://www.googleapis.com/auth/calendar'],
});

const calendar = google.calendar({ version: 'v3', auth });

export default calendar;