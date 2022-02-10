import React, { FunctionComponent, useState } from 'react';
import { Form, Button, Row, Col, Pagination } from 'react-bootstrap';
import { render } from 'react-dom';
import './PageContainer.css';


type IProps = {
    onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void,
  }


export const PageContainer: FunctionComponent<IProps> = ({ 
}) => {  

let active = 2;
let items = [];
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>,
  );
}
  return <Form className="PageContainer">
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

  <div>
<Pagination>{items}</Pagination>
<br />

<Pagination size="lg">{items}</Pagination>
<br />

<Pagination size="sm">{items}</Pagination>
</div>

</Form>



}





