import { useState } from "react"

let Stars = ()=>{
let [stars, setStars] = useState(Array(5).fill(0))
let [color , setColor] = useState(null)

    console.log(stars)

let clr = (i)=>{
    setColor(i)
}

let lev = ()=>{
    setColor(0)
}

let clc = (i)=>{
    alert(`THanks for giving us ${i}`)
}

    return(
        <>

        <div className="flex gap-2">
            {
                stars.map((val,idx)=>{
                    return(
                        <div 
                        onClick={()=> clc(idx + 1)}
                        onMouseLeave={lev}
                        onMouseEnter={()=> clr(idx + 1)} key={idx}
                        className={`${idx < color ? 'bg-amber-300' : 'bg-white'} star w-10 h-10 border rounded-full`}></div>
                    )
                })
            }
        </div>

        </>
    )
}

export default Stars