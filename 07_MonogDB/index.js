const express = require('express')
const users = require('./MOCK_DATA.json')
const userRouter  = require('./routes/userroutes')

const { connectDB } = require('./connections.js')

const app = express()
const port = 3000

//connection
connectDB("mongodb://127.0.0.1:27017/youtube-app-1").then(() => console.log("MonogoDB COnnected"))

//MiddleWare
app.use(express.urlencoded({extended: false}))

app.use('/users', userRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})