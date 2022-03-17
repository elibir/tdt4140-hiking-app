import { LoginDetails } from "./Interfaces"

export const handleLogin = (details: LoginDetails) => {
    if (details.success){
        localStorage.setItem("token", details.token ? details.token : "")
        localStorage.setItem("user", JSON.stringify(details.user))
        console.log(localStorage.getItem("user"))
    }else{
        alert("something went wrong")
    }
}
export const logOut = () => {
    localStorage.setItem("token", "")
    localStorage.setItem("user", "")
}