import React, { useState } from "react"
import { Form, Col, Row, Button } from "react-bootstrap"
import { handleLogin, logOut } from "../../Helper"
import { LoginDetails } from "../../Interfaces"
import { getData, sendData } from "../../utils/APIUtils"
import { useContext } from 'react';
import { StoreContext } from "../../App"
import { observer } from "mobx-react"

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
        {store.updateUser(localStorage.getItem("user"));}
      )
  }

export const Login: React.FC<Props> = observer((props) => {
    const store = useContext(StoreContext)
    return (
        <Form className="TripCreatorContainer" onSubmit={(e) => onFormSubmit(e, store)}>
        <h1 className='text'>{store.user ? "Velkommen " +store.user : "Vennligst logg inn"}</h1>
          <Form.Group as={Col} controlId="formNumber">
            <Form.Label>Brukernavn</Form.Label>
            <Form.Control type="string" name="username" placeholder="navn.." />
            <Form.Label>Password</Form.Label>
            <Form.Control type="string" name="password" placeholder="password.." />
          </Form.Group>
        <Row>
          <Button variant="primary" type="submit" className="TripCreatorContainer__SubmitButton">
            Logg inn
          </Button>
        </Row>
      </Form>
    )
})