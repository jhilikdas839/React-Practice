import React from 'react'
import { useState } from "react";
const Demo = () => {

  const [arr, setarr] = useState([10,20,30])


  return (
    <div>
     <h1>{arr}</h1>
     <button onClick={()=>{
      const newarr = [...arr]
      console.log(newarr);
      newarr[0]=57;
      newarr[1]=69;
      newarr[2]=99;
      setarr(newarr)
      
     }}>Click</button>
    </div>
  )
}
export default Demo