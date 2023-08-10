const User = require("../schema/userSchema")
const { generateToken } = require("../util/Token")


const userLogin = async(req,res) => {

    try{

        const userInfo = req.body.data

        const user = await User.findOne({email: userInfo.email})

        if(user) {
            const fullName = user.firstName + user.lastName

            res.status(200).json({

                firstName: user.firstName,
                lastName: user.lastName,
                fullName: fullName,
                email: user.email,
                displayPicture: user.displayPicture,
                uniqueId:user.uniqueId,
                token: generateToken(user._id)

            })

        } else {

            const newUser = await User.create(userInfo)

            if(newUser) {
                res.status(200).json({
                    firstName: newUser.firstName,
                    lastName: newUser.lastName,
                    fullName: (newUser.firstName + " " + newUser.lastName),
                    email: newUser.email,
                    displayPicture: newUser.displayPicture,
                    uniqueId:newUser.uniqueId,
                    token: generateToken(newUser._id)
                })
            }
        }


    }catch(err) {

        res.status(500).json(err.message)
    }
}


const authUser = async (req,res) => {

    try {

        const userInfo = req.user;

        const user = await User.findOne({_id:userInfo.id})

        res.status(200).json({

            firstName: user.firstName,
                lastName: user.lastName,
                fullName: fullName,
                email: user.email,
                displayPicture: user.displayPicture,
                uniqueId:user.uniqueId
        })

    }catch(err) {
        res.status(500).json(err.message)
    }

}


module.exports = {userLogin,authUser}