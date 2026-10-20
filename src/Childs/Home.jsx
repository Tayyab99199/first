import { useLocation } from "react-router"
import Nav from "./Nav"
import { useState } from "react"
import Blog from "./Blog"

let Home = ({item})=>{
    // let loc = useLocation()
// let [path , setPath] =useState(loc.pathname)


    return(
        <>
        <div className="w-full flex justify-center items-center  h-screen bg-amber-200">
                <h1 className="text-5xl">Home</h1>
        </div>
        <Blog item={item}/>
            <br/>

{/* {
    path == '/specialHome' ? <button>Special Feature</button> : <button>Simple Feature</button>
} */}

        </>
    )
}
export default Home