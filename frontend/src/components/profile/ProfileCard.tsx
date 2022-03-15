/* eslint-disable jsx-a11y/alt-text */
import React, { useContext } from "react"
import { Card, Container, Row, Col } from "react-bootstrap"
import { User } from "../../Interfaces"
import { StoreContext } from "../../App"
import Person from "../images/person.png"
import "./Profile.css"
import { observer } from "mobx-react"



export const ProfileCard: React.FC<{}> = observer(() => {
    const store = useContext(StoreContext)

    return (
        <Container className="profile-container">
            <Row className='align-items-center center'>
                <Col style={{ maxWidth: "300px" }}>
                    <img className="person-picture" src={Person} />
                </Col>
                <Col className="right-col">
                    <h1>{store.user?.first_name + " " + store.user?.last_name}</h1>
                </Col>
            </Row>
            <Row className='center bottom-row'>
                <Col style={{ maxWidth: "300px" }}>
                    <h5>Brukerinfo</h5>
                    <Card>
                        <Card.Body>
                            <p><span style={{ fontWeight: "bold" }}>Brukernavn:</span> {store.user?.username}</p>
                            <p><span style={{ fontWeight: "bold" }}>E-post:</span> {store.user?.email}</p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="right-col">
                    <h5>Turarrangement du har meldt deg på</h5>
                    <p style={{ fontStyle: "italic" }}>Du har ingen kommende arrangementer</p>
                    <h5>Tidligere turarrangement</h5>
                    <p style={{ fontStyle: "italic" }}>Du har ingen tidligere arrangementer</p>
                </Col>
            </Row>
        </Container>
    )
})


