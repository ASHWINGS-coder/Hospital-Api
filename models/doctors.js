const mongoose = require('mongoose');

const doctorSchema = mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
},{
    timestamps:true
})

const Doctor = mongoose.model('Doctor',doctorSchema);

module.exports = Doctor;