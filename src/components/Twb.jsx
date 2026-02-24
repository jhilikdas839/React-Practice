import React from "react";
import {useState} from "react"

const Twb = () => {
    const [title,settitle] = useState("")
   

  const Handeler = (e) => {

    e.preventDefault();

    console.log("From Submitted by",title);
    settitle("")
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          Handeler(e);
        }}
      >
        <input type="text" 
        placeholder="Enter your name" 
        value={title}
        onChange={(e)=>{
        
        settitle(e.target.value);
            
        }}
        
        />
        <button>Submit</button>
      </form>
    </div>
  );
};
export default Twb;
