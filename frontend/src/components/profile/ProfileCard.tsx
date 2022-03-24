import React, { useContext, useEffect, useState } from "react"
import { Card, Button, Container, Row, Col } from "react-bootstrap"
import { User, Trip } from "../../Interfaces"
import { StoreContext } from "../../App"
import Person from "../images/person.png"
import "./Profile.css"
import { ProfileEventCard } from "../event_pages/ProfileEventCard"
import { useNavigate } from "react-router-dom"
import { getData } from "../../utils/APIUtils"
/* eslint-disable jsx-a11y/alt-text */
import "./Profile.css"
import { observer } from "mobx-react"

export const ProfileCard: React.FC<{}> = observer(() => {
    const store = useContext(StoreContext)
    const [signedUpEventList, setSignedUpEventList] = useState<Trip[]>([])
    const [myOwnEventsList, setMyOwnEventsList] = useState<Trip[]>([])

    const navigate = useNavigate();

    const signedUpEventCards: JSX.Element[] = signedUpEventList.map(event => <ProfileEventCard event={event} />)
    const myOwnEventsCards: JSX.Element[] = myOwnEventsList.map(event => <p className="my-own-trips" onClick={() => navigate("/event/"+event.id)}>{event.name}</p>)

    useEffect(() => {
        // må hente riktig data basert på bruker-id istedet for hardkodet events/1
        getData("users/createdby/" + store.user?.id).then(
            response => {
                setMyOwnEventsList(response.data as Trip[])
                console.log(myOwnEventsList)
            }
        )
        
        // må hente riktig data basert på bruker-id istedet for hardkodet events/1
        getData("users/participants/" + store.user?.id).then(
            response => {
                setSignedUpEventList(response.data as Trip[])
                console.log(signedUpEventList)
            }
        )
    }, [])

   
    return (
        <Container className="profile-container">
            <Row className='align-items-center center'>
                <Col style={{ maxWidth: "300px" }}>
                    <img className="person-picture" src={Person} />
                </Col>
                <Col className="right-col">
                    {store.user?.userType === "private" && <><h1>{store.user?.first_name + " " + store.user?.last_name}</h1></>}
                    {store.user?.userType === "public" && <><h1>{store.user?.company_name}</h1></>}
                </Col>
            </Row>
            <Row className='center bottom-row'>
                <Col style={{ maxWidth: "300px" }}>
                    <h5>Brukerinfo</h5>
                    <Card>
                        <Card.Body>                            
                            <p><span style={{ fontWeight: "bold" }}>Brukernavn:</span> {store.user?.username}</p>
                            <p><span style={{ fontWeight: "bold" }}>E-post:</span> {store.user?.email}</p>
                            {store.user?.userType === "private" 
                                && <><p><span style={{ fontWeight: "bold" }}>Hjemby:</span> {store.user?.hometown}</p>
                                <p><span style={{ fontWeight: "bold" }}>Bursdag:</span> {store.user?.birthday}</p> </>}
                            {store.user?.userType === "private" 
                                 && <><p><span style={{ fontWeight: "bold" }}>Hjemby:</span> {store.user?.company_name}</p>
                                 <p><span style={{ fontWeight: "bold" }}>Bursdag:</span> {store.user?.address}</p>
                                 <p><span style={{ fontWeight: "bold" }}>Bursdag:</span> {store.user?.tlf_no}</p></>}
                        </Card.Body>
                    </Card>
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
})

