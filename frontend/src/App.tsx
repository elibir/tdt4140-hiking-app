import React from 'react';
import './App.css';
import { UserRegistrationContainer } from './components/arrangement/UserRegistrationContainer';
import { TripCreatorContainer } from './components/arrangement/TripCreatorContainer';
import { Events } from './components/event_pages/Events';

import TripNavbar from './components/nav_bar/TripNavbar';
import { INavItems } from './Interfaces';

const pages: INavItems[] = [
  {title: "Hjem", link: "/", commponent: <h1>Home</h1>},
  {title: "Ny tur", link: "/newTrip", commponent: <TripCreatorContainer/>},
  {title: "Users", link: "/users", commponent: <UserRegistrationContainer/>},
  {title: "Events", link: "/events", commponent: <Events/>},
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TripNavbar navItems={pages}/>
      </header>
    </div>
  );
}
export default App;
