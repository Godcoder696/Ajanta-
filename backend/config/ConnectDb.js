const mongoose = require('mongoose');

const ConnectDb=async ()=>{
    try {
        const connect= await mongoose.connect(process.env.URI);
        console.log("Successfully Connected to DB!");
    } catch (error) {
        console.log("Error Ocurred while Connecting to DB!", error);
    }
}

module.exports= ConnectDb