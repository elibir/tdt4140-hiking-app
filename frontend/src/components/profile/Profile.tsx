import React from "react"
import { ToastBody } from "react-bootstrap"
//import {User} from "../../Interfaces"
import {ProfileCard} from "./ProfileCard"


interface Props{
}

export const Profile: React.FC<Props> = (props) => {
    return (
        <ProfileCard/>
    )
}