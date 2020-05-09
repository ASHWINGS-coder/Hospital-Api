const mongoose = require('mongoose');

const patientSchema = mongoose.Schema({
    phone:{
        type:String,
        required:true
    },
    report:[
       { 
           type: mongoose.Schema.ObjectId,
           ref: "Report"
        }
    ]
},{
    timestamps:true
});

const Patient = mongoose.model('Patient',patientSchema);

module.exports = Patient;