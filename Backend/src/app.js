const express = require('express')
const app = express()
require('dotenv').config({ path: '' })
const cors = require('cors')
const bodyParser = require('body-parser')
const connectDB = require('./db/db')
const mainRoutes = require('./routes/index')
const { MESSAGE_CONSTANTS } = require('./constants/messageConstant')

// db connect
connectDB().then(() => {
  console.log('Data base connect successfully')
}).catch((err) => {
  console.error('Error to connect with database')
})

// middleware config
app.use(express.json());
app.use(express.raw({ type: 'application/json' }))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

//cors
app.use(cors("*"))

// api routes
app.use('/api', mainRoutes)

// error handling
app.use((err, req, res, next) => {
  console.log(MESSAGE_CONSTANTS.SOMETHING_WRONG)
})

// port config
const port = process.env.PORT || 8084
app.listen(port, () => {
  console.log('Server is running in http://localhost:', port)
})