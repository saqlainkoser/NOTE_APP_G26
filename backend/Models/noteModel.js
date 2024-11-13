const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://saqlainkoser:^vvrulc2q@noteapp.ht0lc.mongodb.net/?retryWrites=true&w=majority&appName=Noteapp")

//Schema 

let noteSchema = new mongoose.Schema({
    title:String,
    description:String,
    isImportant:Boolean,
    content:String,
    uploadedBy:String,
    date:{
        type:Date,
        default:Date.now
    }
})

//Model

mongoose.model('Notes',noteSchema)

module.exports = mongoose.model('Notes');

