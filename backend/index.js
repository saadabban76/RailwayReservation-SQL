const express = require('express');
const mySql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors);


const db = mySql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'railway_reservation',
})

app.get('/', (req, res) => {
    return res.json("hi from backend");
})

app.listen(3000, () => {
    console.log(`Server is running on port 3000`);
})