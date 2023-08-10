import { useRef, createContext, useEffect } from "react"
import { io } from 'socket.io-client'

export const SocketContext = createContext(null)

const SocketProvider = ({children}) => {

    const socket = useRef()

    useEffect(() => {
    
        socket.current = io('ws://localhost:9000')
    
      },[])

    return(

        <SocketContext.Provider value={socket}>

            {children}
        </SocketContext.Provider>

    )
}

export default SocketProvider