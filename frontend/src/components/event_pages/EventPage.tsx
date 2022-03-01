import React, { FunctionComponent, useEffect, useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { useParams } from "react-router"
import { Trip } from "../../Interfaces"
import { getData } from "../../utils/APIUtils"

type Props = {
}

export const EventPage: React.FC<Props> = (props) => {

    const [curentTrip, setCurrentTrip] = useState<Trip>();
    let { id } = useParams();
    useEffect(() => {
        getData("events/"+id).then(
            (response) => {console.log(response.data); setCurrentTrip(response.data as Trip)}
        )
    }, [id]);
    return (
        <Container>
            <Row >
                <Col>{curentTrip && curentTrip!.name}</Col>
                <Col>{curentTrip && curentTrip!.description}</Col>
            </Row>

            <Row>{curentTrip && curentTrip!.capacity}</Row>
            <Row>{curentTrip && curentTrip!.date_time}</Row>
        </Container>
    )


}