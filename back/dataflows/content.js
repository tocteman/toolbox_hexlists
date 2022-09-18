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
        .map(x => x.value) 
        .map(x => parseCsv(x))
        .filter(x => x) // remove nulled files
}


const singleFileContent = async ({fileName}) => {
  const file = await getCsv({suffix: `file/${fileName}`})
  const parsed = parseCsv(file)
  return parsed ?? {file: fileName, lines: []}
}

module.exports = { allFilesContent, singleFileContent }
