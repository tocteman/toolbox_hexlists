const chai = require('chai')
const chaiHttp = require('chai-http')
const { parseCsv } = require('./lib/parser')

chai.use(chaiHttp)

const url = 'http://127.0.0.1:3000'
const assert = chai.assert

describe('csv parsing', () => {
  it('parses csv correctly', done => {
    const text = 'file,text,number,hex\ntest2.csv,EwdfK\ntest2.csv,NOdZezvXfSKSRSlJZVufHERXIDN,8776,a880428bb532c9c1da67e64793347381'
    const parsed = {
      file: 'test2.csv',
      lines: [
        {
          text: "NOdZezvXfSKSRSlJZVufHERXIDN",
          number: 8776,
          hex: "a880428bb532c9c1da67e64793347381"
        }
      ]
    }
    assert.deepEqual(parseCsv(text), parsed)
    done()
  })

})

describe('fetch file list', () => {
  it('list csvs', done => {
    chai.request(url)
        .get('/files/list')
        .end((err,res) => {
          assert.equal(res.status, 200)
          assert.hasAllKeys(res.body, ['files'])
          assert(res.body.files.every(x => x.includes(".csv")), 'right filetype')
          done()
        })
  })
})

describe('fetch csv data', () => {
  it('fetches and parses csvs', done => {
    chai.request(url)
        .get('/files/data')
        .end((err, res) => {
          assert.equal(res.status, 200)
          assert(res.body.every(x => typeof x.file === 'string'), 'every filename is listed')
          assert(res.body.every(x => Object.keys(x).includes('lines')), 'correct obj structure')
          done()
        })
  })
})
