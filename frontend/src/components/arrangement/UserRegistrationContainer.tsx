import React, { FunctionComponent, useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import './UserRegistrationContainer.css';
import "bootstrap/dist/css/bootstrap.min.css";


type IProps = {
    onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void,
}

export const UserRegistrationContainer : FunctionComponent<IProps> = ({
}) => {
    return <Form className = "UserRegistrationContainer">
    <Form.Group className="mb-3" controlId="formBasicEmail">
    <Row>
        <Col>
        <Form.Label className="text">Navn</Form.Label>
        </Col>
        <Col>
        <Form.Control type="string" placeholder="Navn" className="placeholder"/>
        </Col>
        <Col>
        <Form.Label className="text">Brukernavn</Form.Label>
        </Col>
        <Col>
        <Form.Control type="string" placeholder="Brukernavn " className="placeholder"/>
        </Col>   
    </Row>
    <Row>
        <Col>
        <Form.Label className="text">Epost</Form.Label>
        </Col>
        <Col>
        <Form.Control type="string" placeholder="Epost" className="placeholder"/>
        </Col>
        <Col>
        <Form.Label className="text">Bosted</Form.Label>
        </Col>
        <Col>
        <Form.Control type="string" placeholder="Bosted" className="placeholder"/>
        </Col>
    </Row>
    

    </Form.Group>

    <Row>
    <Button variant="primary" type="submit" className="UserRegistration_SubmitButton">
        Submit
    </Button>
    </Row>

    </Form>

}