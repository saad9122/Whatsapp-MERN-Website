import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL } from "../../data";
import axios from "axios";



export const friendsListThunk = createAsyncThunk(
    "frinedsList",
    async () => {

        try {

            const res = await axios.get(`${API_URL}/friendsList`)

            return res.data

        }catch(err) {
            console.log("Error while getting FriendsList",err.message)
        }

        
    }
)