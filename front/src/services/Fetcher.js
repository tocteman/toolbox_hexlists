const API_URL = "http://127.0.0.1:3000"

const getInit = {
    method: "GET",
    headers: {
      'Content-Type': 'application/json'
    }
  }

export const getAllFiles = () => {
  const url = `${API_URL}/files/data`
  return fetch(url, getInit)
    .then(x => x.json())
    .catch(err => err)
}

export const getSingleFile = file => {
  const url = `${API_URL}/files/data/${file}`
  return fetch(url, getInit)
    .then(x => x.json())
    .catch(err => err)
}

export const getList = () => {
  const url = `${API_URL}/files/list`
  return fetch(url, getInit)
    .then(x => x.json())
    .catch(err => err)
}
