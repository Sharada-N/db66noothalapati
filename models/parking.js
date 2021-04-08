const mongoose = require("mongoose")
const parkingSchema = mongoose.Schema({
    Types: String,
    ticket: Number,
    capacity: Number
})
module.exports = mongoose.model("Costume", parkingSchema)