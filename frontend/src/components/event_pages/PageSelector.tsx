<<<<<<< HEAD
import React from 'react';
import {Pagination, Form } from 'react-bootstrap';
import "./PageSelector.css"
=======
import React, { useState, useEffect } from 'react';
import {Pagination} from 'react-bootstrap';
>>>>>>> 6908adaed60f4f9fb7b87894385ff2e3405736df

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

<<<<<<< HEAD
  return <Form>
    <div>
      <h1 className="Header" > PAGES</h1>
        <br />
        <Pagination className="PageSelector" size="lg">{items}</Pagination>
        <br />
=======
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
>>>>>>> 6908adaed60f4f9fb7b87894385ff2e3405736df
    </div>
  )
}

