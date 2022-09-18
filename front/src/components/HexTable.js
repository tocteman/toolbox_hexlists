import React from 'react'
import Table from 'react-bootstrap/Table';

// La estructura de los datos recibidos es
// [{ file: "", lines: [{text, number, hex}] }]
const HexTable = ({data}) => {

  if (!data) return <p>Cargando...</p>

  const rows = data.map(x =>
    x.lines.map(y =>
      ({...y, fileName: x.file})
    )
  ).flat()

  return (
    <Table striped bordered>
      <thead>
        <tr>
          <th>File Name</th>
          <th>Text</th>
          <th>Number</th>
          <th>Hex</th>
        </tr>
      </thead>
      <tbody>
        {rows.length === 0 &&
         <tr>
           <td colSpan={4}>
             No hemos conseguido información válida de ese archivo.
           </td>
         </tr>
        }
    {rows.map((x, i) => (
      <tr key={i}>
        <td>{x.fileName}</td>
        <td>{x.text}</td>
        <td>{x.number}</td>
        <td>{x.hex}</td>
      </tr>
    ))}
      </tbody>
    </Table>
  )
}

export default HexTable
