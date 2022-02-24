import React from "react"
import { Trip } from "../../Interfaces"
import Card from 'react-bootstrap/Card'
import "./Events.css"

type Props = {
    event: Trip
}

export const EventCard: React.FC<Props> = (props) => {

    function formatDate(date: Date): string {
        const americanFormat: string = date.toISOString()
        const day: string = americanFormat.slice(8, 10)
        const month: string = americanFormat.slice(5,7)
        const year: string = americanFormat.slice(0,4)
        return `${day}-${month}-${year}`
    }

    return (
        <Card className="full-card">
            <Card.Body>
                <Card.Title className="card-title">{props.event.name}</Card.Title>
                <Card.Text className="card-text">
                    {props.event.description}
                </Card.Text>
            </Card.Body>
            <Card.Footer className="footer-card">
                <small>Kapasitet: {props.event.capacity}</small>
                <small>Dato: {formatDate(props.event.date)}</small>
                <small>Sted: {props.event.location}</small>
            </Card.Footer>
        </Card>
    )
}