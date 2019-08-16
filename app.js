require('dotenv').config() // Initialize dotenv config

const express = require('express') // Import express
const app = express() // Create method
const bodyParser = require('body-parser') // Import body-parses
const port = process.env.SERVER_PORT || 5000 // Default PORT
const cors = require('cors')
const xss = require('x-xss-protection')

// const userRoute = require('./src/routes/routes')
const bookRoute = require('./src/routes/book')
const userRoute = require('./src/routes/user')
// const historyRoute = require('./src/routes/history')
const categoryRoute = require('./src/routes/category')
app.use(bodyParser.json()) // Body parse json
app.use(bodyParser.urlencoded({ extended: false })) // body type

const whitelist = "127.0.0.1,http://192.168.6.122"
const corsOption = (req,callback) =>{
  if(whitelist.split(',').indexOf(req.hostname) !== -1){
    console.log("Success")
    return callback(null,{
      origin:true
    })
  }else{
    console.log("Failed")
    return callback('Not allowed by CORS',{
      origin:false,
    })
  }
}
app.use(cors())
app.options('*',cors(corsOption))
app.use(xss())
app.use(express.static(__dirname + '/src/uploads/images/'))

app.listen(port, () => {
  console.log(`\n App listening on port ${port} \n`)
}) // Create listening app


// app.use('/', userRoute)
app.use('/book', bookRoute)
app.use('/user', userRoute)
app.use('/category', categoryRoute)
// app.use('/history', historyRoute)
