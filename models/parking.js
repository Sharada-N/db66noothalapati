const mongoose = require("mongoose")
const parkingSchema = mongoose.Schema({
    Types: {type : String , maxLength : 20},
    ticket: Number,
    capacity: {type: Number , min : 5 , max : 10}
})
module.exports = mongoose.model("Costume", parkingSchema)