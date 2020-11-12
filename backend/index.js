import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import mongoose from 'mongoose'

// Routes
import postRoutes from './routes/posts.js'

const app = express();

app.use(bodyParser.json({ limit:"30mb",extended:true }))
app.use(bodyParser.urlencoded({ limit:"30mb",extended:true }))
app.use(cors())



app.use('/posts',postRoutes)

// MongoDB 

const CONNECTION_URL = 'mongodb+srv://dipzzz234:br9PXPnWbrFLFiIP@cluster0.qdre7.mongodb.net/<dbname>?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL,{ useNewUrlParser:true, useUnifiedTopology:true })
    .then(()=>app.listen(PORT,()=>console.log(`server running on port ${PORT}`)))
    .catch((err)=>console.log(err))

mongoose.set('useFindAndModify',false)