import React, { FunctionComponent, useState } from 'react';
import { Form, Button, Row, Col, Container } from 'react-bootstrap';
import './UserRegistrationContainer.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { sendData } from '../../utils/APIUtils';
import { handleLogin } from '../../Helper';
import { useNavigate } from "react-router-dom";

type IProps = {
    onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void,
}

export const UserRegistrationContainer : FunctionComponent<IProps> = ({
}) => {
  const navigate = useNavigate();

  const onFormSubmit = async (e: any, userType: string) => {
    e.preventDefault()
    const formData = new FormData(e.target),
    formDataObj = Object.fromEntries(formData.entries())
    //Validate here. If valid sending = true. else give error
    formDataObj.userType = userType
    console.log(formDataObj)
    await sendData("users/register", formDataObj).then(
      (r) => { (r) ? successReg(r) : alert("something went wrong") 
      })
  }
  const successReg = (r: any) => {
    handleLogin(r); 
    navigate("/login");
  }
    return (
      <Container className = "UserRegistrationContainer">
        <Form onSubmit={(e) => onFormSubmit(e, "private")}>

          <Row>
            <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label >Fornavn</Form.Label>
                <Form.Control name="first_name" type="string" placeholder="Fornavn"  />
              </Form.Group>

            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label >Etternavn</Form.Label>
              <Form.Control name="last_name" type="string" placeholder="Etternavn"  />
            </Form.Group>
          </Row>

          <Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label >E-post</Form.Label>
              <Form.Control name="email" type="email" placeholder="E-post" />
            </Form.Group>
          </Row>

          <Row>
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label >Brukernavn</Form.Label>
              <Form.Control name="username" type="string" placeholder="Brukernavn" />
            </Form.Group>  
          </Row>

          <Row>
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label >Hjemsted</Form.Label>
              <Form.Control name="hometown" type="string" placeholder="Hjemsted" />
            </Form.Group>          
          </Row>

          <Row>
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label >Bursdag</Form.Label>
              <Form.Control name="birthday" type="date" placeholder="Bursdag" />
            </Form.Group>          
          </Row>

          <Row>
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label >Passord</Form.Label>
              <Form.Control name="password" type="string" placeholder="Passord" />
            </Form.Group>          
          </Row>

          <Row>
            <Button variant="primary" type="submit" className="UserRegistration_SubmitButton">Opprett bruker</Button>
          </Row>

        </Form>
      </Container>
    )

}