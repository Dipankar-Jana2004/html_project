const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const path=require('path');
const userModel=require('./userModule');
const bodyParser = require('body-parser');

const app=express();
const PORT=5000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

mongoose.connect('mongodb://localhost:27017/userDetails');


app.use(express.static(path.join(__dirname)));
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'/index.html'))});

app.post('/submit',async(req,res)=>{
    try{
        const user =new userModel({
            firstName:req.body.firstName,
            lastName:req.body.lastName,
            email:req.body.email,
            mobileNumber:req.body.mobileNumber,
            course:req.body.course,
            Institution:req.body.Institution,
            place:req.body.place,
            address:req.body.address,
        });
        await user.save();
        res.send('User added successfully...');
    } catch(error){
        console.error('Error saving user:',error);
        res.status(500).send('Server error');
    }

});



app.listen(PORT, ()=>{console.log('Server is running on http://localhost:${PORT}'); 
});