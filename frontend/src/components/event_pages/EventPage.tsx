import React, { FunctionComponent } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { Trip } from "../../Interfaces"

type Props = {
    eventPage: Trip

}
export const EventPage: React.FC<Props> = (props) => {

    return (
        <Container>
            <Row >
                <Col>{props.eventPage.name}</Col>
                <Col>{props.eventPage.description}</Col>
            </Row>

            <Row>{props.eventPage.capacity}</Row>
            <Row>{props.eventPage.date}</Row>
        </Container>
    )


}