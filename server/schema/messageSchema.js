const mongoose = require("mongoose")


const messageSchema = new mongoose.Schema({
    senderId: {
        type:String,
        required: true
    },
    receiverId: {
        type:String,
        required:true,
    },
    text: {
        type: String,
        required: true
    },
    conversationId: {
        type: String,
        required: true
    },
    type: {
        type:String,
        required:true,
        default: " "
    }

    }, 

    {
        timestamps: true
    }
)



const Message = mongoose.model("Message", messageSchema)


module.exports = Message