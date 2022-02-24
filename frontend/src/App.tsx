import React from 'react';
import './App.css';
import { UserRegistrationContainer } from './components/arrangement/UserRegistrationContainer';
import { TripCreatorContainer } from './components/arrangement/TripCreatorContainer';
import { PageSelector } from './components/event_pages/PageSelector';

import TripNavbar from './components/nav_bar/TripNavbar';
import { INavItems } from './Interfaces';
import { Login } from './components/loginPage/login';

const pages: INavItems[] = [
  {title: "Hjem", link: "/", commponent: <h1>Home</h1>},
  {title: "Ny tur", link: "/newTrip", commponent: <TripCreatorContainer/>},
  {title: "Events", link: "/events", commponent: <PageSelector paginationItems={[]}/>},
  {title: "Users", link: "/users", commponent: <UserRegistrationContainer/>},
  {title: "Login", link: "/login", commponent: <Login/>},
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
