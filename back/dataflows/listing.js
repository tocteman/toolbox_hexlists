const { getJson } = require('../lib/fetcher')

const filesList = async () => {
  return await getJson({suffix: 'files'})
}

module.exports = { filesList }
