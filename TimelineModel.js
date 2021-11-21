const mongoose = require('mongoose');

// updated_at: '2021-11-10T04:21:38.000Z',
//     date: '2021-11-10',
//     deaths: 132491,
//     confirmed: 4818705,
//     recovered: 0,
//     new_confirmed: 6111,
//     new_recovered: 0,
//     new_deaths: 68,
//     active: 4686214


const Timeline = new mongoose.Schema({
   updated_at:{type:String},
   date:{type:String},
   deaths:{type:Number},
   confirmed:{type:Number},
   recovered:{type:Number},
   new_confirmed:{type:Number},
   new_recovered:{type:Number},
   new_deaths:{type:Number},
   active:{type:Number}

})


module.exports = mongoose.model('Timeline',Timeline);