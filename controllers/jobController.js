const Jobs=require("../models/companyJobsModel")

const catchAsyncErrors=require("../middleware/catchAsyncErrors")
exports.getAllJobs=catchAsyncErrors(async(req,res)=>{
    const resultPerPage=1;

    const currentPage=Number(req.query.page||1);
    const skip=resultPerPage*(currentPage-1);
    let keyword=req.query.keyword;
    if(keyword===undefined){
        keyword=".*";
    }
    let location=req.query.location;
    if(location===undefined){
        location=".*";
    }
    let companyName=req.query.company;
    if(companyName===undefined){
        company=".*";
    }
    console.log(keyword);
    console.log(location);
    const jobs= await Jobs.aggregate([
        {
            $match:{
                "companyName":{
                    $regex:company,
                    $options:"i"
                }
            }
        },
        {
        
          $project: {
            _id: 1,
            jobsList: {
              $filter: {
                input: "$jobsList",
                as: "job_detail",
                cond: {$and: [{$regexMatch: {input: "$$job_detail.jobTitle",  regex:keyword,options:"i"}},{$regexMatch:{input:"$$job_detail.jobLocation",regex:location,options:"i"}}]}
              }
            }
          }
        }
      ]).limit(resultPerPage).skip(skip)
    res.status(200).json({success:true,jobs});
});
exports.addJob=catchAsyncErrors(async(req,res)=>{
    const newJob=await Jobs.create(req.body);
    res.status(200).json({success:true})
});


