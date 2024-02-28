import express from 'express'
import dotenv from 'dotenv'
import Routes from './Source/Routes/web.js';
dotenv.config()
import cors from 'cors'

const port = process.env.PORT || 8000;
const app = express()
app.use(express.json())
app.use(cors());
app.use( Routes)    
app.use('/images', express.static('images'));



app.listen(port, () => {
    console.log(`App Listening on ${port}`)
})