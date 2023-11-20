const mongooose = require("mongoose")
const todoSchema = new mongooose.Schema({
    title:{
        type:String,
        trim:true
    },
    description:{
        type:String,
        trim:true
    }
},{timestamps:true})

exports.Todo = new mongooose.model("todo",todoSchema)