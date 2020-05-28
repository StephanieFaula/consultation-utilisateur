import React from 'react';
import UserList from '../containers/user_list';
import UserDetail from '../containers/user_detail';

function App() {
  return (
    <div className="App">
      <UserList />
      <UserDetail />
    </div>
  );
}

export default App;
