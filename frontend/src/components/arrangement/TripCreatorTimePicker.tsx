import React, { FunctionComponent } from 'react';
import { Form } from 'react-bootstrap';

type IProps = {}
const TripCreatorDatePicker: FunctionComponent<IProps> = ({ 
}) => {  
  return <>
    <Form.Label>Tidspunkt</Form.Label>
    <Form.Control type="time" name="time" placeholder="time" className= 'TripCreatorContainer__Time' />
    </>
}
export default TripCreatorDatePicker;