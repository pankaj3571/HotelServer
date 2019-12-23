const signup=require('../controller/signup');
const login=require('../controller/login');
const bookRoom=require('../controller/BookRoom');
const geBookingDetails=require('../controller/getBookingDetails');
const roomDetails=require('../controller/UpdateRommDetails')
const express = require('express');
const routes = express.Router();

routes.get('/getBookingDetails',geBookingDetails.getBookingDetails);
routes.get('/getRoomAvailbilty',geBookingDetails.GetRoomAvailbilty);
routes.post('/signup',signup.Signup);
routes.post('/login',login.Login);
routes.post('/updateDetails',roomDetails.updateData);
routes.post('/updateRoom',roomDetails.updateRoom);
routes.post('/confirmBooking',roomDetails.ConfirmBooking);
routes.post('/cancleBooking',roomDetails.cancleBooking);

routes.post('/bookRoom',bookRoom.RoomBooking)
module.exports=routes;



