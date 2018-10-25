const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

/**
 * Config routes.
 */
app.use(require('./routes'))

/**
 * Listen.
 */
app.listen(3003, () => {
    console.log(`Listening on port 3003...`)
})