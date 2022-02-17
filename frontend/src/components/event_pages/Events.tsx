import React, { useState } from "react"
import { Col, Container, Pagination, Row } from "react-bootstrap"
import { Trip } from "../../Interfaces"
import { EventCard } from "./EventCard"
import { PageSelector } from "./PageSelector"
import DummyEvents from "./DummyEvents"

type Props = {
}

function generateEventCards(tripObjects: Trip[], activePage: number): JSX.Element[] {
    const startIndex: number = (activePage * 10) - 10
    const stopIndex: number = startIndex + 10
    let eventCardComponents: JSX.Element[] = []
    for (let i = startIndex; i < stopIndex; i++) {
        if (tripObjects[i] !== undefined) {
            eventCardComponents.push(
                <Col><EventCard event={tripObjects[i]}/></Col>
            )
        }
    }
    return eventCardComponents
}

function findPaginationSize(tripObjects: Trip[]): number {
    return Math.ceil(tripObjects.length / 10)
}

export const Events: React.FC<Props> = (props) => {

    const [activePage, setActivePage] = useState(1)

    function togglePage(page: number): void {
        setActivePage(page)
    }

    const eventCards = generateEventCards(DummyEvents, activePage)
    const size = findPaginationSize(DummyEvents)

    
    function generatePageItems(size: number): JSX.Element[] {
        let items: JSX.Element[] = []
        for (let i: number = 1; i <= size; i++) {
            items.push(
            <Pagination.Item key={i} onClick={() => {togglePage(i);window.scrollTo(0,0)}} active={activePage===i ? true : false}>{i}</Pagination.Item>
            )
        }
        return items
    }

    const pageItems = generatePageItems(size)

    return (
        <Container className="cards-container">
            <Row md={2}>
                {eventCards}
            </Row>
            {size > 1 && <footer className="page-selector">
                <PageSelector paginationItems={pageItems}/>
            </footer>}
        </Container>
        
    )
}