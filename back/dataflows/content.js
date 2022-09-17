const { getJson, getCsv } = require('../lib/fetcher')
const { parseCsv } = require('../lib/parser')

const allFilesContent = async () => {
  const {files} = await getJson({suffix: 'files'})

  const contentPromises = files.map(x =>
    getCsv({suffix: `file/${x}`})
  )
  const contentResp = await Promise.allSettled(contentPromises)

  return contentResp
        .filter(x => x.status === 'fulfilled')
        .map(x => x.value) // extract value from fulfilled promise
        .map(x => parseCsv(x))
        .filter(x => x) // remove nulled files
}

module.exports = { allFilesContent }
