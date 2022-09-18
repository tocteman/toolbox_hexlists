import React, {useState, useEffect} from 'react';
import Alert from 'react-bootstrap/Alert';
import HexTable from './components/HexTable'
import Stack from 'react-bootstrap/Stack'
import FileSelector from './components/FileSelector'
import FileSelectorReset from './components/FileSelectorReset'
import { getAllFiles, getSingleFile } from './services/Fetcher'

const App = ({ title }) => {
  const [data, setData] = useState(null)
  const [selected, setSelectedFile] = useState(null)

  useEffect( async() => {
    const fetched = selected ?
          await getSingleFile(selected) :
          await getAllFiles()
    if (fetched) {
      const cur = selected ? [fetched] : fetched
      setData(cur)
    }
  }, [selected])

  const select = file => {
    setSelectedFile(file)
  }

  return (
    <div>
      <Stack class="bg-danger" direction="horizontal" gap={3}>
        <Alert variant={'secondary'}>
          <h3>{title}</h3>
        </Alert>
        <FileSelector select={select}/>
        {selected && <FileSelectorReset select={select}/>}
      </Stack>
      <HexTable data={data}/>
    </div>
  )
}

export default App;
