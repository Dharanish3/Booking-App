import express from 'express'
import MovieRouter from './movie.js'
import UserRouter from './user.js'
import AdminRouter from './Admin.js'
import BookingRouter from './booking.js'
import TheaterRouter from './theater.js'
import ShowRouter from './showTime.js'
const router = express.Router()


router.get('/' , (req,res) => {
    res.send("Hello")
})
router.use('/user', UserRouter)
router.use('/user', MovieRouter )
router.use('/admin', AdminRouter )
router.use('/booking', BookingRouter )
router.use('/theater', TheaterRouter )
router.use('/show', ShowRouter )

export default router


