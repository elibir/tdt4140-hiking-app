import React, { FunctionComponent, useState } from 'react';
import { Form, Button, Row } from 'react-bootstrap';
import { sendData } from '../../utils/APIUtils';
import { 
  TripCreatorName, 
  TripCreatorDescription, 
  TripCreatorDatePicker, 
  TripCreatorWhere, 
  TripCreatorDifficulty 
} from './TripCreatorContent';

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
    await sendData("events/", formDataObj).then(
      (r) => { r === 201 ? setRespone("all good :)") : setRespone("something went wrong. " + r)}
    )
  }
  return <>{
    sending ? <h1>{respone}</h1> 
    :
    <Form className="TripCreatorContainer" onSubmit={(e) => onFormSubmit(e)}>
    <TripCreatorName/>
    <Row>
      <TripCreatorDescription/>
      <TripCreatorDatePicker/>
      <TripCreatorWhere/>
      <TripCreatorDifficulty/>
      <Form.Label>Hvor mange plasser</Form.Label>
      <Form.Control type="number" placeholder="2" name="capacity"/>
    </Row>
    <Row>
      <Button variant="primary" type="submit" className="TripCreatorContainer__SubmitButton">
        Submit
      </Button>
    </Row>
</Form>}</>
}
