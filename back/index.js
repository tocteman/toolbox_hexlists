const express = require('express')
const morgan = require('morgan')
const { filesList } = require('./dataflows/listing')
const { allFilesContent } = require('./dataflows/content')

const app = express()
app.use(morgan('tiny'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/files/list', async (req, res) => {
  const list = await filesList()
  res.send( list )
})

app.get('/files/data', async (req, res) => {
  const data = await allFilesContent()
  res.send(data)
})

app.listen(3000, () => {
  console.log(`Example app listening on port ${3000}`)
})

