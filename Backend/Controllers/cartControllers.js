import userModel from "../Models/userModels.js"


//add products to user cart
const addtoCart=async(req,res)=>{
   try{
      const {userId,itemId,Size}=req.body
      const userData=await userModel.findById(userId)

      let cartdata=await userData.cartdata;
      
      //
      console.log(cartdata);
      console.log(cartdata[itemId])
      if(cartdata[itemId]){
        if(cartdata[itemId][Size]){
            cartdata[itemId][Size]+=1;
        }else{
            cartdata[itemId][Size]=1;
        }
      }else{
        cartdata[itemId]={};
        cartdata[itemId][Size]=1;
      }
      await userModel.findByIdAndUpdate(userId,{cartdata});
      res.json({success:true,message:"added to cart"})
   }catch(error){
     console.log(error);
     res.json({success:false,message:error.message})
   }
}

//update user cart
const updateCart=async(req,res)=>{
   try{
     const {userId,itemId,Size,quantity}=req.body
     const userData=await userModel.findById(userId)
     const cartData=await userData.cartdata;

     cartData[itemId][Size]=quantity
     await userModel.findByIdAndUpdate(userId,{cartData});
     res.json({success:true,message:"cart updated"})

   }catch(error){
    console.log(error);
    res.json({success:false,message:error.message})
   }
}

//get user cart data
const getUserCart=async(req,res)=>{
   try{
     const {userId}=req.body;
     const userData=await userModel.findById(userId);
     let cartData=await userData.cartdata;
     res.json({success:true,cartData})
   }catch(error){
    console.log(error);
    res.json({success:false,message:error.message})
   }
}

export {addtoCart,updateCart,getUserCart}