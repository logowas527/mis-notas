const Pool = require('pg').Pool;
const pool = new Pool({
  user: 'me',
  host: 'localhost',
  database: 'notepad',
  password: 'password',
  port: 5432,
})

module.exports = {
    query: (text, params) => pool.query(text, params),
  };
 