const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const connectDB = require('./dbConnect');



const app = express();
app.use(express.json())

app.use('/api/v1',(req,res)=>{res.send("ciao dal server!")})




function paginateRequest(){

}

const port = 4003
async function start (){
  try {
      app.listen(port,()=>{console.log("ascolto sulla porta ",4003)})
      await connectDB(process.env.CONNECTION_STRING)

  }catch(er){
     console.log(er);
     process.exit(1);
  }

}

start();


