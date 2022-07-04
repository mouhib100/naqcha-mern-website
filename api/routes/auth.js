//when we are going to create a new user we use this operation
const router = require("express").Router();
// we are going to specify the model that we are going to use
const User = require("../models/User")
const bcrypt = require('bcrypt') // we use be crypt for user protection by crypting his password


//Register
//1-if we are going to create smth we use the post method
/*2-because we are going to create a user we are going to connect to our database and to create a new one and it's going to return 
for us a response, so all of this process take sometime, there is no way to know the duration, so this is basically an asyn function*/
//3-req : the data that we are going to send to the server
//4-res : response from the server it can be a user or warning etc..

router.post("/register",async(req,res)=>{

    try {
        //if we put req.body it's gonna take everything inside the request but we want only to take the user schema data

        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(req.body.password, salt)

        const newUser = new User({
            firstname : req.body.firstname,
            lastname : req.body.lastname,
            email : req.body.email,
            password :  hashedPass,
        }) 
        const user = await newUser.save() //save the user
        res.status(200).json(user) //the user is been successfully created

    } catch (error) {
        res.status(500).json(error);// something wrong with mongodb or express server
    }

})


//Login

router.post("/login", async(req,res)=>{

    try {
        const user = await User.findOne({email : req.body.email}) //find this user by email because email is unique
        !user && res.status(400).json("Wrong email!") //if there is no user inside our db, wrong credentials 

        //if there is a user we should validate our password, if the password entered is the same bcrypted password in the db he can login
        const validated = await bcrypt.compare(req.body.password, user.password)
        !validated && res.status(400).json("wrong password!")

        //i don't want to send the password to user how we prevent that
        const {password, ...others} = user._doc;

        //if everything is okay
        res.status(200).json(others)
    } catch (error) {
        res.status(500).json(error);
    }
})

module.exports = router;