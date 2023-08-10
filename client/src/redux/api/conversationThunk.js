import axios from "axios"
import { API_URL } from "../../data"
import { updateAllConversations, updateCurrentChat, updateLastMessage } from "../slices/conversationSlice"
import { getMessageThunk } from "./messagesThunk"
import { createAsyncThunk } from "@reduxjs/toolkit"

export const AsyncUpdateCurrentChat = (data) => async (dispatch) => {

    try {

        const res = await axios.post(`${API_URL}/chat/conversation`,{data})

        // dispatch(getMessageThunk(res.data._id))

        dispatch(updateCurrentChat(res.data))

    }catch(err) {

        console.log("Error while setting new Conversation",err.message)
    }

} 

export const AsyncUpdateLastMessage = (data) => async(dispatch) => {

    try{

        const res = await axios.put(`${API_URL}/chat/conversation`,{data})

        dispatch(updateLastMessage(res.data))

        dispatch(updateAllConversations(res.data))

    }catch(err) {
        console.log("Error while updtating Last message",err.message)
    }
}

export const GetAllConversationsThunk = createAsyncThunk(
    
    "conversations/allConversations",
    async() => {

        try{

            const res = await axios.get(`${API_URL}/chat/conversation`)

             return res.data

        }catch(err){

            console.log("Error while Getting all Conversations",err.message)
            
        }
    }
)