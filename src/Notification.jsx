import { useState } from "react"

let Notification = ()=>{
const [top,setTop] = useState(-50)

let clc = ()=>{
    setTop(20)

    setTimeout(()=>{
        setTop(-50)

    },4000)

}

    return(
        <>

        <div style={{top:`${top}px`,transition:`all 0.3s` }} className={`w-82 h-12 text-center leading-12 rounded-3xl bg-amber-50 absolute left-1/2 -translate-x-1/2`}>
            Message Sent!
        </div>

        <button onClick={clc} className="border w-30 h-10 rounded-2xl bg-olive-700 text-white">
            Click
        </button>
        </>
    )
}

export default Notification