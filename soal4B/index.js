

const http = require('http');
const express = require('express');
const port = 3000;
const {dirname} = require('path');

const hbs = require('hbs');

//menggunkan express
const app = express();
app.use(express.json());

//setting hbs enging
app.set('view engine', 'hbs');

//setting koneksi db
const dbConnection = require('./connection/db');

//setting encode data post
app.use(express.urlencoded({extended: false}));



app.get('/', (req, res) =>{
    res.render('index');
})







//setting port dan server
const server = http.createServer(app);
server.listen(port);
console.log("SERVER RUNNING ON PORT : " + port);