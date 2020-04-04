const express = require('express');
const connectDB = require('./config/db');

const PORT = process.env.PORT || 5500;
const app = express();

connectDB();

app.get('/', (req, res) => {
    res.json({ msg: "At index"});
});

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});