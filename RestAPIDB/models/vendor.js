const  mongoose  = require("mongoose")
const {Schema} = mongoose
const VendorSchema = Schema({
    name:{
        first:{type:String, require: true},
        middle: {type:String, require: true},
        last: String,
    },
    email:{
        type: String,
        lowercase: true, 
        trim: true, 
        index: true, 
        required:true,
        validation: true
    },
    phone:{
        type: Number,
        require: true
    },
    rfc:{
        type: String,
        require: true
    },
    address:{
        type: Schema.Types.ObjectId,
        ref: 'Address',
        require: true,
    }
});

module.exports = (connection)=>connection.model("Vendor", VendorSchema);