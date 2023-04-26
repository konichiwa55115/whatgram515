require('dotenv').config()
const fs = require('fs');

// const SESSION_DATA = process.env.SESSION_DATA || fs.existsSync('session.json') ? fs.readFileSync(__dirname + '/session.json', { encoding: 'utf8' }) : '';
const TG_BOT_TOKEN = process.env.TG_BOT_TOKEN || '5848326557:AAECjqWBP4JiwhwNRqx0LggKoBQUyC2tYpc';
const TG_OWNER_ID = process.env.TG_OWNER_ID || '6234365091';
const REMOVE_BG_API = process.env.REMOVE_BG_API || undefined;
const HEROKU_API_KEY = process.env.HEROKU_API_KEY || '';
const HEROKU_APP_NAME = process.env.HEROKU_APP_NAME || '';
const DB_URL = process.env.DB_URL || 'mongodb+srv://Bala7a19871:Ibntaymya1.@cluster0.5mtsc.mongodb.net/?retryWrites=true&w=majority';
const pmguard_enabled = process.env.PMGUARD_ENABLED || 'false';
const PMGUARD_ACTION = process.env.PMGUARD_ACTION && (process.env.PMGUARD_ACTION == 'mute' || process.env.PMGUARD_ACTION == 'block') ? process.env.PMGUARD_ACTION : 'mute';
const OCR_SPACE_API_KEY = process.env.OCR_SPACE_API_KEY || '';
const TG_CHANNEL_ID = process.env.TG_CHANNEL_ID || '';
const DETA_PROJECT_KEY = process.env.DETA_PROJECT_KEY || '2MWBWVuR_YBXVjR4JJbZpHj8v4HceYj27PekvsWKX';

module.exports = { TG_BOT_TOKEN , TG_OWNER_ID , REMOVE_BG_API, HEROKU_API_KEY, HEROKU_APP_NAME, DB_URL, pmguard_enabled, PMGUARD_ACTION, OCR_SPACE_API_KEY, TG_CHANNEL_ID, DETA_PROJECT_KEY };
