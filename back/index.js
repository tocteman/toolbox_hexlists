const express = require('express')
const fetch = require('node-fetch')


const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/files/data', async (req, res) => {
  const file = await getSingleFileData()
  res.send({ file })
})

async function getSingleFileData ()  {
  const init = {
    method: "GET",
    headers: {
      Authorization: 'Bearer aSuperSecretKey',
      'content-type': 'text/csv;charset=UTF-8',
    }
  }
  const url = 'https://echo-serv.tbxnet.com/v1/secret/file/test2.csv'
  const res = await fetch (url, init)
  const text = await res.text()
  return text.split("\n").slice(1)
}


app.listen(3000, () => {
  console.log(`Example app listening on port ${3000}`)
})

