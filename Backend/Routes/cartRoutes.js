import express from "express"
import { addtoCart,getUserCart,updateCart } from "../Controllers/cartControllers.js"
import authUser from "../Middlewares/auth.js"

const cartRouter=express.Router()

cartRouter.post('/get',authUser,getUserCart)
cartRouter.post('/add',authUser,addtoCart)
cartRouter.post('/update',authUser,updateCart)

export default cartRouter