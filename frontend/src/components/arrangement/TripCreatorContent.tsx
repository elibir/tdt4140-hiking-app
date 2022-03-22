import React, { FunctionComponent } from 'react';
import { Col, FloatingLabel, Form, Row } from 'react-bootstrap';

//Date
export const TripCreatorDatePicker: FunctionComponent<{}> = ({
}) => {
  return <>
    <Form.Label>Dato</Form.Label>
    <Form.Control type="date" name="date_time"/>
  </>
}

export const TripCreatorTimePicker: FunctionComponent<{}> = ({
}) => {
  return <>
    <Form.Label>Tid</Form.Label>
    <Form.Control type="time" name="time"/>
  </>
}

//Description
export const TripCreatorDescription: FunctionComponent<{}> = ({
}) => {
  return <>
      <Form.Label>Beskrivelse</Form.Label>
      <Form.Control
        name="description"
        placeholder='Beskrivelse'
        as="textarea"
        style={{ height: '120px' }}
      />
  </>
}

//Difficulity
export const TripCreatorDifficulty: FunctionComponent<{}> = ({
}) => {
  const DiffList: number[] = [1, 2, 3]
  const DiffListString: string[] = ["Lett", "Moderat", "Vanskelig"]
  return <>
    <Form.Label>Vanskelighetsgrad</Form.Label>
    <Form.Select aria-label="Default select example" name="difficulty">
      {DiffList.map((data: number, index: number) => <option value={data} key={data}>{DiffListString[index]}</option>)}
    </Form.Select>
  </>
}

//Name
export const TripCreatorName: FunctionComponent<{}> = ({
}) => {
  return <Row>
    <Col>
      <Form.Label>Navn på turen</Form.Label>
      <Form.Control type="string" placeholder="Turnavn" name="name" />
    </Col>
  </Row>
}

//Where
export const TripCreatorWhere: FunctionComponent = ({
}) => {
  return <Row>
    <Col>
      <Form.Label>Hvor</Form.Label>
      <Form.Control type="string" placeholder="Sted" name="location" />
    </Col>
  </Row>
}
