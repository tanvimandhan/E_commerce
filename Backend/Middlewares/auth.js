import jwt from "jsonwebtoken"

const authUser=async(req,res,next)=>{
   const {token}=req.headers;
   if(!token){
    return res.json({success:false,message:"not authorised login again"})
   }
   try{
     const token_decode=jwt.verify(token,process.env.JWT_SECRET)
     //console.log(token);
     //console.log(0);
     //console.log(token_decode);
     req.body.userId=token_decode.id
    //  console.log(1);
    //  console.log(token_decode.id)
     next()

   }catch(error){
     console.log(error);
     res.json({success:false,message:error.message})
   }
}
export default authUser