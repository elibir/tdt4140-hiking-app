import React, { FunctionComponent, useState } from 'react';
import { Form, Button, Row, Col, Container } from 'react-bootstrap';
import './CompanyRegistrationContainer.css';
import "bootstrap/dist/css/bootstrap.min.css";

import { sendData } from '../../utils/APIUtils';
import { handleLogin } from '../../Helper';
import { useNavigate } from "react-router-dom";

type IProps = {
    onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void,
}

export const CompanyRegistrationContainer: FunctionComponent<IProps> = ({
}) => {
  const navigate = useNavigate();

  const onFormSubmit = async (e: any) => {
    e.preventDefault()
    const formData = new FormData(e.target),
      formDataObj = Object.fromEntries(formData.entries())
    //Validate here. If valid sending = true. else give error
    console.log(formDataObj)
    await sendData("users/register", formDataObj).then(
      (r) => {
        (r) ? successReg(r) : alert("something went wrong")
      })
  }
  const successReg = (r: any) => {
    handleLogin(r);
    navigate("/login");
  }
  return (


    <Container className="CompanyRegistrationContainer">
      <Form onSubmit={(e) => onFormSubmit(e)}>

        <Row>
            <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label >Bedriftsnavn</Form.Label>
                <Form.Control name="company_user" type="string" placeholder="Bedriftnavn"  />
              </Form.Group>
        </Row>

        <Row>
            <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label >Brukernavn</Form.Label>
                <Form.Control name="username" type="string" placeholder="Brukernavn"  />
              </Form.Group>
        </Row>

        <Row>
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label >Email</Form.Label>
            <Form.Control name="email" type="string" placeholder="Email" />
          </Form.Group>
        </Row>

        <Row>
            <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label >Adresse</Form.Label>
            <Form.Control name="address" type="string" placeholder="Adresse" />
            </Form.Group>          
        </Row>

        <Row>
            <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label >Telefonnummer</Form.Label>
            <Form.Control name="tlf_no" type="date" placeholder="Telefonnummer" />
            </Form.Group>          
        </Row>

        <Row>
            <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label >Passord</Form.Label>
            <Form.Control name="password" type="string" placeholder="Passord" />
            </Form.Group>          
        </Row>
        
        <Row>
          <Button variant="primary" type="submit" className="CompanyRegistration_SubmitButton">Opprett en bedriftsbruker</Button>
        </Row>

      </Form>
    </Container>
  )

}