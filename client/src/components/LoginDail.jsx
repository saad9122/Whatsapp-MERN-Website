import { Dialog} from '@mui/material'
import React, {useEffect } from 'react'
import { qrCodeImage } from '../data'
import {GoogleLogin} from '@react-oauth/google'
import jwtDecode from 'jwt-decode'

import { useDispatch } from 'react-redux'
import { asyncAuthUser, userLoginThunk } from '../redux/api/userAPIThunk'


const dailogStyle = {
  marginTop: "10rem",
  width:"65rem",
  maxWidth:"75rem",
  height:"100vh",
  padding:"auto 52px",
  boxShadow:"none", 

}


export const LoginDail = () => {

  const dispatch = useDispatch()

  useEffect(() => {

    const userToken = localStorage.getItem("userToken")

    if(!userToken) {

      dispatch(asyncAuthUser(userToken))

    }

  },[])

  const handleLogin = (res) => {

    const userInfo = jwtDecode(res.credential)

    dispatch(userLoginThunk(userInfo))
    
  }

  return (
    <Dialog open = {true} 
    PaperProps={{sx : dailogStyle}}
    hideBackdrop
    >
      <div className='flex flex-col lg:flex-row justify-between p-16 overflow-visible'>
        <div>
          <p className='text-3xl text-gray-800 font-thin'>Use WhatsApp on your computer</p>

          <ul className='space-y-5 mt-14 text-lg'>
              <li>1. Open WhatsApp on your Phone.</li>

              <li>2. Select <span className='font-medium'>Menu</span> : and <span className='font-medium'>Settings</span> and select
              <span className='font-medium'> Linked Devices.</span></li>

              <li>3. Tap on <span className='font-medium'>Link a device.</span></li>
              
              <li>4. Point your Phone to screen to capture the QR code.</li>
            </ul>

        </div>
        <div className='flex justify-center items-center mt-8 lg:mt-0 relative'>
            
            <img alt='QR code' src={qrCodeImage} className='w-1/3 lg:w-10/12 '/>
            <div className='absolute'>
                <GoogleLogin 
                onSuccess={handleLogin}
                onError={(res) => {
                  console.log('Login Failed',res);
                }}
                />

            </div>
            
        </div>
      </div>
    </Dialog>
  )
}
