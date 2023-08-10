import { createSlice } from "@reduxjs/toolkit";

const options = {
    name:"conversations",
    initialState: {
        allConversations: [],
        currentChat: {},
        currentChatInfo : {},
        isLoading: false,
        hasError: false,  
    },

    reducers: {
        updateCurrentChat : (state,action) => {

            state.currentChat = action.payload;

        },

        updateCurrentChatInfo : (state,action) => {

            state.currentChatInfo = action.payload

        },

        updateLastMessage: (state,action) => {

        state.currentChat.lastMessage = action.payload

        },

        updateAllConversations: (state, action) => {

          state.allConversations.map(conversation => conversation._id === action.payload._id ? 
                
          conversation.lastMessage = action.payload.lastMessage : conversation)

        }

        
    }, 

    extraReducers: (builder) => {

        builder.addCase("conversations/allConversations/pending",(state) => {
            state.isLoading = true
        })

        builder.addCase("conversations/allConversations/fulfilled",(state,action) => {

            state.allConversations = action.payload
            state.isLoading = false
        })

        builder.addCase("conversations/allConversations/error",(state) => {

            state.hasError = true
            state.isLoading = false
        })
    }
}


const conversationSlice = createSlice(options);

export const {updateCurrentChat,updateCurrentChatInfo,updateLastMessage,updateAllConversations} = conversationSlice.actions

export const selectConversation = state => state.conversation   

 //allConversation Contains information of All the friends in Array

export const selectAllConversation = state => state.conversation.allConversations  

 //currentChat Contains current conversation (last Message, updateTime of last message receiver and senderId) 
//  selected by the user

export const selectCurrentChat = state => state.conversation.currentChat

 //currentChatInfo contains the all the Personal information (uniqueId,displayPicture,name etc) 
//  of current friend selected by the user.

export const selectCurrentChatInfo = state => state.conversation.currentChatInfo


export default conversationSlice.reducer


