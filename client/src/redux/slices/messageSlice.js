import { createSlice } from "@reduxjs/toolkit"

const options = {
    name: "messages",
    initialState: {
        allMessages: [],
        isLoading: false,
        hasError: false,
        showMoreMessages: true
    },

    reducers: {

        sendMessage: (state,action) => {

            state.allMessages.push(action.payload)
        },

        IncomingMessage: (state,action) => {


                state.allMessages.push(action.payload)
        },

        updateAllMessages: (state,action) => {

            state.allMessages = action.payload
        },

        updateShowAllMessages : (state,action) => {

            state.showMoreMessages = action.payload
        }


    },

    extraReducers: (builder) => {
        builder
        .addCase("messages/pending",(state) => {

            state.isLoading = true

        })
        .addCase("messages/fulfilled",(state,action) => {
            state.isLoading = false;
            state.allMessages = action.payload
        }) 
        .addCase("message/  error",(state) => {
            state.isLoading = false;
            state.hasError = true
        }) 
    }
}


const messagesSlice = createSlice(options)

export const {sendMessage,IncomingMessage,updateAllMessages,updateShowAllMessages} = messagesSlice.actions;

export const selectMessages = state => state.messages

export const selectMoreMessages = state => state.message.showAllMessages

export default messagesSlice.reducer

