import React, { FunctionComponent } from 'react';
import { Col, FloatingLabel, Form, Row } from 'react-bootstrap';

//Date
export const TripCreatorDatePicker: FunctionComponent<{}> = ({
}) => {
  return <>
    <Form.Label>Når?</Form.Label>
    <Form.Control type="date" name="duedate" placeholder="Due date" />
  </>
}

//Description
export const TripCreatorDescription: FunctionComponent<{}> = ({
}) => {
  return <>
      <Form.Label>Beskrivelse</Form.Label>
      <Form.Control
        name="description"
        as="textarea"
        style={{ height: '120px' }}
      />
    </FloatingLabel>
  </>
}

//Difficulity
export const TripCreatorDifficulty: FunctionComponent<{}> = ({
}) => {
  const DiffList: string[] = ["Lett", "Moderat", "Vanskelig"]
  return <>
    <Form.Label>Vanskelighetsgrad</Form.Label>
    <Form.Select aria-label="Default select example" name="difficulty">
      {DiffList.map((data: string) => <option value={data} key={data}>{data}</option>)}
    </Form.Select>
  </>
}

//Name
export const TripCreatorName: FunctionComponent<{}> = ({
}) => {
  return <Row>
    <Col>
      <Form.Label>Navn på turen</Form.Label>
    </Col>
    <Col>
      <Form.Control type="string" placeholder="Navn..." name="name" />
    </Col>
  </Row>
}

//Where
export const TripCreatorWhere: FunctionComponent = ({
}) => {
  return <Row>
    <Col>
      <Form.Label>Hvor</Form.Label>
      <Form.Control type="string" placeholder="Tyholt..." name="where" />
    </Col>
  </Row>
}
