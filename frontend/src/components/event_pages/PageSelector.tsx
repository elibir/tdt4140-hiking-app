import React, { useEffect, useState } from 'react';
import {Pagination} from 'react-bootstrap';
import { getData } from '../../utils/APIUtils';
import "./PageSelector.css"

/**
 * Component receives the length of the page selector via props
 */
type IProps = {
  paginationItems: JSX.Element[]
}

export const PageSelector: React.FC<IProps> = ({paginationItems}) => { 
  const [trips, setTrips] = useState([]);
    useEffect(() => {
        getData("events/").then(
            (data) => console.log(data)
        )
      });
  return (
    <div>
      <h1 className='Header'>PAGES</h1>
      <Pagination className='PageSelector' size='lg'>
        {paginationItems}
      </Pagination>
    </div>
  )
}

