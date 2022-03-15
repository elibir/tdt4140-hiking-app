import React, { useContext, useEffect, useState } from "react"
import { Card, Button, Container, Row, Col } from "react-bootstrap"
import { User, Trip } from "../../Interfaces"
import { StoreContext } from "../../App"
import Person from "../images/person.png"
import "./Profile.css"
import { EventCard } from "../event_pages/EventCard"
import { useNavigate } from "react-router-dom"


interface Props {
    userinfo: User
}

const dummyTrip: Trip = {
    id: 1,
    name: "En tur jeg er påmeldt",
    description: "Fin tur i bymarka",
    location: "Trondheim",
    date_time: new Date(),
    created_at: new Date(),
    difficulty: 1,
    capacity: 20
}

const dummyTrip2: Trip = {
    id: 1,
    name: "En tur jeg har opprettet",
    description: "Fin tur til Dragvoll",
    location: "Trondheim",
    date_time: new Date(),
    created_at: new Date(),
    difficulty: 2,
    capacity: 100
}



export const ProfileCard: React.FC<Props> = (props) => {
    const store = useContext(StoreContext)
    const [signedUpEventList, setSignedUpEventList] = useState<Trip[]>([])
    const [myOwnEventsList, setMyOwnEventsList] = useState<Trip[]>([])

    function getSignedUpEvents(userID: number): Trip[] {
        let signedUpEvents: Trip[] = []
        // TODO: hente data fra backend basert på bruker id
        // legge til Trip objekter i signedUpEvents
        // dummy data:
        signedUpEvents.push(dummyTrip)
        signedUpEvents.push(dummyTrip)
        signedUpEvents.push(dummyTrip)
        return signedUpEvents
    }

    function getMyOwnEvents(userID: number): Trip[] {
        let myOwnEvents: Trip[] = []
        // TODO: hente data fra backend basert på bruker id
        // legge til Trip objekter i myOwnEvents
        // dummy data:
        myOwnEvents.push(dummyTrip2)
        myOwnEvents.push(dummyTrip2)
        myOwnEvents.push(dummyTrip2)
        myOwnEvents.push(dummyTrip2)
        return myOwnEvents
    }

    useEffect(() => {
        setSignedUpEventList(getSignedUpEvents(props.userinfo.brukerID))
        setMyOwnEventsList(getMyOwnEvents(props.userinfo.brukerID))
    }, [])

    const navigate = useNavigate();

    const signedUpEventCards: JSX.Element[] = signedUpEventList.map(event => <EventCard event={event} />)
    const myOwnEventsCards: JSX.Element[] = myOwnEventsList.map(event => <p className="my-own-trips" onClick={() => navigate("/event/"+event.id)}>{event.name}</p>)
    
    return (
        <Container className="profile-container">
            <Row className='align-items-center center'>
                <Col style={{ maxWidth: "300px" }}>
                    <img className="person-picture" src={Person} />
                </Col>
                <Col className="right-col">
                    <h1>{props.userinfo.first_name + " " + props.userinfo.last_name}</h1>
                </Col>
            </Row>
            <Row className='center bottom-row'>
                <Col style={{ maxWidth: "300px" }}>
                    <div className="brukerinfo-div">
                        <h5>Brukerinfo</h5>
                        <p><span style={{ fontWeight: "bold" }}>Brukernavn:</span> {store.user}</p>
                        <p><span style={{ fontWeight: "bold" }}>E-post:</span> {props.userinfo.email}</p>
                        <p><span style={{ fontWeight: "bold" }}>Fødselsdato:</span> </p>
                        <p><span style={{ fontWeight: "bold" }}>Hjemsted:</span> </p>
                    </div>
                    {/* <Card className="brukerinfo-card"> 
                        <Card.Body>
                            
                        </Card.Body>
                    </Card> */}
                    <h5 className="mine-arrangementer-h5">Mine arrangementer</h5>
                    {myOwnEventsList.length > 0 ? <div className="my-own-events">{myOwnEventsCards}</div> : <p style={{ fontStyle: "italic" }}>Du har ikke opprettet et arrangement</p>}
                </Col>
                <Col className="right-col">
                    <h5>Turarrangement du har meldt deg på</h5>
                    {signedUpEventList.length > 0 ? <div className="events-on-profile">{signedUpEventCards}</div> : <p style={{ fontStyle: "italic" }}>Du har ingen kommende arrangementer</p>}
                    <h5>Tidligere turarrangement</h5>
                    <p style={{ fontStyle: "italic" }}>Du har ingen tidligere arrangementer</p>
                </Col>
            </Row>
        </Container>
    )
}


