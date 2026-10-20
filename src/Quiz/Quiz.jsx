import { useState } from "react";

let Quiz = ()=>{

let [question_number , setQuestion_number] = useState(0)
let [answer , setAnswer] = useState('')
let [number , setNumber] = useState(0)

const quizData = [
  {
    question: "In which year was Hazrat Ali (R.A) martyred?",
    options: ["660", "661", "662", "663"],
    answer: "661"
  },
  {
    question: "Who was the first Caliph of Islam?",
    options: [
      "Hazrat Umar (R.A)",
      "Hazrat Abu Bakr (R.A)",
      "Hazrat Usman (R.A)",
      "Hazrat Ali (R.A)"
    ],
    answer: "Hazrat Abu Bakr (R.A)"
  },
    {
    question: "Who was the first Caliph of Islam?",
    options: [
      "Hazrat Umar (R.A)",
      "Hazrat Abu Bakr (R.A)",
      "Hazrat Usman (R.A)",
      "Hazrat Ali (R.A)"
    ],
    answer: "Hazrat Abu Bakr (R.A)"
  },
  {
    question: "How many obligatory prayers are there in Islam each day?",
    options: ["3", "4", "5", "6"],
    answer: "5"
  },
  {
    question: "Which is the first month of the Islamic calendar?",
    options: ["Ramadan", "Muharram", "Shawwal", "Rajab"],
    answer: "Muharram"
  },
  {
    question: "How many Surahs are there in the Quran?",
    options: ["110", "112", "114", "116"],
    answer: "114"
  },
  {
    question: "Which Surah is the longest in the Quran?",
    options: [
      "Surah Al-Fatiha",
      "Surah Al-Baqarah",
      "Surah Al-Ikhlas",
      "Surah Yaseen"
    ],
    answer: "Surah Al-Baqarah"
  },
  {
    question: "Which Surah is known as the heart of the Quran?",
    options: [
      "Surah Yaseen",
      "Surah Al-Falaq",
      "Surah Al-Kahf",
      "Surah An-Nas"
    ],
    answer: "Surah Yaseen"
  },
  {
    question: "How many pillars of Islam are there?",
    options: ["3", "4", "5", "6"],
    answer: "5"
  },
  {
    question: "Which city is the Kaaba located in?",
    options: ["Madinah", "Makkah", "Jerusalem", "Taif"],
    answer: "Makkah"
  },
  {
    question: "In which month do Muslims fast?",
    options: ["Muharram", "Ramadan", "Shaban", "Dhul-Hijjah"],
    answer: "Ramadan"
  },
  {
    question: "Which angel brought revelation to Prophet Muhammad (P.B.U.H)?",
    options: [
      "Angel Mika'il (A.S)",
      "Angel Israfil (A.S)",
      "Angel Jibril (A.S)",
      "Angel Azrail (A.S)"
    ],
    answer: "Angel Jibril (A.S)"
  },
  {
    question: "What is the first Surah of the Quran?",
    options: [
      "Surah Al-Baqarah",
      "Surah Al-Fatiha",
      "Surah Yaseen",
      "Surah Al-Ikhlas"
    ],
    answer: "Surah Al-Fatiha"
  },
  {
    question: "How many times do Muslims perform Hajj as an obligation, if they are able?",
    options: ["Once", "Twice", "Three times", "Every year"],
    answer: "Once"
  },
  {
    question: "Which prophet is known as Khalilullah (Friend of Allah)?",
    options: [
      "Prophet Musa (A.S)",
      "Prophet Ibrahim (A.S)",
      "Prophet Isa (A.S)",
      "Prophet Nuh (A.S)"
    ],
    answer: "Prophet Ibrahim (A.S)"
  },
  {
    question: "Which is the second pillar of Islam?",
    options: [
      "Salah",
      "Zakat",
      "Sawm",
      "Hajj"
    ],
    answer: "Salah"
  }  
];

console.log(quizData.length)

let clc =()=>{
  
  if(question_number < (quizData.length - 1)){
    setQuestion_number(question_number + 1)
    console.log(answer)

    if(quizData[question_number].answer == answer){
      setNumber(number + 1)
    }

  }else{
    alert(`Your Numbers are ${number}`)
  }

}

let get_inp = (val)=>{

  setAnswer(val)
 
}

    return(
        <>
        <h1 className="text-2xl text-center font-bold">Quiz</h1>

        <div style={{padding:'0'}} className="quiz w-56 h-72 border rounded-xl absolute left-1/2 -translate-x-1/2 top-14">

            <div style={{padding:'10px'}} className="border-b">
                <h3 className="font-bold">{quizData[question_number].question}</h3>
            </div>

            <div className="" style={{padding:'10px'}}>
            {
                quizData[question_number].options.map((val,idx)=>{
                    return(
                        <div key={idx}>
                            <input onClick={()=> get_inp(val)} className="" name="radio" type="radio" id={idx} /> 
                            <label for={idx}>{val}</label> <br/>    
                        </div> 
                    )
                })
            }
            </div>

        <button onClick={clc} className="bg-sky-400 w-22 text-white absolute left-1/2 -translate-x-1/2 cursor-pointer">Next</button>

        </div>

        </>
    )
}

export default Quiz