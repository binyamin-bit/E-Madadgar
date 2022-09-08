const express = require('express');
const dotenv = require("dotenv")


const app = express();

dotenv.config();
app.use(express.json());

const data = app.get('/get',(req,res)=>{
    res.status(200).json({
        msg : "server is Ok",
        name : "Imran "
    })
})




const PORT =  4000;
app.listen((PORT), function(){
    console.log(`Server is working PORT # ${PORT}`);
})
// app.listen((PORT)=>{
// });