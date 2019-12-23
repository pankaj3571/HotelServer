const express=require('express');
const mongoose=require('mongoose')
const bodyParser=require('body-parser')
const cors=require('cors')
const app=express();
app.use(cors())
const routes = require('./routes/route')
mongoose.connect('mongodb+srv://paul0007:paul3571@hoteldb-5tutt.mongodb.net/test?retryWrites=true&w=majority',{useNewUrlParser: true,useCreateIndex: true,}).then(()=>{
    console.log('connected to database')
}).catch((err)=>{
    console.log('error',err)
})
//controller
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
//routes
app.use(routes);
app.listen(2700,(err)=>{
    if(!err){
        console.log('server running on port no 2700')
    }
    else{
        console.log('error',err)
    }
});