const mongoose = require("mongoose");
const connect = mongoose.connect("mongodb://localhost:27017/login-page");

connect.then(()=>{
    console.log("database successfully connected")
})
.catch( () => {
    console.log("databse cannot be connected");
})

const LogInSchema = new mongoose.Schema({
    name: {
        type : String,
        required : true
    },

    password: {
        type : Number,
        required : true
    }
})

const collection = new mongoose.model("users" , LogInSchema)

module.exports = collection;