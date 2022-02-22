import React, { FunctionComponent } from 'react';
import { FloatingLabel, Form } from 'react-bootstrap';

type IProps = {}
const TripCreatorDescription: FunctionComponent<IProps> = ({ 
}) => {  
  return <>
    <Form.Label>Beskrivelse</Form.Label>
    <FloatingLabel controlId="floatingTextarea2" label="Beskriv turen...">
    <Form.Control
      as="textarea"
      style={{ height: '120px' }}
    />
  </FloatingLabel>
  </>
}
export default TripCreatorDescription;