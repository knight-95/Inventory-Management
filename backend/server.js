const dotenv = require("dotenv").config();
const express= require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;




// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://solarladder:solarladder123@solar-ladder.baaoti5.mongodb.net/?retryWrites=true&w=majority";

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);


// Connect to DB and start server
// mongoose
//     .connect(process.env.MONGO_URI)
//     .then(() => {
//         app.listen(PORT,()=>{
//             console.log(`Server Running on port ${PORT}`)
//         })
//     })
//     .catch((err) => console.log(err))

    mongoose.connect(
        "mongodb://localhost:27018",
        {
          dbName: "yourDB-name",
          useNewUrlParser: true,
          useUnifiedTopology: true,
        },
        (err) =>
          err ? console.log(err) : console.log(
            "Connected to yourDB-name database")
      );

    // console.log(process.env.MONGO_URI)