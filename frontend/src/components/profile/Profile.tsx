import React from "react"
import { ToastBody } from "react-bootstrap"
import {User} from "../../Interfaces"
import {ProfileCard} from "./ProfileCard"


interface Props{
}

let date: Date = new Date("2019-01-16"); 

const testUser: User = 
    {
        brukerID: 1,
        first_name: "Geir",
        last_name: "Waage",
        username: "Geirnation",
        email: "Geir@utpaatur.no",
        hometown: "Oslo",
        //birthday: date,
    }


export const Profile: React.FC<Props> = (props) => {
    return (
        <ProfileCard/>
    )
}