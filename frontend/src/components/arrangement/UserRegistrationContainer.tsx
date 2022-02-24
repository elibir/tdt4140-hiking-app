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
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label >Navn</Form.Label>
      <Form.Control type="string" placeholder="Navn"  />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label >Brukernavn</Form.Label>
      <Form.Control type="string" placeholder="Brukernavn" />
    </Form.Group>  
    </Row>

    <Row>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label >E-post</Form.Label>
      <Form.Control type="email" placeholder="Epost" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label >Passord</Form.Label>
      <Form.Control type="password" placeholder="Passord" />
    </Form.Group>
        
       
    </Row>
    

    </Form.Group>

    <Row>
    <Button variant="primary" type="submit" className="UserRegistration_SubmitButton">
        Submit
    </Button>
    </Row>

    </Form>

}