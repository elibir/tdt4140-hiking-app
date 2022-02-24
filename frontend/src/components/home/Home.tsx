import React from "react"
import { Events } from "../event_pages/Events"

type Props = {
}

export const Home: React.FC<Props> = (props) => {
    return (
        <div>
            <Events/>
        </div>
    )
}