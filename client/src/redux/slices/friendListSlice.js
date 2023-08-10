import { createSlice } from "@reduxjs/toolkit"
import { friendsListThunk } from "../api/friendsListThunk"
import { FriendList } from "../../components/chat/RightMenu/menu/friendList/FriendList";



const options = {
    name: "friendsList",
    initialState: {
        friends: [],
        acitveUsers: [],
        isLoading: false,
        hasError: false,
        searchTerm: "",
    },
    reducers: {
        updateSearchTerm: (state,action) => {

            state.searchTerm = action.payload
    },
        addActiveUsers: (state,action) =>{

            state.acitveUsers = action.payload
        }


    },

    extraReducers : {
        [friendsListThunk.pending] : (state) => {

            state.isLoading = true;
            state.hasError = false
        },

        [friendsListThunk.fulfilled] : (state,action) => {

            state.friends = action.payload;
            state.isLoading = false
            state.hasError = false

        },
        [friendsListThunk.error] : (state) => {

            state.isLoading = false
            state.hasError = true

        }

    }

}


const friendsListSlice = createSlice(options)

export const selectFriendsList = state => state.friendsList

export const selectfilteredFriendList = (state) => {


    const searchTerm = state.friendsList.searchTerm

    const friendsList = state.friendsList.friends.filter(friend => friend.uniqueId !== state.users.userInfo.uniqueId)


    if(searchTerm === "" || null) {

        return friendsList
    }

    const filteredList =   friendsList?.filter(friend => {

     const fullName = friend.firstName + " " + friend.lastName

       const returnValue =  fullName.toLowerCase().includes(state.friendsList.searchTerm.toLowerCase())
       
       return returnValue

    })

    return filteredList


}

export const selectSearchTerm = state => state.friendsList.searchTerm

export const selectActiveUsers = state => state.friendsList.acitveUsers

export const { updateSearchTerm ,addActiveUsers } = friendsListSlice.actions

export default friendsListSlice.reducer