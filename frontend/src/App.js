import React, { useState } from 'react';
import './App.css';
import UserList from './components/UserList';

function App() {

  const [state,setState] = useState({
    organizationId: null,
    organizationName: null
  })

  const setOrganizationId = (id) => {
    setState({...state,organizationId: id})
  }

  return (
    <div className="App">
      <UserList setOrganizationId={setOrganizationId} />
    </div>
  );
}

export default App;
