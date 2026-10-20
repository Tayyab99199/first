import { useState } from "react"
import Lower from "./Lower"
import Upper from "./Upper"

let Bubble = ()=>{
let [target , setTarget] = useState( Math.floor(Math.random() * 10))
let [score , setScore] = useState(0)
let [timer , setTimer] = useState(10)


let create_bubbles = ()=>{
    return Array(90).fill(1).map(()=> Math.floor(Math.random()*10))
}
let [arr_bubble , setArr_bubble] = useState(create_bubbles)

let check_bubble = (details)=>{
    if(timer > 0){
        if(details.target.innerText == target){
            setScore(score + 10)
            setTarget(Math.floor(Math.random() * 10))
            setArr_bubble(create_bubbles())
        }
    }else{
        alert("Time up")
    }
}

let arr = [1,3,5]

let arr2 = arr.map((val)=>{
    return val * 2
})

console.log(arr2)



    return(
        <>

        {/* {
            num == 1 ? "One" : "TwO"
        } */}

        <h1 style={{margin:'20px 0'}} className="text-2xl text-center">Bubble Game</h1>

        <div className="main_body border w-[600px] h-[300px] absolute left-1/2 top-[55%] -translate-x-1/2 -translate-y-1/2">

        <Upper target={target} score={score} timer={timer} setTimer={setTimer}/>

        <Lower check_bubble={check_bubble} arr_bubble={arr_bubble}/>
        </div>

        </>
    )
}

export default Bubble

