//when we are going to create a new user we use this operation
const router = require("express").Router();
// we are going to specify the model that we are going to use
const userSchema = require("../models/User")
const roleSchema = require("../models/role")

const bcrypt = require('bcrypt') // we use be crypt for user protection by crypting his password
const jwt = require('jsonwebtoken'); //token fo the session


//Register
//1-if we are going to create smth we use the post method
/*2-because we are going to create a user we are going to connect to our database and to create a new one and it's going to return 
for us a response, so all of this process take sometime, there is no way to know the duration, so this is basically an asyn function*/
//3-req : the data that we are going to send to the server
//4-res : response from the server it can be a user or warning etc..



//register
exports.register = async (req,res) =>{
    const {email,password,role} = req.body;
    try {
        const userExist = await userSchema.findOne({email:email});
        if(userExist){
            return res.status(400).send({msg:'User exist'});
        }
        const user = new userSchema(req.body);
        
        const passwordLength = req.body.password;
        if(passwordLength.length < 6){
            return res.status(400).send({msg:'Password require 6 characters as minimum'});
        }

        const passwordHashed = bcrypt.hashSync(password,10);
        user.password = passwordHashed;
        
        const userRole = await roleSchema.findOne({roleName:'user'});
        user.role = userRole._id
        
        const token = jwt.sign({id:user._id},process.env.passwordToken);
        await user.save();
        return res.status(200).send({msg:'User added successfully',token})
    } catch (error) {
        return res.status(500).send({error:error})
    }
}

//Login

exports.login = async (req, res) => {

    try {
        const user = await userSchema.findOne({ email: req.body.email }) //find this user by email because email is unique
        if (!user) return res.status(400).json("Wrong email!") //if there is no user inside our db, wrong credentials 

        //if there is a user we should validate our password, if the password entered is the same bcrypted password in the db he can login
        const validated = await bcrypt.compare(req.body.password, user.password)
        if (!validated) return res.status(400).json("wrong password!")

        
        //if everything is okay
        const token = jwt.sign({id:user._id},process.env.passwordToken);
        
        return res.status(200).send({msg:'Logged successfully',token,user})

    } catch (error) {
        return res.status(500).json(error);
    }

}



/*exports.register = async (req, res) => {

    try {
        //if we put req.body it's gonna take everything inside the request but we want only to take the user schema data

        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(req.body.password, salt)

        const newUser = new User({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            password: hashedPass,
        })

        

        const user = await newUser.save() //save the user
        const token = jwt.sign({ id: user._id }, process.env.passwordToken);
        

        return res.status(200).json({ msg: "user registered successfully", user, token }) //the user is been successfully created
    } catch (error) {
        return res.status(500).json(error);// something wrong with mongodb or express server
    }

}*/