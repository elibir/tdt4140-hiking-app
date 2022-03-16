import React, { useContext, useEffect, useState } from "react"
import { Card, Button, Container, Row, Col } from "react-bootstrap"
import { User, Trip } from "../../Interfaces"
import { StoreContext } from "../../App"
import Person from "../images/person.png"
import "./Profile.css"
import { EventCard } from "../event_pages/EventCard"
import { ProfileEventCard } from "../event_pages/ProfileEventCard"
import { useNavigate } from "react-router-dom"
import { getData } from "../../utils/APIUtils"


interface Props {
    userinfo: User
}


export const ProfileCard: React.FC<Props> = (props) => {
    const store = useContext(StoreContext)
    const [signedUpEventList, setSignedUpEventList] = useState<Trip[]>([])
    const [myOwnEventsList, setMyOwnEventsList] = useState<Trip[]>([])

    useEffect(() => {
        // må hente riktig data basert på bruker-id istedet for hardkodet events/1
        getData("events/1").then(
            response => {
                let myOwnEvents: Trip[] = []
                myOwnEvents.push(response.data as Trip)
                myOwnEvents.push(response.data as Trip)
                myOwnEvents.push(response.data as Trip)
                setMyOwnEventsList(myOwnEvents)
            }
        )
        
        // må hente riktig data basert på bruker-id istedet for hardkodet events/1
        getData("events/1").then(
            response => {
                let signedUpEvents: Trip[] = []
                signedUpEvents.push(response.data as Trip)
                signedUpEvents.push(response.data as Trip)
                signedUpEvents.push(response.data as Trip)
                signedUpEvents.push(response.data as Trip)
                setSignedUpEventList(signedUpEvents)
            }
        )
    }, [])

    const navigate = useNavigate();

    const signedUpEventCards: JSX.Element[] = signedUpEventList.map(event => <ProfileEventCard event={event} />)
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


