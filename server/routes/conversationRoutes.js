const express = require("express");

const {updateCurrentChat, updateCoversationLastMessage, getAllConversations} = require("../controllers/conversationController");

const { getMessages, sendMessage, getLimitedMessages } = require("../controllers/messageController");


const router = express.Router()


router.route("/conversation").post(updateCurrentChat).get(getAllConversations)

router.put("/conversation",updateCoversationLastMessage)

router.route("/messages").post(sendMessage)

router.route("/allMessages/:id").get(getMessages)

router.route("/Messageslmt/:id").get(getLimitedMessages)
module.exports = router;

