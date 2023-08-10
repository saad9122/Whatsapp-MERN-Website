const User = require("../schema/userSchema")

const getFriendsList = async (req,res) => {

    try {

        const data = await User.find({})

        res.status(200).json(data)

    }catch(err) {
        res.status(500).json(err.message)
    }

}

module.exports = {getFriendsList}