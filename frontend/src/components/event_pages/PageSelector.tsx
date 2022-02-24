import React from 'react';
import {Pagination} from 'react-bootstrap';
import "./PageSelector.css"

/**
 * Component receives the length of the page selector via props
 */
type IProps = {
  paginationItems: JSX.Element[]
}

export const PageSelector: React.FC<IProps> = ({paginationItems}) => { 

  return (
    <div>
      <h1 className='Header'>PAGES</h1>
      <Pagination className='PageSelector' size='lg'>
        {paginationItems}
      </Pagination>
    </div>
  )
}

