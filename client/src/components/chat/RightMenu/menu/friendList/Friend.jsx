import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectUserinfo } from '../../../../../redux/slices/userSlice'
import {  updateCurrentChatInfo } from '../../../../../redux/slices/conversationSlice'
import { AsyncUpdateCurrentChat } from '../../../../../redux/api/conversationThunk'
import { selectFriendsList } from '../../../../../redux/slices/friendListSlice'
import { formateDate } from '../../../../../utlities/common-util'
import { updateShowAllMessages } from '../../../../../redux/slices/messageSlice'
import { AsyncGetLimitedMessages } from '../../../../../redux/api/messagesThunk'

export const Friend = ({friend,allConversations}) => {


  const user = useSelector(selectUserinfo)

  const friendsList = useSelector(selectFriendsList)

  const currentConversation  = allConversations.find(conversation => conversation.members.includes(friend.uniqueId) && 
  conversation.members.includes(user.uniqueId))
  
  const dispatch = useDispatch()

  const formateTime = currentConversation.lastMessage && formateDate(currentConversation.updatedAt)

  const handleChatClick = () => {

      const data = {

        senderId: user.uniqueId,
        receiverId: friend.uniqueId
        
      }
  
      const friendInfo = friendsList.friends.find(f => f._id === friend._id)
  
      dispatch(updateCurrentChatInfo(friendInfo))

      dispatch(AsyncGetLimitedMessages(currentConversation._id)) 
  
      dispatch(AsyncUpdateCurrentChat(data))

      dispatch(updateShowAllMessages(true))
    }

  return (
    <div className='py-2 px-3 cursor-pointer mx-1 mb-1 border-b-[0.2px] border-custom-gray'
    onClick={handleChatClick}
    >

      <div className='flex'>
          <div>
             <img src={friend.displayPicture} alt="dp" className='w-[50px] rounded-full'/>

          </div>
          <div className='flex justify-between grow'>
              <div className='px-4'>
                <p className='text-lg font-light'>{friend.firstName}</p> 
                <p className='text-sm text-gray-700 mt-1'>{currentConversation.lastMessage ? currentConversation.lastMessage : "Tap to start Chating"}</p>
              </div> 
            <div>

                <p className='text-xs p-2 text-gray-700'>{formateTime}</p>

            </div>
          </div>
             
      </div>
      
    </div>
  )
}
