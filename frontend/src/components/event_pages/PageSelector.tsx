import React from 'react';
import {Pagination, Form } from 'react-bootstrap';
import "./PageSelector.css"


let active = 3;
let items: JSX.Element[] = [];
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>,
  );
}



export const PageSelector = ({ 
}) => {  

  return <Form>
    <div>
      <h1 className="Header" > PAGES</h1>
        <br />
        <Pagination className="PageSelector" size="lg">{items}</Pagination>
        <br />
    </div>
    
</Form>
}


