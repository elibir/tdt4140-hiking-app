import React, { useState } from "react"
import { Form, Col, Row, Button, Container } from "react-bootstrap"
import { handleLogin, logOut } from "../../Helper"
import { LoginDetails, User } from "../../Interfaces"
import { getData, sendData } from "../../utils/APIUtils"
import { useContext } from 'react';
import { StoreContext } from "../../App"
import { observer } from "mobx-react"
import "./Login.css"

type Props = {
}


const onFormSubmit = async (e: any, store: any) => {
    e.preventDefault()
    const formData = new FormData(e.target),
    formDataObj = Object.fromEntries(formData.entries())
    //TODO: Validate here. If valid sending = true. else give error
    console.log(formDataObj)
    //TODO: ikke clean løsning
    logOut()
    await sendData("users/login", formDataObj).then(
      (r) => { (r as LoginDetails).success ? handleLogin(r as LoginDetails) : alert("invalid username/password") 
      }).then(() =>
        {store.updateUser(JSON.parse(localStorage.getItem("user")!) as User)}
      )
  }

export const Login: React.FC<Props> = observer((props) => {
    const store = useContext(StoreContext)
    return (
      <Container className="login-container">
        <Form onSubmit={(e) => onFormSubmit(e, store)}>
        <h1 className='text'>{store.user ? "Velkommen " +store.user.last_name : "Vennligst logg inn"}</h1>
          <Form.Group className="inputs-group" as={Col} controlId="formNumber">
            <Form.Control type="string" name="username" placeholder="Brukernavn" />
            <Form.Control type="password" name="password" placeholder="Passord" />
          </Form.Group>
        <Row>
          <Button variant="primary" type="submit" className="login-button">
            Logg inn
          </Button>
        </Row>
      </Form>
      </Container>
        
    )
})