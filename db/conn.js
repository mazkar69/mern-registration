
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()

// const DB = `mongodb+srv://dazz:dazzazkar@cluster0.lkac2vn.mongodb.net/mernstack?retryWrites=true&w=majority`;
const DB = process.env.DATABASE;

mongoose.connect(DB).then(()=>{
    console.log("Connection Successfull.")
}).catch((err)=>{
    console.log("Error is " , err);
})