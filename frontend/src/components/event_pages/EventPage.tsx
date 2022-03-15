import React, { FunctionComponent, useContext, useEffect, useState } from "react"
import { Card, Col, Container, Row } from "react-bootstrap"
import { useParams } from "react-router"
import { Trip } from "../../Interfaces"
import { getData } from "../../utils/APIUtils"
import { observer } from 'mobx-react';
import "./Events.css"
import "bootstrap/dist/css/bootstrap.min.css";
import { StoreContext } from "../../App";
import locationicon from "../images/location-icon.png";


function checkDifficulty(num: number): string {
    if (num === 1) {
        return "Lett"
    } else if (num === 2) {
        return "Middels"
    } else {
        return "Vanskelig"
    }
}

export const EventPage: React.FC<{}> = observer(() => {

    const store = useContext(StoreContext)
    const [currentTrip, setCurrentTrip] = useState<Trip>();

    let { id } = useParams();
    useEffect(() => {
        getData("events/"+id).then(
            (response) => {console.log(response.data); setCurrentTrip(response.data as Trip)}
        )
    }, [id]);
    function isCreator(trip: Trip): boolean {
        if(!trip || !store.user || !store.user!.brukerID || !trip!.created_by){
            return false;
        }
        return store.user!.brukerID === trip.created_by.brukerID;
    }
    return (
        <Container className="eventpage-container">
            <Row>
                <Col className="left-col">
                    <h1 className="left-side">{currentTrip?.name}</h1>
                    <img src={locationicon} className="locationicon"/>
                    <p className="left-side-p">{currentTrip?.location}</p>
                    <p className="left-side-p1"> {currentTrip?.description}</p>
                    <Row>
                       <button type="button" className="btn-success" style={{ fontWeight: "bold"}}>Meld på</button>
                    </Row>
                </Col>
                <Col style={{ maxWidth: "400px" }}>
                    <Card className="details-card">
                        <Card.Body>
                            <p className="p-detail"><span style={{ fontWeight: "bold" }}>Dato:</span> {currentTrip?.date_time}</p>
                            <p className="p-detail"><span style={{ fontWeight: "bold" }}>Klokkeslett:</span> {currentTrip?.time}</p>
                            <p className="p-detail"><span style={{ fontWeight: "bold" }}>Vanskelighetsgrad:</span> {currentTrip && checkDifficulty(currentTrip!.difficulty)}</p>
                            <p className="p-detail"><span style={{ fontWeight: "bold" }}>Antall personer:</span> {currentTrip?.capacity}</p>
                            <p className="p-detail"><span style={{ fontWeight: "bold" }}>Laget av:</span> {currentTrip?.created_by.username}</p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )

})