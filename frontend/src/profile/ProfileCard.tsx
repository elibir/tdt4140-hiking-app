import React from "react"
import {Card , Button} from "react-bootstrap"
import Geir from "../images/Geir_Waage.png"
import {User} from "../Interfaces"




/* let testUser: User = {
    brukerID: 1,
    name: "Geir",
    username: "Geirnation",
    email: "Geir@utpaatur.no",
    home: "Buran"
}

 */

interface IProps{
    userinfo: User[]
}

export const ProfileCard: React.FC<IProps> = ({userinfo}) => {

    const usercard = userinfo.map(item => {
        
        return (
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={Geir} />
                <Card.Body>
                    <Card.Title>{item.name} ({item.username}) </Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <ul>
                        <li>e-post: {item.email}</li>
                        <li>Hjemsted: {item.home}</li>
                    </ul>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                </Card>
        )
    })

    return (
        <div>
            <section>
                {usercard}
            </section>
        </div>

    )
}

  
