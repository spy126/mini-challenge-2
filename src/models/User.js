const {Schema} = require('mongoose')
const connection = require('../database')

const userSchema = new Schema({
    email: {
        type: String,
        require: true,
        trim: true
    },

    password: {
        type: String,
        require: true,
    },

    created: {
        type: Date,
        default: Date.now
    }
})

module.exports = connection.model('User', userSchema)
