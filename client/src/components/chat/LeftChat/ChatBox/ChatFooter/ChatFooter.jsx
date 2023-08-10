import React, { useContext, useEffect, useState } from 'react'
import MoodIcon from '@mui/icons-material/Mood';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MicIcon from '@mui/icons-material/Mic';
import ClearIcon from '@mui/icons-material/Clear';


export const ChatFooter = ({text,setText,sendText}) => {


  const [selectFile,setSelectFile] = useState(true)  


  const handleChange = (e) => {
    setText(e.target.value)
  }


  const handleFileInput = (e) => {
    setSelectFile(e.target.files[0]);
    setText(e.target.files[0].name)
  }
  return (
    <div className='h-[70px] pb-2 bg-custom-gray flex justify-between items-center px-6 space-x-3'> 
        <div className='space-x-2 flex'>
            <MoodIcon sx={{fontSize:30}}/>
           {
            selectFile ?  
            <div className='cursor-pointer'
            onClick={() => setSelectFile(!selectFile)}
            >
                 <AttachFileIcon sx={{fontSize:30}}/>
            </div>

             : 
            
            <div className='flex'> 
              <input type='file'  className='cursor-pointer'
              onChange={handleFileInput}
              
              /> 
              <div
              className='cursor-pointer'
              >
                  <ClearIcon sx={{fontSize:30}}
                  onClick={() => setSelectFile(!selectFile)}
                  />
              </div>
            </div>
           } 
        </div>
        <div className='grow'>
            <input type="text" className='h-[40px] w-full rounded-lg bg-white outline-none px-2' 
            placeholder='Type a message'
            value={text}
            onChange={handleChange}
            onKeyDown={sendText}
            />
        </div>

        <div className='flex justify-center items-center'>

            <MicIcon sx={{fontSize:30}}/>

        </div>
    </div>
  )
}
