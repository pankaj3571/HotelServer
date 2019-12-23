const signUpDetails=require('../models/signup.model')

module.exports={
    Signup:(req,res)=>{
        console.log(req.body,"body===")
        
        let login=new signUpDetails({
       email:req.body.email,
       password:req.body.password,
       mobileno:req.body.mobileno,
       user:req.body.user
        });
        signUpDetails.findOne( {email:req.body.email}).select('email').lean().then(data1=>{
            if(data1){
                console.log("data already there",data1)
                res.json({message:"email already exists "})
            }
            else{
                login.save().then(result=>{
                    console.log(result,"result")
                    res.json({'success':true,result:result})
                }).catch(err=>{
                    console.log(err,"result")
        
                    res.json({'success':false,result:err})
                })
            }
        })
       
    }
}