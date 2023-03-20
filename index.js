require("dotenv/config");
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');

// routes
const openings = require("./routes/opening");

// app use
const app = express();
// app.use(express.static(path.join(__dirname + '/public')))
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use('/opening', openings);
app.get("/", async (req, res) => {
    res.send("welcome in codeastu...");
});
// database connection
mongoose.connect(process.env.MONGO_DB, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("connection create successfully");
    })
    .catch((err) => {
        console.error(err);
    });

//server listen port 
app.listen(5000);