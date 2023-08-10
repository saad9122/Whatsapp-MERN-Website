const Conversation = require("../schema/conversationSchema");

const updateCurrentChat = async(req,res) => {
    try{

        const data = req.body.data

        const conversation = await Conversation.findOne({members:{ $all: [data.senderId,data.receiverId]}})

        if(!conversation) {

          const conversation =  Conversation.create({
                members: [data.senderId,data.receiverId]
    
        })

        res.status(200).json(conversation)
    }

        res.status(200).json(conversation)

        
        
    } catch(err) {
        res.status(500).json(err.message)
    }
}

const updateCoversationLastMessage = async(req,res) => {

    try{

        const {message,conversationId} = req.body.data

        const conversation = await Conversation.findByIdAndUpdate(conversationId,{lastMessage:message}, {new: true})

        res.status(200).json(conversation)

        
    }catch(err) {
        res.status(500).json(err.message)
    }

}

const getAllConversations = async (req,res) => {

    try{

        const data = await Conversation.find({})

        res.status(200).json(data)

    }catch(err) {

        res.status(500).json(err.message)
    }
}


module.exports = {updateCurrentChat,updateCoversationLastMessage,getAllConversations}

