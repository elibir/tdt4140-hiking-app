import React, { useState, useEffect } from 'react';
import {Pagination} from 'react-bootstrap';
import "./PageSelector.css"

/**
 * Component receives the length of the page selector via props
 */
type IProps = {
  length: number
}

export const PageSelector: React.FC<IProps> = ({length}) => { 

  /**
   * Helper function for generating a list of pagination-items with the right prop values
   * @param size how many pagination-items to be added to the pagination
   * @returns list of pagination-items with onClick functions that sets them to active if clicked
   */
  function generateComponents(size: number): JSX.Element[] {
    let items: JSX.Element[] = []
    for (let i: number = 1; i <= size; i++) {
      items.push(
        <Pagination.Item key={i} onClick={() => activate(i)} active={activePage===i ? true : false}>{i}</Pagination.Item>
      )
    }
    return items
  }

  const [activePage, setActivePage] = useState(1)

  function activate(page: number): void {
    setActivePage(page)
  }

  let components = generateComponents(length)
  
  /**
   * Every time activePage changes, update the pagination-items so that the right
   * item is set to active
   */
  useEffect(() => {
    components = generateComponents(length)
  }, [activePage])

  return (
    <div>
      <h1 className='Header'>PAGES</h1>
      <Pagination className='PageSelector' size='lg'>
        {components}
      </Pagination>
    </div>
  )
}

