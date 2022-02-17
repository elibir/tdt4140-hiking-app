import React, { FunctionComponent } from 'react';
import { Col, Form, Row } from 'react-bootstrap';

export const TripCreatorWhere: FunctionComponent = ({ 
}) => {  
  return <Row>
    <Col>
    <Form.Label>Hvor</Form.Label>
    <Form.Control type="string" placeholder="Tyholt..." name="where"/>
    </Col>
  </Row>
}
