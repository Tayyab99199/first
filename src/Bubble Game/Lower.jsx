import { useEffect, useState } from "react"

let Lower = ({check_bubble,arr_bubble})=>{


    return(
        <>

        <div style={{padding:'10px'}} className="flex gap-2 flex-wrap">
            {
                arr_bubble.map((val , idx)=>{
                    return(
                        <div onClick={(details)=>check_bubble(details)} key={idx} className="w-[30px] cursor-pointer h-[30px] border rounded-full text-center leading-[30px]">
                            {val}                            
                        </div>
                    )
                })
            }
        </div>

        </>
    )
}

export default Lower