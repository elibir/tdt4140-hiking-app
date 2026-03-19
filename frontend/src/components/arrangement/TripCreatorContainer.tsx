import React, { FunctionComponent, useContext, useState } from 'react';
import { Form, Button, Row, Col, Container } from 'react-bootstrap';
import { sendData } from '../../utils/APIUtils';
import { 
  TripCreatorName, 
  TripCreatorDescription, 
  TripCreatorDatePicker, 
  TripCreatorTimePicker,
  TripCreatorWhere, 
  TripCreatorDifficulty
} from './TripCreatorContent';
import "./TripCreatorContainer.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { observer } from 'mobx-react';
import { StoreContext } from '../../App';
import { useNavigate } from 'react-router-dom';



export const TripCreatorContainer: React.FC<{}> = observer(() => {

  const store = useContext(StoreContext);
  const navigate = useNavigate();
  const [sending, setSending] = useState(false);
  const [respone, setRespone] = useState("sending...");

  const onFormSubmit = async (e: any) => {
    e.preventDefault()
    const formData = new FormData(e.target),
          formDataObj = Object.fromEntries(formData.entries())
    console.log(store.user?.id)
    formDataObj.created_by = store.user?.id+"";
    //Validate here. If valid sending = true. else give error
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${localStorage.getItem("token")}`
      }
    };

    console.log(formDataObj)
    setSending(true)
    await sendData("events/", formDataObj, config).then(
      (r) => {setRespone("Turen din er lagret :)");console.log(r);navigate("/")} //TODO: fiks hvis noe går galt
    )
  }
  return <> {
    sending ? <Container><h1 className='response-message'>{respone}</h1></Container>
      :
      <Container className="TripCreatorContainer">
        <Form  onSubmit={(e) => onFormSubmit(e)}>
        <h1 className='text'>Utforsk naturen med nye mennesker</h1>
        <Row className="mb-2">
          <Form.Group as={Col} controlId="formName">
            <TripCreatorName />
          </Form.Group>

          <Form.Group as={Col} controlId="formLocation">
            <TripCreatorWhere />
          </Form.Group>
        </Row>

        <Row className="mb-2">
          <Form.Group as={Col} controlId="formDate">
            <TripCreatorDatePicker />
          </Form.Group>

          <Form.Group as={Col} controlId="formTime">
            <TripCreatorTimePicker />
          </Form.Group>

          <Form.Group as={Col} controlId="formNumber">
            <Form.Label>Antall personer</Form.Label>
            <Form.Control type="number" placeholder="1" name='capacity' />
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

      </Container>     
  }
</>
})
