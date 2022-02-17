import React from 'react';
import logo from './logo.svg';
import './App.css';
import { UserRegistrationContainer } from './components/arrangement/UserRegistrationContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <UserRegistrationContainer/>
      </header>
      
    </div>
  );
}

export default App;
