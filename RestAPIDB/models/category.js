const  mongoose  = require("mongoose")
const {Schema} = mongoose
const CategorySchema = Schema({
    name:{
        type: String,
        require: true
    },
    description:{
        type: String,
        require: true
    },
    parent:{
        type: Schema.Types.ObjectId,
        ref: 'Category'

    }
});

module.exports = (connection)=>connection.model("Category", CategorySchema);