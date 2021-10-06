const express = require("express");
require ("../src/db/conn");

const MensRanking = require("../src/models/mens");

const app = express();
const port = process.env.PORT || 3000;

// this will read json data request from postman or api
app.use(express.json());

//Register router and call mens router to app.js
const router = require('./routers/men');
app.use(router);

app.get('/', async(req, res) => {
    res.send("Hello from mayank patel !!!");
});

app.listen(port, () => {
    console.log(`Connection is live at port no. ${port}`);
});