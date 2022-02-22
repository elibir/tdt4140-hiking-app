import { FunctionComponent, useEffect, useState } from "react"
import { getData } from "../../utils/APIUtils";

export const EventTrip: FunctionComponent<{}> = ({ 
}) => {   
    const [sending, setSending] = useState(false);
    useEffect(() => {
        getData("users/").then(
            (data) => console.log(data)
        )
      });
  return <>
  </>
}