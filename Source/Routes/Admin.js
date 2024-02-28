import express from 'express'
import AdminController from '../Controller/AdminController.js'
import Authnticate from "../Auth/Authnticate.js";
const router = express.Router()


router.get('/dashboard' , Authnticate.authenticate,Authnticate.adminAuth, AdminController.getUser)
router.post('/sign-up' , AdminController.createUser)
router.post('/login' , AdminController.login)


export default router