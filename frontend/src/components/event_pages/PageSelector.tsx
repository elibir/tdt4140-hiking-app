import React, { useState, useEffect } from 'react';
import {Pagination} from 'react-bootstrap';

type IProps = {
  length: number
}

export const PageSelector: React.FC<IProps> = ({length}) => { 

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

  function activate(index: number): void {
    setActivePage(index)
  }

  let components = generateComponents(length)
  
  useEffect(() => {
    components = generateComponents(length)
  }, [activePage])

  return (
    <div>
      <h1>PAGES</h1>
      <Pagination size='lg'>
        {components}
      </Pagination>
    </div>
  )
}

