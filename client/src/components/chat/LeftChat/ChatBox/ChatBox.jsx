import React, { useContext, useEffect } from 'react'
import { ChatHeader } from './ChatHeader/ChatHeader'
import { MessageBox } from './MessageBox/MessageBox'
import './chatbox.css'
import { useDispatch, useSelector } from 'react-redux'
import { SocketContext } from '../../../../context/socketProvider'
import { selectUserinfo } from '../../../../redux/slices/userSlice'
import { IncomingMessage } from '../../../../redux/slices/messageSlice'
import { selectAllConversation, updateAllConversations } from '../../../../redux/slices/conversationSlice'

export const ChatBox = () => {

const dispatch = useDispatch()

const socket = useContext(SocketContext)

const user = useSelector(selectUserinfo)

const allConversations = useSelector(selectAllConversation)

  useEffect(()=> {

    socket.current.on("incomingMessage", data => {

      if(data.recieverId === user.recieverId) {
        
        dispatch(IncomingMessage(data))
        
        const myConversation = allConversations.find(conversation => conversation.members.includes(data.receiverId) && 
        
        conversation.members.includes(data.senderId))

        dispatch(updateAllConversations({
          ...myConversation,
          lastMessage: data.text 
        }))
      } 
    })

    return () => {
      socket.current.off("incomingMessage");
    };

    
  },[])

  return (
    <div className='min-w-[800px]'>
        <ChatHeader />  
        <MessageBox/>
    </div>

  )
}
