const {Server} = require("socket.io")

const io = new Server(9000, {
    cors: {
        origin: "http://localhost:3000"
    }
})

let users = []

const addUser = (userData,socketId) => {
    
    isExist = users.some(user => user.uniqueId === userData.uniqueId)

    if(!isExist) {
        users.push({...userData,socketId})

    
    } else {

        return
    }
}


const getUser = (userId) => {

    return users.find(user => user.uniqueId === userId)

}


const removeUser = (socketId) => {
    users = users.filter (user => user.socketId !== socketId)
}

io.on("connection", (socket) => {

    console.log("user Connected")
   


    socket.on("addUser",userData => {
     addUser(userData,socket.id);
    io.emit("getUsers",users)
    })

    socket.on("sendMessage", data => {

        const user = getUser(data.receiverId)

        if(user) {

            io.to(user.socketId).emit("incomingMessage",data)
        }

    })

    socket.on("disconnect",() => {

        
        removeUser(socket.id)
        console.log("Üser Disconnected")
    })
})