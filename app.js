const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.json({
    message: 'Hola Mundo',
  })
});

app.get('/one', (req, res) => {
  res.json({
    message: 'One',
  })
});

app.get('/two', (req, res) => {
  res.json({
    message: 'Two',
  })
});

app.get('/three', (req, res) => {
  res.json({
    message: 'Three',
  })
});

app.get('/four', (req, res) => {
  res.json({
    message: 'Four',
  })
});

app.listen(port, () => {
  console.log(`App is listening on port ${port}`)
})
