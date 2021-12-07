

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
const { query } = require('./connection/db');

//setting encode data post
app.use(express.urlencoded({extended: false}));



app.get('/', (req, res) =>{

    dbConnection.getConnection((err, conn) => {
        if (err) throw err;
        let card = [],
        type = [],
        query = `SELECT * FROM heroes_tb`;
        
        conn.query(query, (err, results) => {
            if (err) throw err;
            for (const result of results) {
                card.push({
                    ...result
                })
            }
            if (card.length === 0) {
                card = false;
            }
        });

        query = `SELECT id, name FROM type_tb`;
        conn.query(query, (err, results) => {
            if (err) throw err;
            for (const result of results) {
                type.push({
                    ...result
                })
            }
            if (type.length === 0) {
                type = false;
            }
        });

        res.render('', {
            card,
            type
        })

        conn.release();
    });

})


app.post('/addhero', (req, res) =>{
    const {name, photo, skill, damage, type} = req.body;

    dbConnection.getConnection((err, conn) => {
        if (err) throw err;
        const query = `INSERT INTO heroes_tb (name, type_id, photo, skill, damage) VALUES ('${name}', ${type}, '${photo}', '${skill}', ${damage})`;

        conn.query(query, err => {
            if (err) throw err;

            res.redirect('/');
        })
        conn.release();
    })

})

app.post('/addtype', (req, res) =>{
    const {typeName} = req.body;

    dbConnection.getConnection((err, conn) => {
        if (err) throw err;
        const query = `INSERT INTO type_tb (name) VALUES('${typeName}')`;

        conn.query(query, (err, result) => {
            if (err) throw err;

            res.redirect('/');
        })
        
    })
})


app.get('/deltype/:id', (req, res) => {
    const {id} = req.params;

    dbConnection.getConnection((err, conn) =>{
        if (err) throw err;
        const query = `DELETE FROM type_tb WHERE id = ${id}`;

        conn.query(query, (err) =>{
            if (err) throw err;

            res.redirect('/');
        })
        
    })
})

app.get('/delete/:id', (req, res) => {
    const {id} = req.params;

    dbConnection.getConnection((err, conn) =>{
        if (err) throw err;
        const query = `DELETE FROM heroes_tb WHERE id = ${id}`;

        conn.query(query, (err) =>{
            if (err) throw err;

            res.redirect('/');
        })
    })
})












//setting port dan server
const server = http.createServer(app);
server.listen(port);
console.log("SERVER RUNNING ON PORT : " + port);