const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParcer = require('body-parser');
const config = require('./config/config');
const studentRoute = require('../server/routes/student.route');
// Database connection 
mongoose
  .connect(config.dbURI)
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch((err) => {
    console.error('Error connecting to mongo', err.reason)
  });

const app = express();
app.use(bodyParcer.json());
app.use(bodyParcer.urlencoded({extended : true}));
app.use(cors());
app.use('/students',studentRoute);


const PORT = process.env.PORT || 4000 ;
 app.listen(PORT, ()=>{
    console.log('connected to port ----------',PORT);
});

app.use((req,res,next)=>{
    next(createError(404));
});

app.use((err,req,res,next)=>{
    console.log(err.message);
    if(!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
});