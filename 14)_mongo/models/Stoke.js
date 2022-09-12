const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');
// const saltRounds = 10
// const jwt = require('jsonwebtoken')


const StokeSchema = mongoose.Schema({
    a: {
        type: String,
        maxlength: 50
    },
    b: {
        type: String,
        trim: true,
    }

})
const Stoke = mongoose.model('Stoke', StokeSchema);

module.exports= { Stoke };