import { configureStore } from "@reduxjs/toolkit";
import  userSlice  from "../slices/userSlice";
import friendListSlice from "../slices/friendListSlice";
import conversationSlice from "../slices/conversationSlice";
import messageSlice from "../slices/messageSlice";

export const store = configureStore({
    
    reducer: {
        users: userSlice,
        friendsList: friendListSlice,
        conversation: conversationSlice,
        messages: messageSlice,

    }
})