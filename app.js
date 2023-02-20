const express = require('express')
const app = express();
const cookieParser = require('cookie-parser')
const dotenv = require('dotenv').config()
require("./db/conn")
const port = process.env.PORT || 5000;

// For sending and reciving the cookie
app.use(cookieParser())

//For getting the form data
app.use(express.json());
// app.use(express.urlencoded());


// router middleware
app.use(require('./router/auth'))



//uncomment from .env to run this if production
if (process.env.NODE_ENV == "production") {

    app.use(express.static("client/build"));

    const path = require("path");

    app.get("*", (req, res) => {

        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));

    })


}
else {
    app.get('/', (req, res) => {
        res.send("Running..........")
    })
}


app.listen(port, () => {
    console.log("Server is running at port ", port);
})