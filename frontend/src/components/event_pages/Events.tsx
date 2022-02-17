import React from "react"
import { Col, Row } from "react-bootstrap"
import { Trip } from "../../Interfaces"
import { EventCard } from "./EventCard"
import { PageSelector } from "./PageSelector"

type Props = {
}

let dummyTrip: Trip = {
    name: "Navn på tur",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius semper leo vel pretium. Vestibulum lobortis lectus vitae imperdiet lobortis. Curabitur eget malesuada neque. Nulla molestie faucibus nibh, vitae fermentum elit fermentum et. Phasellus eros turpis, vestibulum ac sodales id, volutpat vitae urna. Mauris consequat risus non pretium blandit. Sed varius, neque ac efficitur faucibus, lectus risus feugiat magna, ac hendrerit libero mauris at neque. Curabitur placerat a enim non volutpat. Maecenas eu arcu felis.",
    location: "Trondheim",
    date: new Date(),
    capacity: 20
}

export const Events: React.FC<Props> = (props) => {

    return (
        <div>
            <Row md={2}>
                <Col>
                    <EventCard event={dummyTrip}/>
                </Col>
                <Col>
                    <EventCard event={dummyTrip}/>
                </Col>
                <Col>
                    <EventCard event={dummyTrip}/>
                </Col>
                <Col>
                    <EventCard event={dummyTrip}/>
                </Col>
            </Row>
            <PageSelector length={3}></PageSelector>
        </div>
    )
}