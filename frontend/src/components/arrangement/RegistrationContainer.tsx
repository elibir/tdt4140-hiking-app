import React, { FunctionComponent, useState } from 'react';
import { Form, Button, Row, Col, Container, Card, CardGroup } from 'react-bootstrap';
import './RegistrationContainer.css';
import "bootstrap/dist/css/bootstrap.min.css";


type IProps = {
    onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void,
}

export const CompanyRegistrationContainer: FunctionComponent<IProps> = ({
}) => {

    return (
        <CardGroup>
            <Card style={{ width: '18rem' }}>

                <Card.Body>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Title>Card Title</Card.Title>


                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>

                <Card.Body>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Title>Card Title</Card.Title>


                </Card.Body>
            </Card>
        </CardGroup>
    )

}