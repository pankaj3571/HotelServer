const UpdateRoomDetail=require('../models/Booking.model')
const getRoomdetails=require('../models/GetRooms.model')
module.exports={
    updateData:async(req,res)=>{
        try{
console.log(req.body.CheckIn,"hjvcghsdcgdshcdsc")
            var update_data={$set:
                {
            FirstName :req.body.FirstName,
            LastName:req.body.LastName,
            Email:req.body.Email,
            Children:req.body.Children,
            CheckIn:req.body.CheckIn,
            CheckOut:req.body.CheckOut,
            MobileNo:req.body.MobileNo,
            Adults:req.body.Adults,

                }}
        console.log("body",req.body._id)
        await UpdateRoomDetail.updateOne({_id:req.body._id},update_data,{new:true,upsert: true, setDefaultsOnInsert: true}).then(result=>{
            
            if(!result){
                res.json({status:"false",data:result})
            }
            else{
                console.log(result,"result")
                res.json({status:"success",data:result})
            }
        })
           
      
    }catch(err){
console.log(err,"error")
    }
     
    },
   
    ConfirmBooking:async(req,res)=>{
        try{
console.log(req.body.Status,"hjvcghsdcgdshcdsc")
            var update_data={$set:
                {
                    Status:req.body.Status
                }}
        console.log("body",req.body._id)
        await UpdateRoomDetail.updateOne({_id:req.body._id},update_data,{new:true,upsert: true, setDefaultsOnInsert: true}).then(result=>{
            
            if(!result){
                res.json({status:"false",data:result})
            }
            else{
                
                res.json({status:"success",data:result})
            }
        })
           
      
    }catch(err){
console.log(err,"error")
    }
     
    },
    cancleBooking:async(req,res)=>{
        try{
console.log(req.body.Status,"hjvcghsdcgdshcdsc")
            var update_data={$set:
                {
                    Status:req.body.Status
                }}
        console.log("body",req.body._id)
        await UpdateRoomDetail.updateOne({_id:req.body._id},update_data,{new:true,upsert: true, setDefaultsOnInsert: true}).then(result=>{
            
            if(!result){
                res.json({status:"false",data:result})
            }
            else{
                
                res.json({status:"success",data:result})
            }
        })
           
      
    }catch(err){
console.log(err,"error")
    }
     
    },
    updateRoom:async(req,res)=>{
        try{
console.log(req.body.availbility,"hjvcghsdcgdshcdsc")
            var update_data={$set:
                {
                    availbility:req.body.availbility
                }}
        
        await getRoomdetails.updateOne({_id:req.body.roomId},update_data,{new:true,upsert: true, setDefaultsOnInsert: true}).then(result=>{
            
            if(!result){
                res.json({status:"false",data:result})
            }
            else{
                
                res.json({status:"success",data:result})
            }
        })
           
      
    }catch(err){
console.log(err,"error")
    }
     
    },
}
