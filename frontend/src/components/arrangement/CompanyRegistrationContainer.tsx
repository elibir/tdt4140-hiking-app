import React, { FunctionComponent, useState } from 'react';
import { Form, Button, Row, Col, Container } from 'react-bootstrap';
import './CompanyRegistrationContainer.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { sendData } from '../../utils/APIUtils';


type IProps = {
    onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void,
}


export const CompanyRegistrationContainer: FunctionComponent<IProps> = ({
}) => {
    const onFormSubmit = async (e: any) => {
        e.preventDefault()
        const formData = new FormData(e.target),
            formDataObj = Object.fromEntries(formData.entries())
        //Validate here. If valid sending = true. else give error
        console.log(formDataObj)
        await sendData("users/register", formDataObj).then(
            (r) => {
                (r) ? alert("working") : alert("something went wrong")
            })
    }

    return (
        <Container className="CompanyRegistrationContainer">
            <Form onSubmit={(e) => onFormSubmit(e)}>

                <Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label >Bedriftsnavn</Form.Label>
                        <Form.Control name="company_name" type="string" placeholder="Bedriftsnavn" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label >Bedriftsnummer</Form.Label>
                        <Form.Control name="company_number" type="string" placeholder="Bedriftsnummer" />
                    </Form.Group>
                </Row>

                <Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label >E-post</Form.Label>
                        <Form.Control name="email" type="email" placeholder="E-post" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label >Adresse</Form.Label>
                        <Form.Control name="address" type="string" placeholder="Adresse" />
                    </Form.Group>
                </Row>



                <Row>
                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label >Brukernavn</Form.Label>
                        <Form.Control name="username" type="string" placeholder="Brukernavn" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label >Passord</Form.Label>
                        <Form.Control name="password" type="string" placeholder="Passord" />
                    </Form.Group>
                </Row>

                <Row>
                    <Button variant="primary" type="submit" className="CompanyRegistration_SubmitButton">Opprett bruker</Button>
                </Row>

            </Form>
        </Container>
    )

}