// import React, { FunctionComponent } from 'react';
// import { Pagination } from 'react-bootstrap';
// import PageItem from 'react-bootstrap/PageItem'


// type IProps = {}


// let active = 2;
// let items: number[] = [1,2,3,4]

// export const PageSelector: FunctionComponent<IProps> = ({}) => {
//     return(
        
//         <div>
//         <Pagination>{items}</Pagination>
//         <br />
    
//         <Pagination size="lg">{items}</Pagination>
//         <br />
    
//         <Pagination size="sm">{items}</Pagination>

//         <PageItem/>
//         </div>

        
        
//     )

// }


import React, { FunctionComponent } from 'react';
import { Form, Button, Row, Pagination } from 'react-bootstrap';


let active = 2;
let items = [];
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>,
  );
}

// type IProps = {
//   onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void,
// }

export const PageSelector = ({ 
}) => {  

  return <Form className="PageSelector">
    <div>
        <Pagination>{items}</Pagination>
        <br />

        <Pagination size="lg">{items}</Pagination>
        <br />

        <Pagination size="sm">{items}</Pagination>
    </div>
    
</Form>
}


