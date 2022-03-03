import React, { FunctionComponent, useEffect, useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { useParams } from "react-router"
import { Trip } from "../../Interfaces"
import { getData } from "../../utils/APIUtils"
import "./Events.css"
import "bootstrap/dist/css/bootstrap.min.css";

type Props = {
}

function checkDifficulty(num: number) {
    if (num === 1) {
        return "Lett"
    } else if (num === 2) {
        return "Middels"
    } else {
        return "Vanskelig"
    }
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
        <Container className="trip">
            <Row >
                <Col className="tripName">{curentTrip && curentTrip!.name}</Col>
            </Row>
            <Row> <Col className="description">{curentTrip && curentTrip!.description}</Col></Row>
            

            <Row className="details">

               <Col>Kapasitet: {curentTrip && curentTrip!.capacity }</Col>
            <Col>Dato: {curentTrip && curentTrip!.date_time}</Col>
            <Col>Vanskelighetsgrad: {
            curentTrip && checkDifficulty(curentTrip.difficulty)}</Col>
            </Row>
        </Container>
    )


}