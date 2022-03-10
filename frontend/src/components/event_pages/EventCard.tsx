import React from "react"
import { Trip } from "../../Interfaces"
import Card from 'react-bootstrap/Card'
import { useNavigate } from "react-router-dom";
import "./Events.css"

type Props = {
    event: Trip
}

export const EventCard: React.FC<Props> = (props) => {
    const navigate = useNavigate();

    // ikke lenger i bruk, siden date_time vi får fra backend ikke oversettes riktig til et Date-objekt i javascript
    function formatDate(date: Date): string {
        let day = date.getDate()
        let month = date.getMonth()
        let year = date.getFullYear()
        return `${day}-${month}-${year}`
    }

    return (
        <Card className="full-card" onClick={() => navigate("/event/"+props.event.id)}>
            <Card.Body>
                <Card.Title className="card-title">{props.event.name}</Card.Title>
                <Card.Text className="card-text">
                    {props.event.description}
                </Card.Text>
            </Card.Body>
            <Card.Footer className="footer-card">
                {console.log(props.event.capacity)}
                <small>Kapasitet: {props.event.capacity}</small>
                {/* <small>Dato: {props.event.date_time}</small> */}
                <small>Sted: {props.event.location}</small>
            </Card.Footer>
        </Card>
    )
}