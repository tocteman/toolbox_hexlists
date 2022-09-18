const fetch = require('node-fetch')

const ECHO_KEY = 'aSuperSecretKey'
const ECHO_URL = 'https://echo-serv.tbxnet.com/v1/secret'

const getJson = async ({suffix}) => {
  const url = `${ECHO_URL}/${suffix}`
  return fetch (url, initJsonGet)
    .then(x => x.json())
    .catch(err => {console.log(err); return err})
}

const getCsv = async ({suffix}) => {
  const url = `${ECHO_URL}/${suffix}`
  return fetch(url, initCsvGet)
    .then(x => x.text())
    .catch(err => {console.log(err); return err})
}

const initJsonGet = {
  method: "GET",
  headers: {
    "authorization": `Bearer ${ECHO_KEY}`,
    'Content-Type': 'application/json',
  }
}
const initCsvGet = {
  method: "GET",
  headers: {
    "Authorization": `Bearer ${ECHO_KEY}`,
    'Content-Type': 'text/csv;charset=UTF-8',
  }
}

module.exports = { getJson, getCsv }
