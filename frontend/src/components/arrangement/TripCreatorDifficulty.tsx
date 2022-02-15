import React, { FunctionComponent } from 'react';
import { Form } from 'react-bootstrap';

type IProps = {}
export const TripCreatorDifficulty: FunctionComponent<IProps> = ({ 
}) => {  
  
  const DiffList: string[] = ["Lett", "Moderat", "Vanskelig"]

  return <>
    <Form.Label>Vansklighetsgrad</Form.Label>
    <Form.Select aria-label="Default select example">
      {DiffList.map((data: string) => <option value={data}>{data}</option>)}
    </Form.Select>
    </>
}
