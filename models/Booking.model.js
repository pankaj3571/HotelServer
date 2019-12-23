const mongoose=require('mongoose');
const Schema=mongoose.Schema;


const BookRoom=new Schema({
   
    FirstName:String,
    LastName:String,
    Email:String,
    Adults:Number,
    Children:Number,
    CheckIn:String,
    CheckOut:String,
    MobileNo:Number,
    Status:String,
    RoomId:String,
    RoomType:String
})


const roomBooking=mongoose.model('bookRoom',BookRoom)
module.exports=roomBooking