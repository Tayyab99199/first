import { useContext } from 'react'
import {name,name2} from '../App'

let Third = ()=>{
let n = useContext(name)
let n2 = useContext(name2)
    return(
        <>
        {n} : {n2}
        </>
    )
}
export default Third