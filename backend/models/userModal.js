const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    name: {
        type: String,
        // field is required/compulsory
        require: [true, "Please add a name"]
    },
    email: {
        type: String,
        // field is required/compulsory
        require: [true, "Please add an email"],
        unique: true, // mail should be unique
        trim: true, //delete spaces

        //check for email validation
        match:[
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            "Please enter a valid email"
        ]
    },
    password: {
        type: String,
        // field is required/compulsory
        require: [true, "Please add a password"],

        //password vaildation
        minLength:[6,"Password must be upto 6 characters"],
        maxLength:[23,"Maximum length allowed is upto 23 characters "]
    },
    photo:{
        type: String,
        // field is required/compulsory
        require: [true, "Please add a photo"],
        default:"https://i.ibb.co/4pDNDk1/avatar.png"
    },
    phone:{
        type: String,
        default:"+91"
    },
    bio:{
        type: String,
        maxLength:[250,"Maximum length allowed is upto 250 characters "],
        default:"Bio"
    }
}, {
    timestamps: true,
})

const User = mongoose.model("User",userSchema)
module.exports = User