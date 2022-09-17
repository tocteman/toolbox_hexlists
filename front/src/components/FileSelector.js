import React, {useState, useEffect} from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import { getList } from '../services/Fetcher'

const FileSelector = ({setData}) => {
  const [files, setFiles] = useState([])

  useEffect(async() => {
    const fetched = await getList()
    console.log({fetched})
    if (fetched) {
      setFiles(fetched.files)
    }
  }, [])

  return (
    <div>
    {files?.length > 0 ? (
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
        Elegir archivo
        </Dropdown.Toggle>

      <Dropdown.Menu>
        {files.map((x, i) => (
          <Dropdown.Item key={i}>{x}</Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
    ): <p>Cargando archivos...</p>
    }
    </div>


  )
}

export default FileSelector
