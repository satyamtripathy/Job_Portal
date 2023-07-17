const express=require("express");
const { getAllJobs,addJob } = require("../controllers/jobController");
const router=express.Router();

router.route("/jobs").get(getAllJobs);
router.route("/job/new").post(addJob)

module.exports = router;
