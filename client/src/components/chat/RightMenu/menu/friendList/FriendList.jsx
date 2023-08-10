import React from 'react'
import { Friend } from './Friend'
import { useDispatch, useSelector } from 'react-redux'
import { selectFriendsList, selectfilteredFriendList} from '../../../../../redux/slices/friendListSlice'
import { selectAllConversation, selectConversation} from '../../../../../redux/slices/conversationSlice'
import { selectUserinfo } from '../../../../../redux/slices/userSlice'

export const FriendList = () => {

    const friendList = useSelector(selectFriendsList)

    const filteredFiendList = useSelector(selectfilteredFriendList)

    const conversations = useSelector(selectConversation)

    const allConversations = useSelector(selectAllConversation)

    const user  = useSelector(selectUserinfo)    


  return (

    <div className='py-1'>

      

      {
        

        <div>

            { friendList.friends && conversations.allConversations &&
            
             filteredFiendList?.map(friend =>  friend.uniqueId !== user.uniqueId ? <Friend friend = {friend}  allConversations={allConversations} key = {friend.uniqueId}/> : null)} 

        </div>
      }
        
    </div>
  )
}
