import React from 'react'
import { emptyChatImage } from '../../../../data'

export const EmptyChat = () => {
  return (
    <>
        <div className='flex justify-center items-center h-[100vh]'>
            <div className='text-center min-w-[600px] px-8 justify-center'>
                <img src={emptyChatImage} alt="Background_imgae" className='bg-slate-200 w-[400px] m-w-[300px] mx-auto'/>
                <p className='text-4xl text-center py-8 font-light'>WhatsApp Web</p>
                <p className='text-sm'>Send and recieve messages without keeping your phone online</p>
                <p className='text-sm'>use Whatsapp on up to 4 linked devices and 1 phone at the same time</p>
            </div>
        </div>
        <p className='mt-auto text-center'>End-to-end encrypted</p>
    </>
  )
    
    
    
}
