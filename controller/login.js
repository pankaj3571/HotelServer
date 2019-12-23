const userModel=require('../models/signup.model')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const JWT_KEY='UKC@123&*$KOTKAPURA@STAPAL0001'
module.exports={
    Login:async(req,res)=>{
        //const { email, password } = req.body;
       const user= await userModel.findOne({email:req.body.email})
       console.log(user,"user====")
        if(!user)
            res.send('email not found')
        
        const pwd=await  bcrypt.compare(req.body.password,user.password,)
        if(!pwd)
            res.send("invalid password")
        const token=jwt.sign({id:user._id},JWT_KEY,{ expiresIn: '1h' })
       // res.header('auth-token',token).send(token)
       res.json([{status:"success", message: "user found!!!", data:{details: user, token:token}}]);
    }
}



