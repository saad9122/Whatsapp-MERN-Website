
import {createSlice} from "@reduxjs/toolkit"
const options = {

    name: "users",
    initialState: {
        userInfo: {},
        isLoading: false,
        isError: false,
        isAuthenticated:false
    },

    reducers : {

        authUser : (state,action) => {
            state.userInfo = action.payload
            state.isAuthenticated = true
        }

    },

    extraReducers : (builder) => {

        builder
        .addCase("user/login/pending", (state) => {
            state.isLoading = true;
            state.isError = null
        })

        .addCase("user/login/fulfilled", (state,action) => {
            state.userInfo = action.payload;
            state.isLoading = false;
            state.isAuthenticated = true;

        })

        .addCase("user/login/error", (state) => {
            state.isLoading = false;
            state.isError = true
            state.isAuthenticated = false;

        })
    }
}


const userSlice = createSlice(options)  

export const selectUserinfo = state => state.users.userInfo;

export const {authUser} = userSlice.actions;

export const selectUser = state => state.users;

export default userSlice.reducer