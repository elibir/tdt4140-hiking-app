import React, { FunctionComponent } from 'react';
import { Form } from 'react-bootstrap';

type IProps = {}
const TripCreatorDatePicker: FunctionComponent<IProps> = ({ 
}) => {  
  return <>
    <Form.Label>Tidspunkt</Form.Label>
    <Form.Control type="date" name="due_date" placeholder="due_date" className= 'TripCreatorContainer__Date' />
    </>
}
export default TripCreatorDatePicker;