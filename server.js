import express from 'express'

const app = express()

app.use(express.json());

app.get('/users', (req, res) => {
    // code to handle GET request for /users
  res.status(200).send('GET request to the users')
  console.log('GET request to the server');
})

app.post('/users', (req,res) => {
    // code to handle POST request for /users
    res.status(201).send('POST request to the users')
  console.log('POST request to the server');
})

app.patch('/users/:id', (req,res) => {
    // code to handle PATCH request for /users
    res.status(200).send(`PATCH request to the users ${req.params.id}`);
  console.log(`PATCH request to the server ${req.params.id}`);
})
app.put('/users/:id', (req,res) => {
    // code to handle PATCH request for /users
    res.status(200).send(`PUT request to the users ${req.params.id}`);
  console.log(`PUT request to the server ${req.params.id}`);
})
app.delete('/users/:id', (req,res) => {
    // code to handle PATCH request for /users
    res.status(204).send(`DELETE request to the users ${req.params.id}`);
  console.log(`DELETE request to the server ${req.params.id}`);
})


const port = 3000
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})