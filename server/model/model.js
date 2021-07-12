const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    fever: {
        type: String,
        required: true
    },
    admit: String,
    gender: String,
    status: String
})

const Userdb = mongoose.model('patient', schema);

module.exports = Userdb;