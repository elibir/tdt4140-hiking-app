import React, { FunctionComponent, useState } from 'react';
import { Form, Button, Row, Col, Container, Card, CardGroup } from 'react-bootstrap';
import './RegistrationContainer.css';
import "bootstrap/dist/css/bootstrap.min.css";
import user from "../images/user.png";
import building from "../images/building.png";


type IProps = {
    onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void,
}

export const CompanyRegistrationContainer: FunctionComponent<IProps> = ({
}) => {

    return (
        <Container className="RegistrationContainer">
            <h1 className="brukertypetekst">VELG DIN BRUKERTYPE</h1>
            <p className="brukertypetekst brukertypetekst2">For å fortsette, vennligst velg brukertype</p>
            <Row md={2} className="userCardRow">
                <Col>
                    <Card className="userCard" >

                        <Card.Body>
                            <Card.Img variant="top" src={user} />



                        </Card.Body>
                        <Card.Title className="RegText">VANLIG BRUKER</Card.Title>
                    </Card>
                </Col>
                <Col>
                    <Card className="userCard">

                        <Card.Body >
                            <Card.Img variant="top" src={building} />



                        </Card.Body>
                        <Card.Title className="RegText">BEDRIFTSBRUKER</Card.Title>

                    </Card>

                </Col>
            </Row>



        </Container>
    )

}