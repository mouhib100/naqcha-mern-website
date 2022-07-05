const express = require('express');

const authRouter = express.Router()

const {login,register} = require('../controllers/auth.controller')


authRouter.post('/register',register)
authRouter.post('/login',login)


module.exports = authRouter;