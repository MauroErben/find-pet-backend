const express = require('express')
const app = express()
const PORT = process.env.PORT || 3001
const bodyParser = require('body-parser')
require('dotenv').config()
const cors = require('cors')

app.use(express.static('public'))

app.use(cors())

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/', require('./Routes/post'))

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})