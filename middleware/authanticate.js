const User = require('../models/userSchema')
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv').config()


const validateUser = async (req, res, next) => {

    try {

        const token = req.cookies.jwtoken;
        // console.log("The token is : " , token);
        const verifyUser = jwt.verify(token, process.env.SECRATE_KEY)
        // console.log(verifyUser)

        const user = await User.findOne({ _id: verifyUser._id })
        // console.log(user);


        if (!verifyUser) {
            throw new Error("User not found")
        }
        req.roken = token;
        req.rootUser = user;
        
    }catch(err){
        res.status(401).send("Unauthorized: No token provided")
        console.log(err);
    }

    next();

}

module.exports = validateUser;