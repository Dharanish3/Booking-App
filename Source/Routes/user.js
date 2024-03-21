import express from 'express'
import UserController from '../Controller/UserController.js'
import Authnticate from "../Auth/Authnticate.js";
const router = express.Router()


router.get('/home' , Authnticate.authenticate, UserController.getUser)
router.get('/profile/:_id' ,UserController. getUserById)
router.post('/sign-up' , UserController.createUser)
router.post('/login' , UserController.login)


export default router