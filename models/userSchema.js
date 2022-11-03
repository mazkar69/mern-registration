const mongoose = require("mongoose");
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv').config();

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    work: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    cnf_password: {
        type: String,
        required: true,
    }
})



userSchema.pre("save", async function (next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 10)
        this.cnf_password = await bcrypt.hash(this.cnf_password, 10)
    }
    next();
})

userSchema.methods.generateAuthToken = function(){
    try {
        const token = jwt.sign({_id:this._id.toString()},process.env.SECRATE_KEY)
        return token;
    } catch (error) {
        
    }
}


const User = mongoose.model("USER", userSchema);

module.exports = User;
