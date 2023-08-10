import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../../data";
import { authUser } from "../slices/userSlice";



export const userLoginThunk = createAsyncThunk(
    "user/login", 
    async(user,ThunkAPI) => {

        try {

            const data = {
                firstName: user.given_name,
                lastName: user.family_name,
                email:user.email,
                isVerified: user.email_verified,
                displayPicture:user.picture,
                uniqueId:user.sub
            }
    
            const res = await axios.post(`${API_URL}/user/login`,{data})

            localStorage.setItem("userToken",(res.data.token))

            return res.data

        }catch(err) {
            console.log("Ërror while logging in User",err.message)
        }
    }
)


export const asyncAuthUser = (token) => async(dispatch) => {
    try {

        const res = axios.get("user/login",{
            headers: {
                Autherization: `Bearer ${token}`
            }
        })

        dispatch(authUser(res.data))

    }catch(err) {
        console.log("Error while authenticating the user",err.message)
    }
}