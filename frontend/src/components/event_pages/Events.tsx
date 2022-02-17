import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import { Trip } from "../../Interfaces"
import { EventCard } from "./EventCard"
import { PageSelector } from "./PageSelector"
import DummyEvents from "./DummyEvents"

type Props = {
}

function generateEventCards(tripObjects: Trip[]): JSX.Element[] {
    const eventCardComponents: JSX.Element[] = tripObjects.map(trip => {
        return <Col><EventCard event={trip}/></Col>
    })
    return eventCardComponents
}

let eventCards = generateEventCards(DummyEvents)

let dummyTrip: Trip = {
    name: "Navn på tur",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius semper leo vel pretium. Vestibulum lobortis lectus vitae imperdiet lobortis. Curabitur eget malesuada neque. Nulla molestie faucibus nibh, vitae fermentum elit fermentum et. Phasellus eros turpis, vestibulum ac sodales id, volutpat vitae urna. Mauris consequat risus non pretium blandit. Sed varius, neque ac efficitur faucibus, lectus risus feugiat magna, ac hendrerit libero mauris at neque. Curabitur placerat a enim non volutpat. Maecenas eu arcu felis.",
    location: "Trondheim",
    date: new Date(),
    capacity: 20
}

export const Events: React.FC<Props> = (props) => {

    return (
        <Container className="cards-container">
            <Row md={2}>
                {eventCards}
            </Row>
            <footer className="page-selector">
                <PageSelector length={3}/>
            </footer>
        </Container>
        
    )
}