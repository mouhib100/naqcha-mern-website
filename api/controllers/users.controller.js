//we will be able to delete update our users

const User = require("../models/User")
const bcrypt = require("bcrypt")
const Post = require("../models/Post")


//UPDATE

exports.updateuser =  async (req, res) => {
    //params in this example is our id we are taking a parameter
  
   
    console.log(req.params)
    const {id} = req.params
    delete req.body.password
     try {
        
         await User.findByIdAndUpdate(id,req.body);
         const user = await User.findById(id)

         return res.status(200).json({msg:'user updated successfully',user})

     } catch (error) {
         return res.status(500).send({error:error})
     }

}


//DELETE

exports.deleteuser = async (req, res) => {

      
    const {id} = req.params
    try {
        const deletedUser = await User.findByIdAndDelete(id);
        return res.status(200).send({msg:'user deleted successfully',deletedUser})
    } catch (error) {
        return res.status(500).send({error:error})
    }
    
}

//GET USER

exports.getuser = async (req,res)=>{
    
    try{
        const user = await User.findById(req.params.id);
        // when we get the data we don't suppose to see the password so we use
        const {password, ...others} = user._doc
        return res.status(200).json(others);
    }catch(error){
        return res.status(500).json(error)

    }


}

