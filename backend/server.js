const express= require('express');
const dotenv= require('dotenv')
const cors = require('cors');
const ConnectDb = require('./config/ConnectDb');
const mongoose = require('mongoose');
const Items = require('./models/Items');

dotenv.config();

const app= express();

app.use(cors());

app.use(express.json());

ConnectDb()

const port= process.env.PORT || 6000

app.listen(port,()=>{
    console.log("Listening !");
})

app.get('/all',async (req,res)=>{
    let items= await Items.find({});

    res.send(items);
});

app.post('/all',async(req,res)=>{
    try {
        const Item= await Items.create({
            image:"Pic URI",
            category:"male",
            featured: true
        })

        res.json({"msg":"Document inserted Successfuly!","Item":Item});

    } catch (error) {

        console.log(error);
        res.json({"error": error});
    }
})