import React from "react"
import {User} from "../Interfaces"
import {ProfileCard} from "./ProfileCard"



interface Props{
    
}

const testUser: User[] = [
    {
        brukerID: 1,
        name: "Geir",
        username: "Geirnation",
        email: "Geir@utpaatur.no",
        home: "Buran"
    }
  ]
  


export const Profile: React.FC<Props> = () => {


    return (
        <div>
            <ProfileCard userinfo={testUser} />
        </div>
    )
}