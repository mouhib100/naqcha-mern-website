//we will be able to delete update our users

const router = require("express").Router();
const User = require("../models/User")
const bcrypt = require("bcrypt")
const Post = require("../models/Post")


//UPDATE

router.put("/:id", async (req, res) => {
    //params in this example is our id we are taking a parameter
    if (req.body.userId === req.params.id) {
        if (req.body.password) {
            const salt = await bcrypt.genSalt(10)
            req.body.password = await bcrypt.hash(req.body.password, salt)
        }
        try {
            const updateUser = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body,
            }, { new: true })
            res.status(200).json(updateUser)

        } catch (error) {
            res.status(500).json(error);// something wrong with mongodb or express server
        }
    } else {
        res.status(401).json("you can update only your account!");
    }

})


//DELETE

router.delete("/:id", async (req, res) => {

    if (req.body.userId === req.params.id) {
        try {
            const user = await User.findById(req.params.id)


            try {
                //delete the post of the user if the user account is deleted
                await Post.deleteMany({ email: user.email})
                await User.findByIdAndDelete(req.params.id)
                res.status(200).json("user has been deleted")

            } catch (error) {
                res.status(500).json(error);// something wrong with mongodb or express server
            }
        } catch (error) {
            res.status(404).json("user not found!");
        }
    } else {
        res.status(401).json("you can delete only your account!");
    }

})

//GET USER

router.get("/:id", async (req,res)=>{
    
    try{
        const user = await User.findById(req.params.id)

    }catch(error){
        res.status(500).json(error)

    }


})

module.exports = router;