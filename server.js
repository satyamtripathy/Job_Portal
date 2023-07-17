const app=require("./app");
const dotenv=require("dotenv");
const connectDatabase=require("./config/database")

//config
dotenv.config({path:"backend/config/config.env"})

connectDatabase()

const server=app.listen(process.env.PORT,()=>{
    console.log("Server is Working on Http://localhost:${process.env.PORT}");
})