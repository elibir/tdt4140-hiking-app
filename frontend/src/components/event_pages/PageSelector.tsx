import React from 'react';
import {Pagination} from 'react-bootstrap';

/**
 * Component receives the length of the page selector via props
 */
type IProps = {
  paginationItems: JSX.Element[]
}

export const PageSelector: React.FC<IProps> = ({paginationItems}) => { 

  return (
      <Pagination size='lg'>
        {paginationItems}
      </Pagination>
  )
}

