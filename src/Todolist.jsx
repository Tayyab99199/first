import { useState } from 'react'

let Todolist = ()=>{
let [inpvalue , setInpvalue] = useState('')
let [tasks , setTasks] = useState([])
    
let chan = (details)=>{
    setInpvalue(details.target.value)
}

let store_task = ()=>{
    let new_task = [...tasks,inpvalue]

    setTasks(new_task)

    console.log(tasks)

}

    return(
        <>

        <div className="main">

        <div className="todo">

            <div className="upper">
                <input onChange={chan} type='text' />
                <button onClick={store_task}>Store Task</button>
            </div>

            <div className="lower">

                 {
                    tasks.map((val)=>{
                        return(
                            <div className="task">
                                <p>{val}</p>
                                <button>Delete</button>
                            </div>
                        )
                    })
                 }

            </div>

        </div>

        </div>

        </>
    )

}

export default Todolist

