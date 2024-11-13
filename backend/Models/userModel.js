const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://saqlainkoser:^vvrulc2q@noteapp.ht0lc.mongodb.net/?retryWrites=true&w=majority&appName=Noteapp")

//Schema 

let userSchema = new mongoose.Schema({
    username:String,
    email:String,
    password:String,
    name:String,
    date:{
        type:Date,
        default:Date.now
    }
})

//Model

mongoose.model('User_g26',userSchema)

module.exports = mongoose.model('User_g26');

