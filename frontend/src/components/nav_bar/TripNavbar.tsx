import React, { Children } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  NavLink
} from "react-router-dom";
import { INavItems } from '../../Interfaces';
import "./TripNavbar.css";
interface IProps {
  navItems: INavItems[]
};
const TripNavbar: React.FC<IProps> = ({
  navItems
}) => {
  return (
    <Router>
      <Container fluid="md" className="TripNavbar_container">
      <Row>
        {navItems.map((item: INavItems) => 
          <Col><NavLink to={item.link} className="TripNavbar_links" style={{textDecoration:"none", color: "white"}}>{item.title}</NavLink></Col>
          )}
      </Row>
    </Container>
    <Routes>
    {navItems.map((item: INavItems) => 
          <Route path={item.link} element={item.commponent} />
          )}
    </Routes >
  </Router>)
}
export default TripNavbar;
