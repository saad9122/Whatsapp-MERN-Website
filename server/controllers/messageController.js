const Message = require("../schema/messageSchema")



const getMessages = async(req,res) => {
    try{

        const messages = await Message.find({conversationId: `${req.params.id}`})

        res.status(200).json(messages)
        
    }catch(err) {

        res.status(500).json(err.message)

    }
}

const getLimitedMessages = async(req,res) => {
    try{

        const messages = await Message.find({conversationId: `${req.params.id}`}).sort({ createdAt: -1 }).limit(20)

        const reverseMessages = messages.reverse()

        res.status(200).json(reverseMessages)
        
    }catch(err) {

        res.status(500).json(err.message)

    }
}

const sendMessage = async (req,res) => {
    try{

        const data = await Message.create(req.body.data)

        console.log(data)

        res.status(200).json(data)

    }catch(err) {
        res.status(500).json(err.message)
    }
}



module.exports = {sendMessage,getMessages,getLimitedMessages}