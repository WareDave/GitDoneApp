const express = require('express');

const app = express();



// middleware

app.use(express.json({ extended: false }));
app.get("/", (req, res) => res.send("Serves up"));


//  port setup

const PORT = process.env.PORT || 8000;


app.listen(PORT, () => {
    console.log('spun up and running on localhost:${PORT}')
})