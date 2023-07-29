import { Link, useLocation } from "react-router-dom"
import arrow from "../../assets/Arrow.png"

export default function Card({}){
    const {pathname}= useLocation()
    console.log(pathname[pathname.length-1])
return <h2>Card</h2>
}