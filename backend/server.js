const express = require('express')
require('dotenv').config()
const app = express()
const mongoose = require('mongoose');
const port = 3000

const mongoUsername; //voteapp.com or ARES123
const dbPassword;  
const mongoURI;



app.get('/', (req, res) => {
  res.send('Hello World! updated by nodemon')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
  
})