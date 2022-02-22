import React, { FunctionComponent, useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { sendData } from '../../utils/APIUtils';
import {
  TripCreatorName,
  TripCreatorDescription,
  TripCreatorDatePicker,
  TripCreatorWhere,
  TripCreatorDifficulty
} from './TripCreatorContent';
import "bootstrap/dist/css/bootstrap.min.css";
import "./TripCreatorContainer.css"
import TripCreatorTimePicker from './TripCreatorTimePicker';

type IProps = {
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void,
}

export const TripCreatorContainer: FunctionComponent<IProps> = ({
}) => {

  const [sending, setSending] = useState(false);
  const [respone, setRespone] = useState("sending...");

  const onFormSubmit = async (e: any) => {
    e.preventDefault()
    const formData = new FormData(e.target),
      formDataObj = Object.fromEntries(formData.entries())
    //Validate here. If valid sending = true. else give error
    setSending(true)
    await sendData("newTrip", formDataObj).then(
      (r) => { r === 200 ? setRespone("all good :)") : setRespone("something went wrong. " + r) }
    )
  }
  return <>{
    sending ? <h1>{respone}</h1>
      :
      <Form className="TripCreatorContainer" onSubmit={(e) => onFormSubmit(e)}>
        <h1 className='text'>Utforsk naturen med nye mennesker</h1>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formName">
            <TripCreatorName />
          </Form.Group>

          <Form.Group as={Col} controlId="formLocation">
            <TripCreatorWhere />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formDate">
            <TripCreatorDatePicker />
          </Form.Group>

          <Form.Group as={Col} controlId="formDate">
            <TripCreatorTimePicker />
          </Form.Group>

          <Form.Group as={Col} controlId="formNumber">
            <Form.Label>Antall</Form.Label>
            <Form.Control type="number" placeholder="1" />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formDescription">
          <TripCreatorDescription />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formDifficulty">
          <TripCreatorDifficulty />
        </Form.Group>
        <Row>
          <Button variant="primary" type="submit" className="TripCreatorContainer__SubmitButton">
            Opprett tur
          </Button>
        </Row>
      </Form>
}
</>
}
