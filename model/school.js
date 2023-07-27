const mongoose = require("mongoose");

const School = mongoose.Schema({
   name: {
    type: String,
    required: true
   },
   address: {
    type: String,
    required: true
   },
   city: {
     type: String,
     required: true
   },
   state:{
    type:String,
    required:true
   },
   zipcode :{
    type:Number,
    minlength:[5],
   },
   phone_number: { 
    type: Number,
    maxlength: [10]
   },
   email: {
    type: String,
    required: true
   },
});

module.exports = mongoose.model("schools", School)