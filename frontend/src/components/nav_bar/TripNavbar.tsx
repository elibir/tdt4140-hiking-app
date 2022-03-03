import { observer } from 'mobx-react';
import React, { Children, useContext, useState } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  NavLink
} from "react-router-dom";
import { StoreContext } from '../../App';
import { INavItems } from '../../Interfaces';
import { EventPage } from '../event_pages/EventPage';
import { Profile } from '../../profile/Profile';
import { TripCreatorContainer } from '../arrangement/TripCreatorContainer';
import { UserRegistrationContainer } from '../arrangement/UserRegistrationContainer';
import { Home } from '../home/Home';
import { Login } from '../loginPage/login';
import "./TripNavbar.css";
interface IProps {
  navItems: INavItems[]
};

const pages: INavItems[] = [
  { title: "Hjem", link: "/", component: <Home /> },
  { title: "Login", link: "/login", component: <Login /> },
  { title: "Ny bruker", link: "/createUser", component: <UserRegistrationContainer /> },
];
//Todo endre dette systemet
const loggedInn_pages: INavItems[] = [
  { title: "Hjem", link: "/", component: <Home /> },
  { title: "Ny tur", link: "/newTrip", component: <TripCreatorContainer /> },
  { title: "Min profil", link: "/profile", component: <Profile /> },
  { title: "Logout", link: "/login", component: <Login /> },
];

const TripNavbar: React.FC<IProps> = observer(({
  navItems
}) => {
  const store = useContext(StoreContext)
  const tabs = store.user ? loggedInn_pages : pages;
  return (
    <Router>
      <Container fluid="md" className="TripNavbar_container">
      <Row>
        {tabs.map((item: INavItems) => 
          <Col key={item.link}><NavLink to={item.link} className="TripNavbar_links" style={{textDecoration:"none", color: "white"}}>{item.title}</NavLink></Col>
          )}
      </Row>
    </Container>
    <Routes>
    {tabs.map((item: INavItems) => 
          <Route key={item.link} path={item.link} element={item.component} />
          )}
      <Route key={"events"} path={"/event/:id"} element={<EventPage/>} />
    </Routes >
  </Router>)
})
export default TripNavbar;
