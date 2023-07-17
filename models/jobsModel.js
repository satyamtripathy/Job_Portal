const mongoose=require("mongoose")
const jobSchema =new mongoose.Schema({
    
    jobTitle:{
        type:String,
        required:[true,"PLease Enter Job Title"],
    },
    jobUrl:{
        type:String,
        required:[true,"Please Enter Job Url"]
    },
    jobDescription:{
        type:String,
        required:[true,"Please Enter Job Description"]
    },
    jobLocation:{
        type:String,
        required:[true,"Please Enter Job Location"]
    },
    employmentType:{
        type:String,
        required:[false]
    },
    team:{
        type:String,
        required:[false]
    },
    experienceRequested:{
        type:String,
        required:[false]
    },
    qualification:{
        type:String,
        required:[false],
    },
    datePosted:{
        type:Date,
        default:Date.now
    }
})
module.exports=mongoose.model("Job",jobSchema);