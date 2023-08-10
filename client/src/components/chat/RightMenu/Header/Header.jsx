import React, { useState } from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

import ChatIcon from '@mui/icons-material/Chat';
import { ProfileInfo } from '../profileInfo/ProfileInfo';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../../redux/slices/userSlice';

export const Header = () => {

    const [isOpen,setIsOpen] = useState(false)

    const [showInfo,setShowInfo] = useState(false)


    const user = useSelector(selectUser)

    const toggleHeaderMenu = () => {
        setIsOpen(!isOpen)
    }

    const toggleShowInfo = () => {
        setShowInfo(!showInfo)
    }

  return (
    <>
        {showInfo && <ProfileInfo toggleShowInfo = {toggleShowInfo}/>}

        <div className='bg-custom-gray h-[60px] py-2 px-4 flex justify-between items-center relative'>

            <div>
                <img src={user.userInfo.displayPicture} alt="Displayimage" className='w-[42px] rounded-full cursor-pointer'
                onClick={toggleShowInfo}
                /> 
            </div>  
            <div className='space-x-7 relative'> 
                <AccessTimeIcon />
                <ChatIcon/> 
            <span className='pr-2 cursor-pointer' onClick={toggleHeaderMenu}>
                <MoreVertIcon/>
                </span> 
                {isOpen ? 
                    <div className='absolute bg-slate-50 p-4 right-5 top-7 shadow-md'>
                    <ul className='whitespace-nowrap text-left space-y-3 '>
                        <li>Profile</li>
                        <li>My Account</li>
                        <li>Log out</li>
                    </ul>
                </div> : <></>
                }
            </div>
        </div>

    
    </>
    
  )
}
