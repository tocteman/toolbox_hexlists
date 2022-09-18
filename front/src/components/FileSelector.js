import React, {useState, useEffect} from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import { getList } from '../services/Fetcher'

const FileSelector = ({setData, select}) => {
  const [files, setFiles] = useState([])

  useEffect(async() => {
    const fetched = await getList()
    console.log({fetched})
    if (fetched) {
      setFiles(fetched.files)
    }
  }, [])

  const handleSelect = (k, e) => {
    select(e.target.text)
  }

  return (
    <div>
      {files?.length > 0 ? (
        <Dropdown onSelect={(eventKey, e) => handleSelect(eventKey, e)} >
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Elegir archivo
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {files.map((x, i) => (
              <Dropdown.Item key={i} value={x}>
                {x}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
        ) : <p>Cargando archivos...</p>
      }
    </div>
  )
}

export default FileSelector
