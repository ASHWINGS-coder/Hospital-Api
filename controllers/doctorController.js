const Doctor = require('../models/doctors');
const jwt = require('jsonwebtoken');

// registering user
module.exports.Register = async (req,res) => {
    try{
        let doc = await Doctor.findOne({email:req.body.email});

        if(doc){
            return res.json({
                message: "Username Already Exists"
            })
        }else{
            Doctor.create(req.body,(err,doc) => {
                if(err){
                    console.log("Error in registering username",err)
                }

                return res.json({
                    message:"Username Registered",
                    doctor:req.body
                })
            })
        }

    }catch(err){
        console.log(err);
    }
}

// login of user
module.exports.Login = async function(req,res){
    try{
        await Doctor.findOne({email:req.body.email} ,(err,doc) => {
            if(err){
                return res.json({
                    message:"Invalid Username or password"
                })
            }
            if(doc && req.body.password === doc.password){
                return res.json({
                    message:"Login Successfull",
                    data:{
                        token:jwt.sign(doc.toJSON(),'blah',{expiresIn:"10000000"})
                    }
                })
            }else{
                return res.json({
                    message:"Invalid Username or password"
                })
            }
        })

    }catch(err){
        return res.json({
            message:"Internal Server Error"
        })
    }
}