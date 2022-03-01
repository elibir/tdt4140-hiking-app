import React, { FunctionComponent, useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import './UserRegistrationContainer.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { sendData } from '../../utils/APIUtils';
import { handleLogin } from '../../Helper';


type IProps = {
    onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void,
}

export const UserRegistrationContainer : FunctionComponent<IProps> = ({
}) => {
  const onFormSubmit = async (e: any) => {
    e.preventDefault()
    const formData = new FormData(e.target),
    formDataObj = Object.fromEntries(formData.entries())
    //Validate here. If valid sending = true. else give error
    console.log(formDataObj)
    await sendData("users/register", formDataObj).then(
      (r) => { (r) ? handleLogin(r) : alert("something went wrong") 
      })
  }
    return <Form className = "UserRegistrationContainer"  onSubmit={(e) => onFormSubmit(e)}>
    <Form.Group className="mb-3" controlId="formBasicEmail">
    <Row>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label >Navn</Form.Label>
      <Form.Control name="first_name" type="string" placeholder="Navn"  />
    </Form.Group>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label >Last name</Form.Label>
      <Form.Control name="last_name" type="string" placeholder="Navn"  />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label >Brukernavn</Form.Label>
      <Form.Control name="username" type="string" placeholder="Brukernavn" />
    </Form.Group>  
    </Row>

    <Row>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label >E-post</Form.Label>
      <Form.Control name="email" type="email" placeholder="Epost" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label >Passord</Form.Label>
      <Form.Control name="password" type="password" placeholder="Passord" />
    </Form.Group>
        
    
    </Row>
    

    </Form.Group>

    <Row>
    <Button variant="primary" type="submit" className="UserRegistration_SubmitButton">
        Opprett bruker
    </Button>
    </Row>

    </Form>

}