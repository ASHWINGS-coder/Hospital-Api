const mongoose = require('mongoose');

const reportSchema = mongoose.Schema({
    patitent:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Patitent"
    },
    doctor:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Doctor"
    },
    status:{
        type:String,
        required:true
    }
},{
    timestamps:true
})

const Report = mongoose.model('Report',reportSchema);

module.exports = Report;