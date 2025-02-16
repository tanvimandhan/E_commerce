import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import userRouter from './Routes/userRoutes.js'
import productRouter from './Routes/productRoutes.js'
import cartRouter from './Routes/cartRoutes.js'
import orderRouter from './Routes/orderRoutes.js'

//APP CONFIG
const app=express()
const port=process.env.PORT|| 4000
connectDB()
connectCloudinary()

//MIDDLEWARES
app.use(express.json())
app.use(cors())

//API ENDPOINTS
app.use('/api/user',userRouter)
app.use('/api/product',productRouter)
app.use('/api/cart',cartRouter)
app.use('/api/order',orderRouter)

app.get('/',(req,res)=>{
    res.send('API WORKING')
})
app.listen(port,()=>console.log(`server started on http://localhost:${port}`))