import express from 'express'
import MovieRouter from './movie.js'
import UserRouter from './user.js'
import AdminRouter from './Admin.js'
const router = express.Router()


router.get('/' , (req,res) => {
    res.send("Hello")
})
router.use('/user', UserRouter)
router.use('/user', MovieRouter )
router.use('/admin', AdminRouter )

export default router


