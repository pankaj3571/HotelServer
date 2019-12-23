const mongoose=require('mongoose');
const Schema=mongoose.Schema;


const BookRoom=new Schema({
   
    room:String,
    availbility:Number

})


const roomBooking=mongoose.model('rooms',BookRoom)
module.exports=roomBooking