import React, { useEffect, useState } from 'react';
import {Pagination} from 'react-bootstrap';
import { getData } from '../../utils/APIUtils';
import "./Events.css"

/**
 * Component receives the length of the page selector via props
 */
type IProps = {
  paginationItems: JSX.Element[]
}

export const PageSelector: React.FC<IProps> = ({paginationItems}) => { 
  
  return (
    <div>
      <Pagination className='pagination' size='lg'>
        {paginationItems}
      </Pagination>
    </div>
  )
}

