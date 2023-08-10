import React, { useEffect } from 'react'

import {Toolbar, AppBar, styled, Box} from '@mui/material'
import { LoginDail } from './LoginDail'
import { ChatDail } from './chat/ChatDail'
import { useDispatch, useSelector } from 'react-redux'

const Mydiv = styled(Box)  `
background-color:#dcdcdc;
height: 100vh;
overflow:hidden;
`
const Header = styled(AppBar) `
height:220px;
background-color:#00bfa5;
box-shadow:none;
`

export const Messanger = () => {


  const dispatch = useDispatch()

  const user = useSelector(state => state.users)
  


  return (  
    <>
    <Mydiv>
      {
        user.isAuthenticated ? <ChatDail /> : 
        <>
          <Header>
              <Toolbar >
              </Toolbar>
          </Header>
        <LoginDail />

    </>
    }
    </Mydiv>

    </>
  )
}
