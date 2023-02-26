const express = require("express")
const router = express.Router();
const bcrypt = require("bcrypt")
const User = require('../models/userSchema')
const validateUser = require('../middleware/authanticate')



router.post("/register", async (req, res) => {
    const { name, email, phone, work, password, cnf_password } = req.body;
    const isAvailable = await User.findOne({ email: req.body.email });
    if (isAvailable) {
        
        return res.status(409).json({ error: "Email already exist",status:409 })
    }
    else {
        const user = new User({ name, email, phone, work, password, cnf_password })
        // console.log(user);
        await user.save();
        console.log("Data saved in database.")
        res.status(200)
        res.json({ success: "Data saved in databases" ,status:200})


    }

})

router.post("/signin", async (req, res) => {
    // console.log("inside the request");
 
    const { email, password } = req.body;

    const userData = await User.findOne({ email });

    if (!userData) {
        res.status(501);
        return res.json({ error: "Invalid Email " ,status:501})
    }
    else{
        const isMatch = await bcrypt.compare(password,userData.password)
        if(isMatch)
        {
            const token = await userData.generateAuthToken();  //Generating token.
            // console.log(token)

            res.cookie("jwtoken",token,{
                httpOnly:true
            })
            
            res.json({success:"register successful",status:200}).status(200);
        }
        else{
            res.status(403)
            res.json({error:"something went wroung maybe password does't match",status:403});
        }
    }

})

//For about page

router.get('/about',validateUser,(req,res)=>{
    res.status(200);            //We can get this is client side by res.status 
    res.send(req.rootUser);


})


//For logout
router.get('/logout',(req,res)=>{
    res.clearCookie('jwtoken');
    res.status(200);
    res.send( {success:"azkar"})
})

//For home
router.get('/home',(req,res)=>{
    res.status(200);
    res.send(req.rootUser);
})
module.exports = router;
