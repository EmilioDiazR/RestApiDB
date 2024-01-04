const  mongoose  = require("mongoose")
const {Schema} = mongoose
const OrderItemSchema = Schema({
    order:{
        type: Schema.Types.ObjectId,
        ref: 'Order',
        require: false
    },
    product:{
        type: Schema.Types.ObjectId,
        ref: 'Product',
        require: false
    },
    cuantity:{
        type: Number,
        require: true
    }
});

module.exports = (connection)=>connection.model("OrderItem", OrderItemSchema);