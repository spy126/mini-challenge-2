const User = require('../models/User')

exports.createUser = (req, res) => {
    res.send('create new user')   
}

exports.getAllUsers = (req, res) => {
    res.send('all users')
}

exports.removeUser = (req, res) => {
    res.send('remove user')
}
