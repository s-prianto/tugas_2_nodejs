//filename: index.js
//import express
let express = require('express');
//import mongoose
let mongoose = require('mongoose');
//import body parser=> ini ga usah diimport juga bisa
let bodyParser = require('body-parser');
//import routes
let apiRoutes = require('./api-routes.js');

//intialize app
let app = express();

//bodyParser Configuration
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//connect mongoose and set connection variable
mongoose.connect('mongodb://localhost');

var db = mongoose.connection;

//setup server
var PORT = process.env.PORT || 8081;

//launched app to Listen specified PORT
app.listen(PORT, ()=>{console.log(`Server is Running on PORT ${PORT}`)});

//send message for default url
app.get('/', (req,res)=>res.send('Selamat Datang di Server Data Siswa'));

//app apiRoutes
app.use('/api', apiRoutes);
