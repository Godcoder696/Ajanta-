const express = require('express');
const dotenv = require('dotenv')
const cors = require('cors');
const ConnectDb = require('./config/ConnectDb');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Items = require('./models/Items');
const v2 = require('cloudinary');
const connectClodinary = require('./config/CloudinaryConfig');
const path = require('path');

dotenv.config();

const app = express();

connectClodinary();

app.use(cors());
app.use(bodyParser.json(
    {
        limit: "20mb"
    }
)
)
app.use(bodyParser.urlencoded(
    {
        limit: "25mb",
        extended: true
    }
)
)
app.use(express.json());

ConnectDb()

const port = process.env.PORT || 6000

app.listen(port, () => {
    console.log("Listening !");
})

// ---------------------------- GET ALL ITEMS -------------------------------

app.get('/all', async (req, res) => {
    let items = await Items.find({});
    console.log(items);
    res.send(items);
});

// ---------------------------- CREATE ITEM -------------------------------

app.post('/all', async (req, res) => {

    try {
        const imageData = req.body.image

        const uploadRes = await v2.uploader.upload(
            imageData,
            {
                public_id: "menImage"
            }
        );

        console.log(uploadRes);

        const { url, public_id } = uploadRes;

        const Item = await Items.create({
            image: url,
            category: req.body.category,
            featured: req.body.featured,
            tab: req.body.tab || null,
            assetId: public_id
        })

        res.json({ "msg": "Document inserted Successfuly!", "Item": Item });

    } catch (error) {

        console.log(error);
        res.json({ "error": error });
    }
})

// ---------------------------- UPDATE CARD -------------------------------

app.post("/update",async (req,res)=>{
    // console.log(req.query.id);
    const id= req.body.id;

    if(!id){
        res.status(500);
        res.json({"msg":"Card Id is mandatory"});
    }

    const imageData= req.body.image;
    const category= req.body.category;
    const featured= req.body.featured;
    const tab= req.body.tab;
    const assetId= req.body.assetId;
    
    try {
        let uploadRes={
            url: imageData,
            public_id: assetId
        };
        // delete image & upload new image
        if(!imageData.includes("http")){

            await v2.api.delete_resources([assetId], 
                { type: 'upload', resource_type: 'image' })
            .then(console.log);

            uploadRes = await v2.uploader.upload(
                imageData,
                {
                    public_id: "menImage"
                }
            ); 
        }

        // get new img details
        const { url, public_id } = uploadRes;
        console.log(uploadRes);

        // store new image and details 
        const response= await Items.findOneAndUpdate(
        {
            _id: id
        }
        ,{
            image: url,
            category: category,
            featured: featured,
            tab: tab,
            assetId: public_id
        })

        res.status(200);
        res.json({"msg":"Card updated successfully!"});

    } catch (error) {
        res.status(500);
        res.json({"msg":"Error Occurred"});
    }
})


// ---------------------------- DELETE CARD -------------------------------

app.post("/delete",async (req,res)=>{

    console.log(req.body);
    const {id, assetId}= req.body;
    console.log(id, assetId);
    if(!id){
        res.status(500);
        res.json({"msg":"Card Id is mandatory"});
    }

    try {
        const result= await v2.api.delete_resources([assetId], 
          { type: 'upload', resource_type: 'image' })
        .then(console.log);
        const response = await Items.deleteOne({_id:id});

        res.status(200);
        res.json({"msg":"Card deleted successfully!"});

    } catch (error) {
        console.log(error);
        res.status(500);
        res.json({"msg":"Error Occurred"});

    }

})


// ---------------------------- DEPLOYMENT -------------------------------

// const __dirname1 = path.resolve();

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname1, "/frontend/build")));

//   app.get("*", (req, res) =>
//     res.sendFile(path.resolve(__dirname1, "frontend", "build", "index.html"))
//   );
// } else {
//   app.get("/", (req, res) => {
//     res.send("API is running..");
//   });
// }


// ---------------------------- DEPLOYMENT -------------------------------
