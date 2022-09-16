import React from 'react';
import Alert from 'react-bootstrap/Alert';

const App = ({ title }) => (

  <div>
    <Alert variant={'primary'}>
      <h3>{title}</h3>
    </Alert>
  </div>
)

export default App;
