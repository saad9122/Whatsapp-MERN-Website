const express = require("express")
const { getFriendsList } = require("../controllers/friendsListController")
const { userLogin, authUser } = require("../controllers/userController")
const { authToken } = require("../util/Token")


const router = express.Router()


router.route("/login").post(userLogin).get(authToken,authUser)



module.exports = router