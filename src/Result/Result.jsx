import { useState } from "react";

let Result = () => {

  let [input, setInput] = useState("");
  let [data, setData] = useState("");

  let clc = () => {
    setData(input);
  };

  return (
    <>
      <div>
        <h3>Enter student name</h3>

        <input
          className="border"type="text" value={input} onChange={(e) => setInput(e.target.value)}
        />

        <button onClick={clc}className="border w-20 h-7 bg-olive-700 text-white cursor-pointer"> 
             Enter
        </button>
      </div>

      <div className="border w-40 h-40 flex-wrap">{data}
      </div>
    </>
  );
};

export default Result;