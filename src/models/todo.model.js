const mongoose = require("mongoose")

const todoschema = new mongoose.Schema({
    title : {type : String , required : true},
    userid : {type : mongoose.Schema.Types.ObjectId , ref : "user" , required : true}
},
{
    versionKey : false,
    timestamps : true
})

module.exports = mongoose.model("todos",todoschema)