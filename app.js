//import package
const express = require('express'); 
const mongoose = require('mongoose');

const app = express();
const bodyParser = require('body-parser');
require('dotenv/config');
//Middlewares
//a function that executes when routes are being hit
// app.use('/posts', ()=>{
//     console.log('This is a middleware running');
// });
app.use(bodyParser.json()); 

//Import Routes
const postsRoute = require('./routes/posts'); 

app.use('/posts', postsRoute); 
//app.use('/user', userRoute);

//you have the ability to create routes
//ROUTES
app.get('/', (req, res)=>{
    res.send('We are on home');
});


//connect to DB
mongoose.connect(process.env.DB_CONNECTION, 
{ useNewUrlParser: true }, ()=>
console.log('connected to DB'));
//we can add things with post, or delete with delete, add logic, patch updates
//how do we start listening to the server?
app.listen(8000);