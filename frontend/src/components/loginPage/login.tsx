import React from "react"
import { Form, Col, Row, Button } from "react-bootstrap"
import { LoginDetails } from "../../Interfaces"
import { getData } from "../../utils/APIUtils"

type Props = {
}
const handleLogin = (details: LoginDetails) => {
    if (details.success){
        localStorage.setItem("token", details.token ? details.token : "null")
        localStorage.setItem("user", details.user ? details.user : "null")
    }else{
        alert("something went wrong")
    }
}

const onFormSubmit = async (e: any) => {
    e.preventDefault()
    const formData = new FormData(e.target),
    formDataObj = Object.fromEntries(formData.entries())
    //Validate here. If valid sending = true. else give error
    await getData("login", formDataObj).then(
      (r) => { r === 200 ? handleLogin(r as LoginDetails) : alert("invalid username/password") }
    )
  }

export const Login: React.FC<Props> = (props) => {
    return (
        <Form className="TripCreatorContainer" onSubmit={(e) => onFormSubmit(e)}>
        <h1 className='text'>Utforsk naturen med nye mennesker</h1>
          <Form.Group as={Col} controlId="formNumber">
            <Form.Label>Brukernavn</Form.Label>
            <Form.Control type="string" name="user" placeholder="navn.." />
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
}