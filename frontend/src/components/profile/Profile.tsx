import React from "react"
import {User} from "../../Interfaces"
import {ProfileCard} from "./ProfileCard"


interface Props{
}

const testUser: User = 
    {
        id: 1,
        first_name: "Geir",
        last_name: "Waage",
        username: "Geirnation",
        email: "Geir@utpaatur.no"
    }


export const Profile: React.FC<Props> = (props) => {
    return (
        <ProfileCard/>
    )
}