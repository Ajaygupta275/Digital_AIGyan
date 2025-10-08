import jwt from "jsonwebtoken"
import token from '../config/token.js'

const isAuth=async(req,res,next)=>{
    try{
        let{token}=req.cookies
        if(!token){
           return res.status(400).json({messageL:"user does't have token"})
        }

        let verifyToken=await jwt.verify(token,process.env.JWT_SECRET)
        if(!verifyToken){
           return res.status(400).json({messageL:"user does't have valid Token"})
        }
         req.userId=verifyToken.userId
         next()
    }catch(error){
             return res.status(500).json({message:`is Auth Error ${error}`})
    }
}

export default isAuth