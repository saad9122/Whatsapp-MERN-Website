import React, { useContext, useEffect } from 'react'
import { Menu } from './RightMenu/menu/Menu'
import { EmptyChat } from './LeftChat/emptyChat/EmptyChat'

import './chatDail.css'
import { ChatBox } from './LeftChat/ChatBox/ChatBox'
import { useDispatch, useSelector } from 'react-redux'
import { selectConversation, selectCurrentChatInfo } from '../../redux/slices/conversationSlice'
import { selectUserinfo } from '../../redux/slices/userSlice'
import { SocketContext } from '../../context/socketProvider'
import { addActiveUsers, selectFriendsList } from '../../redux/slices/friendListSlice'
import { LoadingMessages } from '../common/LoadingMessages'
import { GetAllConversationsThunk } from '../../redux/api/conversationThunk'
import { friendsListThunk } from '../../redux/api/friendsListThunk'
import { Welcome } from '../common/Welcome'


export const ChatDail = () => {

  const currentChat = useSelector(selectCurrentChatInfo) 

  const friendList = useSelector(selectFriendsList)

  const allConversations = useSelector(selectConversation)


  const dispatch = useDispatch()

  const user = useSelector(selectUserinfo)

  const socket = useContext(SocketContext)  
 
 useEffect(() => {

 socket.current.emit("addUser",user)
 socket.current.on("getUsers",users => {
    dispatch(addActiveUsers(users))
 })

},[])

useEffect (() => {

  dispatch(GetAllConversationsThunk()) 
  dispatch(friendsListThunk())
    

},[])

  
  // conversation contains the userId and current chat Id. It camefrom backend.


  return (

    <>

        { !friendList.isLoading  && !allConversations.isLoading ?


        <div className='2xl:container mx-auto'>
          <div className='flex'>
              <div className='left-side bg-white'>
                <Menu />

              </div>

              <div className='right-side bg-custom-gray'>
                {Object.keys(currentChat).length ?  <ChatBox/> : <EmptyChat />}

              </div>
          </div>

        </div> :

        <Welcome />

        }
    
    
    </>

  
    
  )
}
