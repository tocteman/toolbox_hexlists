import React from 'react'
import Stack from 'react-bootstrap/Stack'
import FileSelector from './FileSelector'
import FileSelectorReset from './FileSelectorReset'

const Topbar = ({select, selected, title}) => {
  return (
    <Stack className="bg-dark p-2" direction="horizontal" gap={3}>
      <h2 className="text-light">{title}</h2>
      <FileSelector select={select}/>
      {selected && <FileSelectorReset select={select}/>}
    </Stack>
  )
}

export default Topbar
