const moongose = require('mongoose');
const validator = require('validator');

const userSchema = moongose.Schema({
    name:{
        type:String,
        required:true,
        minLength:3
    },
    email:{
        type:String,
        required:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("invalid Email address.")
            }
        }
    },
    phone:{
        type:Number,
        required:true,
        min:10
    },
    message:{
        type:String,
        required:true,
        minLength:3
    },
    date:{
        type:Date,
        default: Date.now
    }

})

// collection create 
const User = moongose.model("User",userSchema);
module.exports = User;