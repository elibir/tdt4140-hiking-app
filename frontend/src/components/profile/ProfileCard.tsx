import React, { useContext, useEffect, useState } from "react"
import { Card, Button, Container, Row, Col } from "react-bootstrap"
import { User, Trip } from "../../Interfaces"
import { StoreContext } from "../../App"
import Person from "../images/person.png"
import "./Profile.css"
import { EventCard } from "../event_pages/EventCard"


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



export const ProfileCard: React.FC<Props> = ({ userinfo }) => {
    const store = useContext(StoreContext)
    const [signedUpEventList, setSignedUpEventList] = useState<Trip[]>([])

    function getSignedUpEvents(userID: number): Trip[] {
        let signedUpEvents: Trip[] = []
        // TODO: hente data fra backend basert på bruker id
        // legge til Trip objekter i signedUpEvents
        // dummy data
        signedUpEvents.push(dummyTrip)
        signedUpEvents.push(dummyTrip)
        signedUpEvents.push(dummyTrip)
        return signedUpEvents
    }

    useEffect(() => {
        setSignedUpEventList(getSignedUpEvents(userinfo.brukerID))
    }, [])

    const signedUpEventCards: JSX.Element[] = signedUpEventList.map(event => <EventCard event={event} />)
    
    return (
        <Container className="profile-container">
            <Row className='align-items-center center'>
                <Col style={{ maxWidth: "300px" }}>
                    <img className="person-picture" src={Person} />
                </Col>
                <Col className="right-col">
                    <h1>{userinfo.first_name + " " + userinfo.last_name}</h1>
                </Col>
            </Row>
            <Row className='center bottom-row'>
                <Col style={{ maxWidth: "300px" }}>
                    <h5>Brukerinfo</h5>
                    <Card>
                        <Card.Body>
                            <p><span style={{ fontWeight: "bold" }}>Brukernavn:</span> {store.user}</p>
                            <p><span style={{ fontWeight: "bold" }}>E-post:</span> {userinfo.email}</p>
                        </Card.Body>
                    </Card>
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


