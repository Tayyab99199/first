import { useEffect, useState } from "react"

let Upper = ({target,score,timer,setTimer})=>{

let arr = [
    {name : 'Timer', value : timer},
    {name : 'Score', value : score},
    {name : 'Target', value : target},
]



useEffect(()=>{

let interval = null 

if(timer > 0){
    interval = setInterval(()=>{
        setTimer(timer - 1)
    },1000)
}

return ()=> clearInterval(interval)

},[timer])


    return(
        <>

        <div style={{padding:'10px'}} className="border-b w-full flex justify-between">

            {
                arr.map((obj,idx)=>{
                    return(
                        <div key={idx} className="flex items-center gap-3">
                            <h2>{obj.name}</h2>
                            <p className="border w-[40px] h-[40px] text-center leading-[40px]">{obj.value}</p>  
                        </div>
                    )
                })
            }     

        </div>

        </>
    )
}

export default Upper