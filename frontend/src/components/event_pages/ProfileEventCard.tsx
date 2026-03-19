import React from "react"
import { Trip } from "../../Interfaces"
import Card from 'react-bootstrap/Card'
import { useNavigate } from "react-router-dom";
import "./ProfileEventCard.css"

type Props = {
    event: Trip
}

export const ProfileEventCard: React.FC<Props> = (props) => {
    const navigate = useNavigate();

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

        dateString = `${day}. ${monthNames[month - 1]} ${year} - ${timeString}`
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
        
        <div onClick={() => navigate("/event/"+props.event.id)} className="profile-event-card">
            <h5 className="event-name-profile">{props.event.name}</h5>
            <p className="event-time">{formatDate(props.event.date_time, props.event.time)}</p>
        </div>
    )
}