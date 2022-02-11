import React from 'react';
import './App.css';
import { TripCreatorContainer } from './components/arrangement/TripCreatorContainer';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/newTrip">Create new trip</Link>
                </li>
                <li>
                  <Link to="/users">Users</Link>
                </li>
              </ul>
            </nav>
          </div>
          <Routes>
            <Route path="/" element={Home()} />
            <Route path="/newTrip" element={<TripCreatorContainer />} />
            <Route path="/about" element={About()} />
          </Routes >
        </Router>
      </header>


    </div>
  );
}
function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

export default App;
