import React, { FunctionComponent } from 'react';
import { Col, Form, Row } from 'react-bootstrap';

type IProps = {}
export const TripCreatorName: FunctionComponent<IProps> = ({ 
}) => {  
  return <Row>
    <Col>
    <Form.Label>Navn på turen</Form.Label>
    </Col>
    <Col>
    <Form.Control type="string" placeholder="Navn..." name="name"/>
    </Col>
  </Row>
}
