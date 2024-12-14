const express = require('express')
const users = require('./MOCK_DATA.json')
const fs = require('fs')

const app = express()
const port = 3000

//MiddleWare
app.use(express.urlencoded({extended: false}))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/users', (req, res) => {
    const html = `
    <ul>
        ${users.map((users) => `<li>${users.first_name}</li>`).join("")}
    </ul>
    `;
    res.send(html);
})


app.get('/api/users', (req, res) => {
    res.json(users);
})

app.route('/api/users/:id')
.get((req, res) => {
  const id = Number(req.params.id);
  const user = users.find((users) => users.id == id);
  return res.json(user);
})
.patch((req, res) => {
  //TODO: Edit thhe user with id
  return res.json({status: 'pending'})
})
.delete((req, res) => {
  //TODO: Delete the user with id
  return res.json({status: 'pending'})
})


app.post('/api/users', (req, res) => {
  const body = req.body;
  users.push({...body, id: users.length+1})
  fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data) => {
    return res.json({status: 'Sucess', id: users.length})
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})