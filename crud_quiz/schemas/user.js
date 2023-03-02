const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
    name: {
        type:String,
        require:true,
    },
    ID: {
        type:String,
        require:true,
    },
    pw: {
        type:String,
        require:true,
    }
}, { versionKey : false});

module.exports = mongoose.model("users", usersSchema)