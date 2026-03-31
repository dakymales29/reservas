import { google } from 'googleapis';

const credentials = JSON.parse(process.env.GOOGLE_KEY_JSON);

const auth = new google.auth.GoogleAuth({
  credentials,
  scopes: ['https://www.googleapis.com/auth/calendar'],
});

const calendar = google.calendar({ version: 'v3', auth });

export default calendar;