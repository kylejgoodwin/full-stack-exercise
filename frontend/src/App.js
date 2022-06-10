import React, { useState } from 'react';
import './App.css';
import OrganizationView from './components/OrganizationView';
import UserList from './components/UserList';

function App() {

  const [state, setState] = useState({
    organizationId: null,
    organizationName: null
  })

  const { organizationId } = state;

  const setOrganizationId = (id) => {
    setState({ ...state, organizationId: id })
  }

  return (
    <div className="App">
      {organizationId ? <OrganizationView organizationId={organizationId} /> : <UserList setOrganizationId={setOrganizationId} />}
    </div>
  );
}

export default App;
