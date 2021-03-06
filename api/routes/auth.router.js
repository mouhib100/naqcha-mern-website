const express = require('express');

const authRouter = express.Router()

const { login, register } = require('../controllers/auth.controller')
const { isAuth } = require('../middlewares/isAuth');
const { validation, loginValidation, registerValidation } = require('../middlewares/validator')


authRouter.get('/currentUser', isAuth, async (req, res) => {
    try {
        res.send({ user: req.user });
    } catch (err) {
        res.send(err.message);
    }
})
authRouter.post('/register', register, validation, registerValidation)
authRouter.post('/login', login, validation, loginValidation)


module.exports = authRouter;