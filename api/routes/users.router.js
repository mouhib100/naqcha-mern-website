const express = require('express');

const userRouter = express.Router()

const {getuser,deleteuser,updateuser} = require('../controllers/users.controller')


userRouter.get('/:id',getuser)
userRouter.put('/update/:id',updateuser)
userRouter.delete('/delete/:id',deleteuser)



module.exports = userRouter;