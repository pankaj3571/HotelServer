const bookingDetails=require('../models/Booking.model')
const getRoom=require('../models/GetRooms.model')
module.exports={
    getBookingDetails:(req,res)=>{
        
     let data= bookingDetails.find().sort({$natural:-1}).limit(1);
     data.then(data1=>{
        res.json({'success':true,result:data1})
         console.log(data1)
     }).catch(err=>{
            res.json({'success':false,result:err})
        })
    
     
        // reg.save().then(result=>{
        //     res.json({'success':true,result:result})
        // }).catch(err=>{
        //     res.json({'success':false,result:err})
        // })
    },
    GetRoomAvailbilty:(req,res)=>{
        
        let data= getRoom.find();
        // console.log(data,"data")
        data.then(data1=>{
           res.json({'success':true,result:data1})
            console.log(data1)
        }).catch(err=>{
               res.json({'success':false,result:err})
           })
       
        
           // reg.save().then(result=>{
           //     res.json({'success':true,result:result})
           // }).catch(err=>{
           //     res.json({'success':false,result:err})
           // })
       }
}