const express = require('express')
const app = express()
const PORT = process.env.PORT || 3001
const bodyParser = require('body-parser')
require('dotenv').config()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/', require('./Routes/post'))

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})