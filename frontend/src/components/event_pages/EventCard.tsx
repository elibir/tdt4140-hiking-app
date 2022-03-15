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

    function checkDifficulty(num: number): string {
        if (num === 1) {
            return "Lett"
        } else if (num === 2) {
            return "Middels"
        } else {
            return "Vanskelig"
        }
    }

    function formatDate(date: any, time: any): string {
        let dateString: string = ""

        let year = date.slice(0,4)
        let month = date.slice(5,7)
        let day = date.slice(8,10)
        let timeString = time.slice(0,5)

        const monthNames = ["januar", "februar", "mars", "april", "mai", "juni", "juli", "august", "september", "oktober", "november", "desember"]
        if (month.slice(0,1) == 0) {
            month = month.slice(1,2)
        }

        dateString = `${day}. ${monthNames[month - 1]} ${year} kl. ${timeString}`
        return dateString
    }

    return (
        // <Card className="full-card" onClick={() => navigate("/event/"+props.event.id)}>
        //     <Card.Body>
        //         <Card.Title className="card-title">{props.event.name}</Card.Title>
        //         <Card.Text className="card-text">
        //             {props.event.description}
        //         </Card.Text>
        //     </Card.Body>
        //     <Card.Footer className="footer-card">
        //         {console.log(props.event.capacity)}
        //         <small>Kapasitet: {props.event.capacity}</small>
        //         <small>Dato: {(props.event.date_time)}</small>
        //         <small>Tid: {(props.event.time)}</small>
        //         <small>Sted: {props.event.location}</small>
        //     </Card.Footer>
        // </Card>
        
        <div onClick={() => navigate("/event/"+props.event.id)} className="full-card">
            <div className="top-section">
                <p className="username">{props.event.id}</p>
            </div>
            <div className="main-flex">
                <div className="main-section">
                    <h1 className="event-name">{props.event.name}</h1>
                    <p className="event-location">{props.event.location}</p>
                    <p className="description">{props.event.description}</p>
                </div>
                <div className="bottom-section">
                    <p>Tid: {formatDate(props.event.date_time, props.event.time)}</p>
                    <p>Vanskelighetsgrad: {checkDifficulty(props.event.difficulty) }</p>
                    <p>Antall personer: {props.event.capacity}</p>
                </div>
            </div>
        </div>
    )
}