const userSchema = require('../models/User');
const roleSchema = require('../models/role');
const postSchema = require('../models/Post');
const bcrypt = require('bcryptjs');


const init = async()=>{
    try {
       
            [{roleName:"admin"},{roleName:"moderator"},{roleName:"user"}].map(async(el)=>{
                const roleExist = await roleSchema.findOne(el);
                if(!roleExist){
                    await roleSchema.insertMany([el]);
                    console.log(`${el.roleName} added`)
                }
            }) 

            /*const postsExist = await postSchema.find();
            if(postsExist.length == 0){
                await postSchema.insertMany(data)
                console.log('posts added successfully');
            }*/

            const roleAdmin = await roleSchema.findOne({roleName:"admin"});
            const isAdmin = await userSchema.findOne({role:roleAdmin._id })
            if(!isAdmin){
                const admin = new userSchema({
                    firstname:'mouhib',
                    lastname:'touaiti',
                    email:'mouhib.touaiti@esprit.tn',
                    password:bcrypt.hashSync('52525875',10),
                    role:roleAdmin._id,
                })
                await admin.save();
                return console.log('admin created')
            }
        
    } catch (error) {
        return console.error(error);
    }
}

module.exports = init