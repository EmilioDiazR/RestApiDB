const  mongoose  = require("mongoose")
const {Schema} = mongoose
const CustomerSchema = Schema({
    name:{
        first:{type:String, require: true},
        middle: {type:String, require: true},
        last: String,
    },
    lastname:{
        lastname1: {type:String, require: true},
        lastname2: {type:String, require: true},

    },
    phone:{
        type: Number,
        require: true
    },
    email:{
        type: String,
        lowercase: true, 
        trim: true, 
        index: true, 
        required:true,
        validation: true
    },
    age:{
        type: Number,
        require: true
    },
    active:{
        type: Boolean,
        require: true
    },
    password:{
        type: String,
        require: true
    },
    address:{
        type: Schema.Types.ObjectId,
        ref: 'Address',
        required:false
    }
});

module.exports = (connection)=>connection.model("Customer", CustomerSchema);