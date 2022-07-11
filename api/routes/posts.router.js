const express = require('express');

const postRouter = express.Router()

const {addpost,getpost,deletepost,updatepost} = require('../controllers/posts.controller')

postRouter.post('/',addpost)
postRouter.get('/:id',getpost)
postRouter.put('/update/:id',updatepost)
postRouter.delete('/delete/:id',deletepost)



module.exports = postRouter;