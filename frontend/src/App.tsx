import React from 'react';
import './App.css';
import { UserRegistrationContainer } from './components/arrangement/UserRegistrationContainer';
import { TripCreatorContainer } from './components/arrangement/TripCreatorContainer';
import TripNavbar from './components/nav_bar/TripNavbar';
import { INavItems } from './Interfaces';
import { Home } from './components/home/Home';
import { Profile } from './profile/Profile';

const pages: INavItems[] = [
  {title: "Hjem", link: "/", component: <Home/>},
  {title: "Ny tur", link: "/newTrip", component: <TripCreatorContainer/>},
  {title: "Ny bruker", link: "/createUser", component: <UserRegistrationContainer/>},
  {title: "Min profil", link: "/profile", component: <Profile/> },
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
