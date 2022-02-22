import React, { FunctionComponent } from 'react';
import { Col, Form, Row } from 'react-bootstrap';

export const TripCreatorWhere: FunctionComponent = ({ 
}) => {  
  return <Row>
    <Col>
    <Form.Label>Tursted</Form.Label>
    <Form.Control type="string" placeholder="Tursted" />
    </Col>
  </Row>
}
