const  mongoose  = require("mongoose")
const {Schema} = mongoose
const OrderSchema = Schema({
    orderDate:{
        type: String,
        require: true
    },
    deliveryDate:{
        type: String,
        require: true
    },
    total:{
        type: Number,
        require: true
    },
    discount:{
        type: Number,
        require: true
    },
    status:{
        type: String,
        require: true
    },
    customer:{
        type: Schema.Types.ObjectId,
        ref: 'Customer',
        
    }
});

module.exports = (connection)=>connection.model("Order", OrderSchema);