import React, { FunctionComponent, useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import './UserRegistrationContainer.css';

type IProps = {
    onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void,
}

export const UserRegistrationContainer : FunctionComponent<IProps> = ({
}) => {
    return <Form className = "UserRegistrationContainer">
    <Form.Group className="mb-3" controlId="formBasicEmail">
    <Row>
        <Col>
        <Form.Label>Fornavn</Form.Label>
        </Col>
        <Col>
        <Form.Control type="string" placeholder="Fornavn..."/>
        </Col>
    </Row>
    <Row>
        <Col>
        <Form.Label>Etternavn</Form.Label>
        </Col>
        <Col>
        <Form.Control type="string" placeholder="Etternavn..."/>
        </Col>
    </Row>
    <Row>
        <Col>
        <Form.Label>Brukernavn</Form.Label>
        </Col>
        <Col>
        <Form.Control type="string" placeholder="Brukernavn..."/>
        </Col>
    </Row>
    <Row>
        <Col>
        <Form.Label>Epost</Form.Label>
        </Col>
        <Col>
        <Form.Control type="string" placeholder="Epost..."/>
        </Col>
    </Row>
    <Row>
        <Col>
        <Form.Label>Bosted</Form.Label>
        </Col>
        <Col>
        <Form.Control type="string" placeholder="Bosted..."/>
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