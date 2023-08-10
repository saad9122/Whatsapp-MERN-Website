import React, { useContext, useEffect, useRef, useState } from 'react'
import { ChatFooter } from '../ChatFooter/ChatFooter'
import { Messages } from './Messages'
import { useDispatch, useSelector } from 'react-redux'
import { IncomingMessage, selectMessages, selectMoreMessages, updateAllMessages, updateShowAllMessages } from '../../../../../redux/slices/messageSlice'
import { SocketContext } from '../../../../../context/socketProvider'
import { selectUserinfo } from '../../../../../redux/slices/userSlice'
import { asyncSendMessage, getMessageThunk } from '../../../../../redux/api/messagesThunk'
import { selectCurrentChat, selectCurrentChatInfo } from '../../../../../redux/slices/conversationSlice'
import { LoadingMessages } from '../../../../common/LoadingMessages'

export const MessageBox = () => {

  const messageScrollRef = useRef()

  const messages = useSelector(selectMessages)

  const socket = useContext(SocketContext)

  const user = useSelector(selectUserinfo)

  const [text,setText] = useState("")

  const dispatch = useDispatch()

  const currentChat = useSelector(selectCurrentChat)

  const currentChatInfo = useSelector(selectCurrentChatInfo)

  const sendText = (e) => {

    const key = e.keyCode;

    if(key === 13) {

      const receiverId = currentChatInfo.uniqueId
      const senderId = user.uniqueId
      const conversationId = currentChat._id
      
        const message = {
          conversationId:conversationId,
          senderId:senderId,
          receiverId:receiverId,
          type:'text',
          text:text,
          createdAt: new Date()
        }   

        if(text !== " ") {

           dispatch(asyncSendMessage(message))

        }

        socket.current.emit("sendMessage",message)

        setText("")
    }
  }

  const handleAllMessages = () => {
    
    dispatch(updateShowAllMessages(false))
    dispatch(getMessageThunk(currentChat._id))
    
  }

  useEffect(() => {

    messageScrollRef.current.scrollTop = messageScrollRef.current.scrollHeight;
    // messageScrollRef.current.scrollTop({ transition: "smooth" })
}, [messages]);


  return (
    <div className='message-background relative flex flex-col justify-between min-h-[500px]'> 
        <div className='grow overflow-y-scroll' ref={messageScrollRef}>

           {messages.allMessages && 
           <div>

            {messages.showMoreMessages && messages.allMessages.length > 19 &&
            
            <div className='flex justify-center text-blue-500 font-bold cursor-pointer mt-2'
            onClick={handleAllMessages}
            >
              
              Show more messages</div>
              
            
            }

           {!messages.isLoading ? messages.allMessages.map(message => <Messages message={message} key={message._id} />) :
           <LoadingMessages /> }
           
           </div>
           
           
           } 

        </div>
        <div>
             <ChatFooter text ={text}  setText = {setText} sendText={sendText}/>
        </div>
    </div>
  )
}