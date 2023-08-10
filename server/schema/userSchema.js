const mongoose = require("mongoose")



const userSchema = new mongoose.Schema({

    firstName: {
        type : String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    isVerified: {
        type: Boolean, 
        required: true
    },
    displayPicture : {

        type: String,
        required:true,
    },
    uniqueId: {
        type: String,
        required: true
    }
})


 const User = mongoose.model("User",userSchema)

 module.exports = User