const mongoose = require('mongoose');

const Items= mongoose.Schema(
    {
        image:{
            type: String,
            required: true
        },
        category:{
            type:String,
            required: true
        },
        featured:{
            type: Boolean,
            default: false
        },
        tab:{
            type: Number,
            required: false
        }   
    }
)

const ItemsData= mongoose.model("Item",Items);
module.exports= ItemsData