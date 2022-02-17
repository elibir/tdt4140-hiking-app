import React, { FunctionComponent } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import TripCreatorDatePicker from './TripCreatorDatePicker';
import TripCreatorTimePicker from './TripCreatorTimePicker';
import { TripCreatorDifficulty } from './TripCreatorDifficulty';
import { TripCreatorName } from './TripCreatorName';
import TripCreatorDescription from './TripCreatorDescription';
import { TripCreatorWhere } from './TripCreatorWhere';
import "bootstrap/dist/css/bootstrap.min.css";
import "./TripCreatorContainer.css"

type IProps = {
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void,
}

export const TripCreatorContainer: FunctionComponent<IProps> = ({ 
}) => {  

  return <Form className="TripCreatorContainer">
    <h1 className='text'>Utforsk naturen med nye mennesker</h1>
    <Row className="mb-3">
    <Form.Group as={Col} controlId="formName">
    <TripCreatorName/>
    </Form.Group>

    <Form.Group as={Col} controlId="formLocation">
    <TripCreatorWhere/>
    </Form.Group>
  </Row>
  
  <Row className="mb-3">
    <Form.Group as={Col} controlId="formDate">
      <TripCreatorDatePicker/>
    </Form.Group>

    <Form.Group as={Col} controlId="formDate">
      <TripCreatorTimePicker/>
    </Form.Group>

    <Form.Group as={Col} controlId="formNumber">
      <Form.Label>Antall</Form.Label>
      <Form.Control type="number" placeholder="1" />
    </Form.Group>
  </Row>

  <Form.Group className="mb-3" controlId="formDescription">
    <TripCreatorDescription/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formDifficulty">
    <TripCreatorDifficulty/>
  </Form.Group>
    <Row>
      <Button variant="primary" type="submit"  className="TripCreatorContainer__SubmitButton">
        Opprett tur
      </Button>
    </Row>
</Form>

}
