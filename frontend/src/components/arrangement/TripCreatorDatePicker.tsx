import React, { FunctionComponent } from 'react';
import { Form } from 'react-bootstrap';

type IProps = {}
const TripCreatorDatePicker: FunctionComponent<IProps> = ({ 
}) => {  
  return <>
    <Form.Label>Når?</Form.Label>
    <Form.Control type="date" name="duedate" placeholder="Due date" />
    </>
}
export default TripCreatorDatePicker;