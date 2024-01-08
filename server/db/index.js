const {Pool} = require('pg');

const pool = new Pool({
    host: 'localhost',
    user: 'brian',
    database: 'shelter'
});

module.exports = pool;