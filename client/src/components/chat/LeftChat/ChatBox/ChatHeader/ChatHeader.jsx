import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useSelector } from 'react-redux';
import { selectCurrentChatInfo } from '../../../../../redux/slices/conversationSlice';
import { selectActiveUsers } from '../../../../../redux/slices/friendListSlice';

export const ChatHeader = () => {

    const activeUsers = useSelector(selectActiveUsers)

    const currentChat = useSelector(selectCurrentChatInfo)
    
  return (
    <div className='bg-custom-gray px-4 py-2'>
        <div className='flex justify-between items-center'>
            <div className='flex space-x-2'>
                <div>
                    <img src={currentChat && currentChat.displayPicture} alt="dp" className='w-[45px] h-[45px] rounded-full' />
                </div>
                <div>
                    <p className='font-norma'>{currentChat.firstName + " " + currentChat.lastName}</p>
                    <p className='text-xs'>{activeUsers?.some(user => user.uniqueId === currentChat.uniqueId) ? 'Online' : 'Offline' }</p>
                </div>  
            </div>
            <div className='space-x-6 mr-2'>
                 <SearchIcon />
                 <MoreVertIcon/>
            </div>
        </div>
        
    </div>
  )
}
