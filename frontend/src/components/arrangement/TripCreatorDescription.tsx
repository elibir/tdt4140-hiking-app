import React, { FunctionComponent } from 'react';
import { FloatingLabel, Form } from 'react-bootstrap';

type IProps = {}
const TripCreatorDescription: FunctionComponent<IProps> = ({ 
}) => {  
  return <>
    <Form.Label>Deskripsjon</Form.Label>
    <FloatingLabel controlId="floatingTextarea2" label="Comments">
    <Form.Control
      as="textarea"
      style={{ height: '120px' }}
    />
  </FloatingLabel>
  </>
}
export default TripCreatorDescription;