import React, { FunctionComponent, useContext, useEffect, useState } from "react"
import { Card, Col, Container, Row } from "react-bootstrap"
import { useParams } from "react-router"
import { Trip, User } from "../../Interfaces"
import { getData, sendData } from "../../utils/APIUtils"
import { observer } from 'mobx-react';
import "./Events.css"
import "bootstrap/dist/css/bootstrap.min.css";
import { StoreContext } from "../../App"
import locationicon from "../images/location-icon.png";
import { createHeader } from "../../Helper"
import { useNavigate } from "react-router-dom"


function checkDifficulty(num: number): string {
    if (num === 1) {
        return "Lett"
    } else if (num === 2) {
        return "Middels"
    } else {
        return "Vanskelig"
    }
}


function formatDate(date: any): string {
    if (date === undefined) {
        return ""
    }
    let dateString: string = ""

    let year = date.slice(0,4)
    let month = date.slice(5,7)
    let day = date.slice(8,10)

    const monthNames = ["januar", "februar", "mars", "april", "mai", "juni", "juli", "august", "september", "oktober", "november", "desember"]
    if (month.slice(0,1) == 0) {
        month = month.slice(1,2)
    }

    dateString = `${day}. ${monthNames[month - 1]} ${year}`
    return dateString
}

function getTimeString(time: any): string {
    if (time === undefined) {
        return ""
    }
    return time.slice(0,5)
}

export const EventPage: React.FC<{}> = observer(() => {

    const store = useContext(StoreContext)
    const [currentTrip, setCurrentTrip] = useState<Trip>();
    const [creator, setCreator] = useState<User>();
    const navigate = useNavigate();

    let { id } = useParams();
    useEffect(() => {
        getData("events/event/"+id).then(
            (response) => {setCurrentTrip(response.data as Trip);}
        ).then(()=>{
            getData("users/user/"+currentTrip?.created_by).then(
                (response) => {console.log(response.data);setCreator(response.data as User)}
            )
        })
    }, [id]);
    useEffect(() => {
        getData("users/user/"+currentTrip?.created_by).then(
            (response) => {console.log(response.data);setCreator(response.data as User)}
        )  
    }, [currentTrip]);

    function isCreator(trip: Trip): boolean {
        if(!trip || !store.user || !store.user!.id || !trip!.created_by){
            return false;
        }
        return store.user!.id === trip.created_by;
    }
    const cancelEvent = () => {
        sendData("events/cancel/"+currentTrip!.id+"/",{},createHeader()).then( //user: store.user!.id
            (response) => {
                var copyTrip = {...currentTrip!};
                copyTrip.canceled = true;
                setCurrentTrip(copyTrip)
                console.log(currentTrip)
            }
        )
    }
    const joinEvent = () => {
        if(store.user){
            sendData("events/join/"+currentTrip!.id+"/",{},createHeader()).then( //user: store.user!.id
                (response) => {
                    var copyTrip = {...currentTrip!};
                    copyTrip.participants.push(store.user!.id)
                    setCurrentTrip(copyTrip)
                    
                }
            )
        }else{
            navigate("/createUser")
        }
        
    }
    const leaveEvent = () => {
        sendData("events/leave/"+currentTrip!.id+"/",{},createHeader()).then( //user: store.user!.id
        (response) => {
            var copyTrip = {...currentTrip!};
            copyTrip.participants.splice(copyTrip.participants.indexOf((store.user!).id), 1)
            setCurrentTrip(copyTrip)
        }
        )
    }
    return (
        <Container className="eventpage-container">
            <Row>
                <Col className="left-col">
                    {currentTrip?.canceled && <h1 className="cancel">Avlyst!</h1>}
                    <h1 className="left-side">{currentTrip?.name}</h1>
                    <img src={locationicon} className="locationicon"/>
                    <p className="left-side-p">{currentTrip?.location}</p>
                    <p className="left-side-p1"> {currentTrip?.description}</p>
                    <h1 className="right-side">
                        {isCreator(currentTrip!) 
                        ? <Row>
                            <button type="button" className="btn-success" style={{ fontWeight: "bold"}} onClick={(e) => {}}>Rediger</button>
                            {!currentTrip?.canceled 
                            && <button type="button" className="btn-success" style={{ fontWeight: "bold"}} onClick={(e) => {cancelEvent()}}>Avlys</button>
                        }
                        </Row>
                        : (store.user && currentTrip?.participants.includes(store.user!.id) 
                            ? <Row>
                                <button type="button" className="btn-success" style={{ fontWeight: "bold"}} onClick={(e) => {leaveEvent()}}>Meld av</button>
                            </Row>  
                            : <Row>
                                <button type="button" className="btn-success" style={{ fontWeight: "bold"}} onClick={(e) => {joinEvent()}}>Meld på</button>
                            </Row>
                        )}
                    </h1>
                    
                    
                </Col>
                <Col style={{ maxWidth: "400px" }}>
                    <Card className="details-card">
                        <Card.Body>
                            <p className="p-detail"><span style={{ fontWeight: "bold" }}>Dato:</span> {formatDate(currentTrip?.date_time)}</p>
                            <p className="p-detail"><span style={{ fontWeight: "bold" }}>Klokkeslett:</span> {getTimeString(currentTrip?.time)}</p>
                            <p className="p-detail"><span style={{ fontWeight: "bold" }}>Vanskelighetsgrad:</span> {currentTrip && checkDifficulty(currentTrip!.difficulty)}</p>
                            <p className="p-detail"><span style={{ fontWeight: "bold" }}>Antall personer:</span> {currentTrip?.participants.length +"/"+currentTrip?.capacity}</p>
                            <p className="p-detail"><span style={{ fontWeight: "bold" }}>Laget av:</span> {creator && ((creator!.userType === "public") ? creator?.company_name : creator?.username)}</p>
                            {creator && ((creator!.userType === "public") 
                                && <p className="p-detail"><span style={{ fontWeight: "bold" }}>Tlf:</span> {creator!.tlf_no}</p>)
                            }
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
})