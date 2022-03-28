const mongoose = require("mongoose")

const userschema = new mongoose.Schema(
    {
        firstname : {type : String , required : true},
        lastname : {type : String},
        email : {type : String , required : true},
        password : {type : String , required : true}
    },
    {
        versionKey : false,
        timestamps : true
    }
)

module.exports = mongoose.model("users",userschema)