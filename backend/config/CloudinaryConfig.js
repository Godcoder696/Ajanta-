const v2= require('cloudinary');

const connectClodinary=()=>{
    const cloud_name= process.env.CLOUD_NAME;
    const api_key= process.env.API_KEY;
    const api_secret= process.env.API_SECRET;
    
    v2.config({
        cloud_name: cloud_name,
        api_key: api_key,
        api_secret: api_secret
    })
}

module.exports= connectClodinary