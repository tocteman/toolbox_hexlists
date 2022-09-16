const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/files/data', (req, res) => {
  res.send('all files')
})


app.listen(3000, () => {
  console.log(`Example app listening on port ${3000}`)
})

