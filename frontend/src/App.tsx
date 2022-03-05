import React from 'react';
import './App.css';
import { UserRegistrationContainer } from './components/arrangement/UserRegistrationContainer';
import { TripCreatorContainer } from './components/arrangement/TripCreatorContainer';
import TripNavbar from './components/nav_bar/TripNavbar';
import { INavItems } from './Interfaces';
import { Home } from './components/home/Home';
import { Profile } from './components/profile/Profile';
import { Login } from './components/login_page/Login';
import userStore from './UserStore';

const pages: INavItems[] = [
  { title: "Hjem", link: "/", component: <Home /> },
  { title: "Ny tur", link: "/newTrip", component: <TripCreatorContainer /> },
  { title: "Ny bruker", link: "/createUser", component: <UserRegistrationContainer /> },
  { title: "Min profil", link: "/profile", component: <Profile /> },
  { title: "Login", link: "/login", component: <Login /> },
];

export const StoreContext = React.createContext(userStore);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <StoreContext.Provider value={userStore}>
          <TripNavbar navItems={pages} />
        </StoreContext.Provider>
      </header>
    </div>
  );
}
export default App;
