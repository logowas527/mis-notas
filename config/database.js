const Pool = require('pg').Pool;
const pool = new Pool({
  user: 'me',
  host: 'dpg-cflu1npa6gdjlmrf3hug-a',
  database: 'notepad_zji2',
  password: 'wdlyuoS1x7PDNcTZN3cHYfcuFOXqMESS',
  port: 5432,
})

module.exports = {
    query: (text, params) => pool.query(text, params),
  };
 
