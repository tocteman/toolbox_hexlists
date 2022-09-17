import React, {useState, useEffect} from 'react';
import Alert from 'react-bootstrap/Alert';
import HexTable from './components/HexTable'
import FileSelector from './components/FileSelector'
import { getAllFiles } from './services/Fetcher'

const App = ({ title }) => {
  const [data, setData] = useState(null)

  useEffect( async() => {
    const fetched = await getAllFiles()
    if (fetched) {
      console.log({fetched})
      setData(fetched)
    }
  }, [])

  return (
    <div>
      <Alert variant={'danger'}>
        <h3>{title}</h3>
      </Alert>
      <FileSelector/>
      <HexTable data={data}/>
    </div>

  )

}

export default App;
