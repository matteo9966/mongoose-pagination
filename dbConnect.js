const mongoose = require('mongoose');

// mongoose.connect() // stringa di connessione ed opzioni, è una funzione asincrona 

const connect = async (connectionString) =>{
    // const options = {}
    await mongoose.connect(connectionString);
}

module.exports= connect;

