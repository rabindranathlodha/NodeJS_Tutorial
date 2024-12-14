const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello from Home page')
})

app.get('/about', (req, res) => {
    res.send('Hello from about page')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})