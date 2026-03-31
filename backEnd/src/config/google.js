//uso de google CALENDARimport { google } from 'googleapis';
/*
-autentica tu backend con Google

-usa el calendario de TU cuenta

-permite crear / borrar eventos
*/
import { google } from 'googleapis';
import path from 'path';
import { fileURLToPath } from 'url';

// esto es solo para que Node sepa dónde está el JSON
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const auth = new google.auth.GoogleAuth({
  keyFile: path.join(__dirname, 'google-key.json'),
  scopes: ['https://www.googleapis.com/auth/calendar']
});

const calendar = google.calendar({
  version: 'v3',
  auth
});

export default calendar;