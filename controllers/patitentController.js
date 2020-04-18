const Patient = require('../models/patients');
const Report = require('../models/report');

// registering patient
module.exports.Register = async (req,res) => {
    let patient = await Patient.findOne({phone:req.body.phone});

    if(patient){
        return res.json({
            message:"Patient Entry Already Exist",
            patient_data:patient
        })
    }else{
        Patient.create(req.body , (err,user) => {
            if(err){
                console.log('Error',err)
            }

            return res.json({
                message:"Patient Entry Successfully Created ",
                patient_data:user
            })
        })
    }
}

// creating report for patient
module.exports.createReport = async function(req, res){
    let patientId = req.params.id;
    let patient = await Patient.findById({_id: patientId});
    if(patient){
        await Report.create({
            patient: patientId,
            //doctor: req.user.id,
            status: req.body.status
        }, function(err, report){
            if(err){console.log("Error in creating Reports", err); return;}
            return res.json({
                message: "Report Created",
                Report: report
            });
        });

    }else{
        return res.json({
            message: "Patient Not Exists"
        });
    }
}

//  fetching reports
module.exports.allReports = async (req,res) => {
    let patitentId =req.params.id;
    let patient = await Patient.findById({_id:patitentId})

    if(patient){
        Report.find({patient:patitentId} , function(err,report){
            if(err){
                console.log('Error in fetching reports');
            }
            return res.json({
                message:"All Reports",
                reports:report
            })
        })
    }else{
        return res.json({
            message:"Reports of the patient doesnt exist"
        })
    }
}