import React, {useState, useEffect} from 'react';
import Topbar from './components/Topbar'
import HexTable from './components/HexTable'
import { getAllFiles, getSingleFile } from './services/Fetcher'

const App = ({ title }) => {
  const [data, setData] = useState(null)
  const [selected, setSelectedFile] = useState(null)

  useEffect( async() => {
    const fetched = selected ?
          await getSingleFile(selected) :
          await getAllFiles()
    if (fetched) {
      setData(selected ? [fetched] : fetched)
    }
  }, [selected])

  const select = file => setSelectedFile(file)

  return (
    <>
      <Topbar
        select={select}
        selected={selected}
        title={title}
      />
      <HexTable data={data}/>
    </>
  )
}

export default App;
