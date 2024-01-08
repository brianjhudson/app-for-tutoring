const express = require('express');
const pool = require('./db/index');

const app = express();

app.get('/adoptable', async (req, res, next) => {
    const {rows} = await pool.query({text: 'SELECT * FROM adoptable'});
    return res.status(200).json(rows);
});

app.listen(3000, () => {
    console.log('App listening on port 3000');
})