import { createContext, use, useEffect, useRef, useState } from "react"
import Notification from "./Notification"
import Bubble from "./Bubble Game/Bubble"
// import Todolist2 from "./TodoList/Todolist2"
// import Stars from "./Stars/Stars"
// import Quiz from "./Quiz/Quiz"
// import Popup from "./Popup/Popup" 
// import First from "./PropsDrilling/First"
// import Result from "./Result/Result"
import axios from "axios"
// import { GrApple } from "react-icons/gr";
// import { GrAndroid } from "react-icons/gr";
import { GrAnnounce } from "react-icons/gr";
import { BrowserRouter, Route, Router, Routes } from "react-router";
import Contact from "./Childs/Contact";
import Home from "./Childs/Home";
import Blog from "./Childs/Blog";
import Nav from "./Childs/Nav";
import Error from "./Childs/Error";
import Products from "./Childs/Products";
// let name = createContext()
// let name2 = createContext()
// npm i axios 
let App = ()=>{
// const [data , setData] = useState([])

// let get_data = async ()=>{
//  try{
//   let my_data = await axios.delete('https://jsonplaceholder.typicode.com/users',{name:'Ali',email:'ali@gmail.com'})
//   alert("data sended" + my_data.data)
//  }catch(err){
//   console.log('error')
//  }}
// useEffect(()=>{
//   get_data()
// },[])

// const [Data , setData] = usestate([])
// let get_data = async ()=>{
//   try{
//     let my_data = await axios.delete('https://jsonplaceholder.typicode.com/users',{name:'ali',email:'ali@gmail.com'})
//   alert("data sended" + my_data.data)
//   }catch(err){
//     console.log('error')
//   }}
//   useEffect(()=>{
//     get_data()
//   },[])
let item = useRef()

let clc = () =>{
  item.current.scrollIntoView({
    behaviour : 'Smooth'
  })
}
  return(
    <>
 
     {/* {
      Data.map((d)=>{
        return(
          <p>{d.name}</p>
        )})}   */}
<Bubble/>

{/* <BrowserRouter>
  <Routes>
    <Route path="/"  element={<Nav clc={clc}/>}/>
    <Route path="/blog"  element={<Blog item={item}/>}/>
    <Route path="/contact"  element={<Contact/>}/>
    <Route path="/home"  element={<Home/>}/>
    <Route path="/specialHome"  element={<Home/>}/>
    <Route path="/products"  element={<Products/>}/>
    <Route path='*' element={<Error/>}/>
  </Routes>
</BrowserRouter> */}

{/* <Nav clc={clc}/>
<Home item={item}/> */}



    {/* <GrApple/>
    <GrAndroid /> 
    <GrAnnounce />*/}

    {/* <Bubble/> */}
       {/* <Todolist2/> */}
       {/* <Stars/> */}
       {/*<Quiz/> */}
       {/* <Popup/> */}
       {/* <Result/> */}
{/* 
    <name.Provider value={'Ali'}>
    <name2.Provider value={'Khan'}>
        <First />
    </name2.Provider>
    </name.Provider> */}

    {/* <Notification/> */}

    </>
  )

}

export default App
// export {name,name2}

// <div>
//                   <input onClick={get_inp} className="" name="radio" type="radio" id="one" /> 
//                    <label for="one">{quizData[question_number].options[0]}</label> <br/>    
//                  </div> 
//                 <div>
//                   <input onClick={get_inp} className="" name="radio" type="radio" id="one" /> 
//                    <label for="one">{quizData[question_number].options[1]}</label> <br/>    
//                  </div> 
//                 <div>
//                   <input onClick={get_inp} className="" name="radio" type="radio" id="one" /> 
//                    <label for="one">{quizData[question_number].options[2]}</label> <br/>    
//                  </div> 
//                 <div>
//                   <input onClick={get_inp} className="" name="radio" type="radio" id="one" /> 
//                    <label for="one">{quizData[question_number].options[3]}</label> <br/>    
//                  </div> 