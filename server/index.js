const express = require("express");
const dotenv = require("dotenv")
const cors = require("cors")
const bodyParser = require("body-parser")
const dbConncection = require("./DatabaseConnection/dbConncection")
const userRoutes = require("./routes/userRoutes");
const conversationRouter = require("./routes/conversationRoutes")
const { getFriendsList } = require("./controllers/friendsListController");

dotenv.config()

const port = process.env.PORT
const app = express()

app.use(cors())
app.use(bodyParser.json())


app.listen(port,() => {
    console.log("server is running on the port", port)
})

dbConncection()

app.use("/user",userRoutes)

app.get("/friendsList",getFriendsList)

app.use("/chat",conversationRouter)


