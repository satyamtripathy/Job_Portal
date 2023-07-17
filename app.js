const express=require("express");
const app =express();
const errorHandler=require("./middleware/error")
app.use(express.json())
//Router Imports
const job=require("./routes/jobsRoutes");

app.use("/api/v1", job);

app.use(errorHandler)

module.exports=app