const bookRoomDetails=require('../models/Booking.model')

module.exports={
    RoomBooking:(req,res)=>{
        console.log(req.body,"body===")
        
        let BookRoom=new bookRoomDetails({
            FirstName:req.body.FirstName,
            LastName:req.body.LastName,
            Email:req.body.Email,
            Adults:req.body.Adults,
            Children:req.body.Children,
            CheckIn:req.body.CheckIn,
            CheckOut:req.body.CheckOut,
            MobileNo:req.body.MobileNo,
            Status:req.body.Status,
            RoomId:req.body.RoomId,
            RoomType:req.body.RoomType
        });
        BookRoom.save().then(result=>{
            console.log(result,"result")
            res.json({'success':true,result:result})
        }).catch(err=>{
            console.log(err,"result")

            res.json({'success':false,result:err})
        })
       
    }
}