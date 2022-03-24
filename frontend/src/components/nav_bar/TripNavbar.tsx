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
import { Profile } from '../profile/Profile';
import { TripCreatorContainer } from '../arrangement/TripCreatorContainer';
import { RegistrationContainer } from '../arrangement/RegistrationContainer';
import { UserRegistrationContainer } from '../arrangement/UserRegistrationContainer';
import { Home } from '../home/Home';
import logo from "../images/logo.png";
import "./TripNavbar.css";
import { Login } from '../login_page/Login';
import { CompanyRegistrationContainer } from '../arrangement/CompanyRegistrationContainer';
interface IProps {
  navItems: INavItems[]
};

const pages: INavItems[] = [
  { title: "Logg inn", link: "/login", component: <Login /> },
  { title: "Hjem", link: "/", component: <Home /> },
  { title: "Opprett bruker", link: "/createUser", component: <RegistrationContainer /> },
];
//Todo endre dette systemet
const loggedInn_pages: INavItems[] = [
  { title: "Ny tur", link: "/newTrip", component: <TripCreatorContainer /> },
  { title: "Hjem", link: "/", component: <Home /> },
  { title: "Min profil", link: "/profile", component: <Profile /> },
  { title: "Logg ut", link: "/login", component: <Login /> },
];
const TripNavbar: React.FC<IProps> = observer(({
  navItems
}) => {
  const store = useContext(StoreContext)
  const tabs = store.user ? loggedInn_pages : pages;
  return (
    <Router>
      <Container fluid="md" className="TripNavbar_container">
        <Row style={{ height: "100px" }} className='align-items-center'>
          {tabs.map((item: INavItems) => {
            return item.title === "Hjem" ? <Col className='link' key={item.link}><NavLink to={item.link} className="TripNavbar_links" style={{ textDecoration: "none" }}><img className='logo' src={logo} /></NavLink></Col> : <Col className='link' key={item.link}><NavLink to={item.link} className="TripNavbar_links" style={{ textDecoration: "none" }}>{item.title}</NavLink></Col>

          }
          )}
        </Row>
      </Container>
      <Routes>
        {tabs.map((item: INavItems) =>
          <Route key={item.link} path={item.link} element={item.component} />
        )}
        <Route key={"events"} path={"/event/:id"} element={<EventPage />} />
        <Route key={"company"} path={"/createUser/company"} element={<CompanyRegistrationContainer />} />
        <Route key={"user"} path={"/createUser/user"} element={<UserRegistrationContainer />} />
      </Routes >
    </Router>)
})
export default TripNavbar;
