import React, { FunctionComponent, useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import DatePicker from "react-datepicker";

type IProps = {
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void,
}

export const TripCreatorContainer: FunctionComponent<IProps> = ({ 
}) => {  
  const DiffList: string[] = ["Lett", "Moderat", "Vanskelig"]
  const [startDate, setStartDate] = useState(new Date());
  return <Form className="TripCreatorContainer">
  <Form.Group className="mb-3" controlId="formBasicEmail">
  <Row>
    <Col>
    <Form.Label>Navn på turen</Form.Label>
    </Col>
    <Col>
    <Form.Control type="string" placeholder="Navn..." />
    </Col>
  </Row>
  
  </Form.Group>
  <Row>
    <Form.Label>Deskripsjon</Form.Label>
    <Form.Control type="string" placeholder="En fin tur langs..." />
  
    <Form.Label>Når?</Form.Label>
    <DatePicker selected={startDate} onChange={(date: Date) => setStartDate(date)} />

    <Form.Label>Vansklighetsgrad</Form.Label>
    <Form.Select aria-label="Default select example">
      {DiffList.map((data: string) => <option value={data}>{data}</option>)}
    </Form.Select>
    </Row>
    <Row>
      
  <Button variant="primary" type="submit" className="TripCreatorContainer__SubmitButton">
    Submit
  </Button>
  </Row>
</Form>
}
