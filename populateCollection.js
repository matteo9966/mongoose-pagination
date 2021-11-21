require('dotenv').config();
const connectDB = require('./dbConnect');
const fetch = require('node-fetch');
const Timeline = require('./TimelineModel')




// data.then(vals=>(Timeline.insertMany(vals))).then(response=>console.log("inseriti nel database!!"));

async function populateDB(){
    try {
      await connectDB(process.env.CONNECTION_STRING);
      let data= fetch('https://corona-api.com/countries/IT').then(res=>res.json()).then(res=>res.data.timeline)
      data.then(vals=>Timeline.insertMany(vals)).then(()=>console.log("ineeriti tutti i  dati correttamente!!!"));



    }catch(err){
       console.log("qualcosa è andato storto! :(");
    }
} 

populateDB()

