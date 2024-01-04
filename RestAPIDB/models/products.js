const mongoose = require("mongoose");
const {Schema} = mongoose;
const ProductSchema = Schema({
    name:{
        type: String,
        required: true
    },
    sku:{
        type: String,
        required: true
    },
    price:{
        type: String,
        required: true
    },
    category:{
        type: Schema.Types.ObjectId, 
        ref: 'Category',
        required: false
    },
    vendor:{
        type: Schema.Types.ObjectId,
        ref: 'Vendor',
        required: false
    }
});

module.exports = (connection)=>connection.model("Product", ProductSchema);