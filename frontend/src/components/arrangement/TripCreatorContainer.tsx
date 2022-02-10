import React, { FunctionComponent } from 'react';
import { Form, Button, Row } from 'react-bootstrap';
import TripCreatorDatePicker from './TripCreatorDatePicker';
import { TripCreatorDifficulty } from './TripCreatorDifficulty';
import { TripCreatorName } from './TripCreatorName';
import TripCreatorDescription from './TripCreatorDescription';
import { TripCreatorWhere } from './TripCreatorWhere';

type IProps = {
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void,
}

export const TripCreatorContainer: FunctionComponent<IProps> = ({ 
}) => {  

  return <Form className="TripCreatorContainer">
    <TripCreatorName/>
    <Row>
      <TripCreatorDescription/>
      <TripCreatorDatePicker/>
      <TripCreatorWhere/>
      <TripCreatorDifficulty/>
    </Row>
    <Row>
      <Button variant="primary" type="submit" className="TripCreatorContainer__SubmitButton">
        Submit
      </Button>
    </Row>
</Form>
}
