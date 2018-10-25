const express = require('express')
const router = express.Router()

const userCtrl = require('./controllers/user')
router.get('/users', userCtrl.getAllUsers)


/**
 * Exports.
 */
module.exports = router
