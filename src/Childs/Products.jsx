import { useNavigate } from "react-router"
import Nav from "./Nav"

let Products = ()=>{
let navg = useNavigate()

let clc =()=>{
    alert("thanks for purchasing from our website")
    navg('/home')
}

    return(
        <>
        <Nav/>
        <p>Shirt</p>
        <p>Pant</p>
        <p>Coat</p>
        <p>Upper</p>
        <button onClick={clc}>Buy</button>
        
        </>
    )
}

export default Products