const  mongoose  = require("mongoose")
const {Schema} = mongoose
const AddressSchema = Schema({
    firstline:{
        type: String,
        require: true
    },
    secondline:{
        type: String,
        require: true
    },
    zipcode:{
        type: String,
        require: true
    },
    city:{
        type: String,
        require: true
    },
    country:{
        type: String,
        require: true
    }
});

module.exports = (connection)=>connection.model("Address", AddressSchema);