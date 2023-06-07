const dotenv = require("dotenv").config();
const express= require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;

const url = "mongodb://localhost:27017/invent";

mongoose
    .connect(url,{})
    .then(() => {
        app.listen(PORT,()=>{
                console.log(`Server Running on port ${PORT}`)
            })
        })
    .catch((err) => console.log(err))






// // Connect to DB and start server
// mongoose
//     // .connect(process.env.MONGO_URI)
//     .connect("mongodb://localhost:27018")
//     .then(() => {
//         app.listen(PORT,()=>{
//             console.log(`Server Running on port ${PORT}`)
//         })
//     })
//     .catch((err) => console.log(err))

  