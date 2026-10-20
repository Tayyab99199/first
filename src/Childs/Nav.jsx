import { useEffect } from "react"
import { NavLink } from "react-router"

let Nav = ({clc})=>{
console.log(clcs)

    return(
        <>
            <div className="w-100% h-12 bg-indigo-700 ">
                <ul className="flex h-12 justify-around items-center text-white cursor-pointer">
                    <button onClick={()=>clc()}>Blog</button>
                </ul>
            </div>
        </>
    )
}

export default Nav