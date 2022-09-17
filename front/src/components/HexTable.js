import React from 'react'
import Table from 'react-bootstrap/Table';

const HexTable = ({data}) => {

  if (!data) return <p>No data yet</p>


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
