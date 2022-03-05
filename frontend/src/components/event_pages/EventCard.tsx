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

    function formatDate(date: Date): string {
        const americanFormat: string = date.toISOString()
        const day: string = americanFormat.slice(8, 10)
        const month: string = americanFormat.slice(5,7)
        const year: string = americanFormat.slice(0,4)
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
                <small>Dato: {(props.event.date_time)}</small>
                <small>Sted: {props.event.location}</small>
            </Card.Footer>
        </Card>
    )
}