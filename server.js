require('dotenv').config();
const express = require('express');

const connectDB = require("./config/db")

const app = express();

connectDB();

// middleware

app.use(express.json({ extended: false }));
app.get("/", (req, res) => res.send("Serves up"));


//  port setup

const PORT = process.env.PORT || 8000;


app.listen(PORT, () => {
    console.log('spun up and running on localhost:${PORT}')
})