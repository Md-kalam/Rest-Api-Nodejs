const express = require('express');
const app = express();
const schoolsRouter = require('./routes/schools');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config()

app.use(bodyParser.json())
app.use("/api/v1/schools", schoolsRouter)

mongoose.set('strictQuery', true)

mongoose.connect(process.env.DB_CONNECTION_URL,() => {
    console.log("Connected to db:")
})

app.listen(process.env.PORT,() => {
    console.log("Server is running....");
})