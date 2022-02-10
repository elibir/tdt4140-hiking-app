import React, { FunctionComponent, useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import './TripCreatorContainer.css';

type IProps = {
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void,
}

export const TripCreatorContainer: FunctionComponent<IProps> = ({ 
}) => {  
  return <Form className="TripCreatorContainer">
  <Form.Group className="mb-3" controlId="formBasicEmail">
  <Row>
    <Col>
    <Form.Label>Navn på turen</Form.Label>
    </Col>
    <Col>
    <Form.Control type="string" placeholder="Navn..." />
    </Col>
  </Row>
  
  </Form.Group>
  <Row>
    <Form.Label>Deskripsjon</Form.Label>
    <Form.Control type="string" placeholder="En fin tur langs..." />
  
    <Form.Label>Vansklighetsgrad</Form.Label>
    <Form.Select aria-label="Default select example">
      <option value="1">Lett</option>
      <option value="2">Moderat</option>
      <option value="3">Utfordrende</option>
    </Form.Select>
    </Row>
    <Row>
      
  <Button variant="primary" type="submit" className="TripCreatorContainer__SubmitButton">
    Submit
  </Button>
  </Row>
</Form>
}
