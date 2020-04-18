const Report = require('../models/report');

// fetching all reports by status
module.exports.reportsByStatus = async function(req,res) {
    let status = req.params.status;
    await Report.find({status:status},(err,report) => {
        if(err){
            console.log('error in fetching reports');
            return;
        }

        return res.json({
            Reports:report
        })
    })
}