import React from 'react'
import Button from 'react-bootstrap/Button';

const FileSelectorReset = ({select}) => {

  return (
    <Button variant="light" onClick={() => select(null)}>
      Reset
    </Button>
  )
}

export default FileSelectorReset
