const express = require('express');
const path = require('path');
const bcrypt = require('bcrypt');
const port = 3000
const collection = require('./config')

const app = express();

// app.set('view engine' , 'html');

app.use(express.json())

app.use(express.urlencoded({extended: false}));

app.get("/" , async function(req , res){
    res.sendFile('index.html' , {root: __dirname});
 
    // const data = {
    //     name : req.body.name,
    //     password : req.body.password
    // }

    // const userdata = await collection.insertMany(data);
    // console.log(userdata)
})





app.listen( port , function(req , res) {
    console.log("app is running on port "  + port);
})