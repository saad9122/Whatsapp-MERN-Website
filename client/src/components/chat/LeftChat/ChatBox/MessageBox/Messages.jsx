import React from 'react'
import { formateDate } from '../../../../../utlities/common-util'
import { selectUserinfo } from '../../../../../redux/slices/userSlice'
import { useSelector } from 'react-redux'


export const Messages = ({message}) => {

  const userInfo = useSelector(selectUserinfo)

  const formatedTime = formateDate(message.createdAt)

  return (
    <div className='mt-2'>

       {
        message.senderId === userInfo.uniqueId ? 

        <div className='flex justify-end px-12'>
            <div className='bg-green-300 flex flex-none p-2 rounded-md space-x-4'>
                <div className='grow-0'>
                    <p className='whitespace-normal break-words'>{message.text}</p>
                </div>  

                <div className='flex items-end'>
                    <p className='text-xs text-red'>{formatedTime}</p>
                </div>
            </div>
        </div> 

        :

        <div className='flex justify-start px-12'>
            <div className='bg-white inline-flex flex-wrap p-2 rounded-md space-x-4'>
                <div>
                    <p>{message.text}</p>
                </div>  
                
                <div className='flex items-end'>
                     <p className='text-xs whitespace-normal'>{formatedTime}</p> 
                </div>
            </div>
        </div>
      }  

    </div>
  )
}
