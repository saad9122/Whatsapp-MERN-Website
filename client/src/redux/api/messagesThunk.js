import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../../data";
import { sendMessage, updateAllMessages } from "../slices/messageSlice";
import { AsyncUpdateLastMessage, GetAllConversationsThunk } from "./conversationThunk";
import { updateAllConversations } from "../slices/conversationSlice";


export const getMessageThunk = createAsyncThunk(
    "messages",

    async(id) => {

        try{

            const res = await axios.get(`${API_URL}/chat/allMessages/${id}`)

            return res.data

        }catch(err) {

            console.log("Error while getting Messages",err.message)

        }
    }
)

export const AsyncGetLimitedMessages = (id) => async(dispatch) => {

    try{

        const res = await axios.get(`${API_URL}/chat/Messageslmt/${id}`)

            dispatch(updateAllMessages(res.data))

    }catch(err) {

        console.log("Error while getting Messages",err.message)


    }
}

export const asyncSendMessage = (data) => async (dispatch) => {


    try {

        const message = await axios.post(`${API_URL}/chat/messages`,{data})

        console.log(message.data)

        const updateMessage = {conversationId:message.data.conversationId,message: message.data.text}

        dispatch(AsyncUpdateLastMessage(updateMessage))

        dispatch(sendMessage(message.data))

    }catch(err) {
        console.log("Error while sending message",err.message)
    }

}