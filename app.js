const express = require('express');
const mongoose = require('mongoose');
const paginateCollection = require('./paginationMiddleware');
require('dotenv').config();
const connectDB = require('./dbConnect');
const Timeline = require('./TimelineModel')



const app = express();
app.use(express.json())
// app.get('/api/v1',(req,res)=>{res.send("ciao")});
app.get('/api/v1',paginateCollection(Timeline),(req,res)=>{console.log(req.result);res.json(req.result)});




function paginateRequest(){

}

const port = 4003
async function start (){
  try {
      app.listen(port,()=>{console.log("ascolto sulla porta ",port)})
      await connectDB(process.env.CONNECTION_STRING)

  }catch(er){
     console.log(er);
     process.exit(1);
  }

}

start();


