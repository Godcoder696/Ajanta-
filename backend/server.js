const express= require('express');
const dotenv= require('dotenv')
const cors = require('cors');
const ConnectDb = require('./config/ConnectDb');
const mongoose = require('mongoose');
const bodyParser= require('body-parser');
const Items = require('./models/Items');
const v2= require('cloudinary');
const connectClodinary= require('./config/CloudinaryConfig');

dotenv.config();

const app= express();

app.use(cors());
app.use(bodyParser.json(
        {
            limit:"50mb"
        }
    )
)
app.use(bodyParser.urlencoded(
        {
            limit:"50mb",
            extended: true
        }
    )
)
app.use(express.json());

ConnectDb()

const port= process.env.PORT || 6000

app.listen(port,()=>{
    console.log("Listening !");
})

app.get('/all',async (req,res)=>{
    let items= await Items.find({});
    console.log(items);
    res.send(items);
});

app.post('/all',async (req,res)=>{

    try {
        const imageData= req.body.image

        connectClodinary();

        const uploadRes=await v2.uploader.upload(
            imageData,
            { 
                public_id: "menImage" 
            }
        );

        const {url}= uploadRes;

        const Item= await Items.create({
            image: url,
            category: req.body.category,
            featured: req.body.featured
        })

        res.json({"msg":"Document inserted Successfuly!","Item":Item});

    } catch (error) {

        console.log(error);
        res.json({"error": error});
    }
})