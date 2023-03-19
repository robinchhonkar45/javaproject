require("dotenv").config();
const express = require("express");
const bodyparser = require("body-parser");
const cors =require("cors");
const mongoose=require("mongoose")

const app = express();

app.use(cors());
app.use(bodyparser.json());

const port= 4000;
app.get("/", (req,res) =>{
    req.send("it is working")
})
// password=odv8vNOTnQlUa3Cu


app.listen(process.env.PORT, async() =>{
console.log("server is running");
await mongoose.connect(process.env.MONGO_URL, {
 useNewUrlParser: true,
 useUnifiedTopology: true,
});
 console.log("connected to database")
})
