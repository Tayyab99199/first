import { useState } from "react"
import '../App.css'
import d from './Data'
import Modal from "./Modal"

let Popup = ()=>{
let [data , setData] = useState(d)
let [show_modal , setShowModal] = useState(false)
let [friend_list , setFriend_list] = useState([])
let [name , setName] = useState()

let add_friend = (name)=>{
    setName(name)
    setShowModal(true)
}

let remove_friend = (name)=>{
    let data2 = data.filter((obj)=>{
            return obj.name != name
            
        })
    setData(data2)
}

let showFrined = ()=>{
    console.log(friend_list)
}

return(
        <>

            {
                show_modal && <Modal setData={setData} data={data} name={name} friend_list={friend_list} setFriend_list={setFriend_list} setShowModal={setShowModal} /> 
            }

            <button onClick={showFrined}>Show Friends</button>

            <h1 className="text-center font-bold text-2xl ">
               Friend Requests 
            </h1>

            <div style={{padding:'10px'}} className="parent flex justify-center sm:justify-start gap-1 sm:gap-5 flex-wrap">
                
            {
                data.map((obj)=>{
                    return(
                        <>
                        <div style={{padding:'10px'}} className="rounded-xl w-[230px] sm:w-[250px] border flex flex-col justify-center items-center gap-2">

                            <div className="w-18 h-18 sm:w-22 sm:h-22 border rounded-full"><img src={obj.img} /></div>

                            <div>
                                <h3>Name : {obj.name}</h3>
                                <h3>Level : {obj.level}</h3>
                                <h3>Yesrs Old : {obj.old}</h3>
                            </div>

                        <div className="flex flex-col sm:flex-row gap-3">
                            <button onClick={()=>add_friend(obj.name)} className="bg-green-600 text-white w-24 cursor-pointer">Add Friend</button>
                            <button onClick={()=> remove_friend(name)} className="text-red-500 cursor-pointer">Remove Friend</button>
                        </div>

                        </div>                   
 
                   </>
                    )
                })
            }
            
            </div>
        </>
    )
}

export default Popup