import express from 'express'
import {placeOrder,placeOrderStripe,placeOrdersRazorpay,allOrders,userOrders,updateStatus,verifyStripe, verifyRazorpay} from '../Controllers/orderControllers.js'
import adminAuth from '../Middlewares/adminAuth.js'
import authUser from '../Middlewares/auth.js'

const orderRouter=express.Router()

//admin features
orderRouter.post('/list',adminAuth,allOrders)
orderRouter.post('/status',adminAuth,updateStatus)

//payment features
orderRouter.post('/place',authUser,placeOrder)
orderRouter.post('/stripe',authUser,placeOrderStripe)
orderRouter.post('/razorpay',authUser,placeOrdersRazorpay)

//user features
orderRouter.post('/userorders',authUser,userOrders)

//verify payment
orderRouter.post('/verifyStripe',authUser,verifyStripe)
orderRouter.post('/verifyRazorpay',authUser,verifyRazorpay)

export default orderRouter