import React from 'react'
import { useState, useEffect} from "react";

const EffectHook = () => {
    const [count, setcount] = useState(0)
    const [Total, setTotal] = useState(0)
    // Variation 1
    // useEffect(() => {
    //   console.log("I'll Run on each and every Render");
      
    // }, )

    // Variation 2
    // useEffect(() => {
    //   console.log("I'll Run on only 1st Render");
    // },[])


    // Variation 3
    // useEffect(() => {
    //   console.log("I'll Run on each time when count is updated");
    // },[count])


    // Variation 4
    // useEffect(() => {
    //   console.log("I'll Run on each time when count is updated");
    // },[count,Total])



      // Variation 5
    // useEffect(() => {
    //   console.log("Count Is updated");
      
    //   return () => {
    //     console.log("Cound is unmounted form UI");
        
    //   }
    // }, [count])
    
    
    

const BtnHandeler = ()=>{
        setcount(count+1)
    }
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={BtnHandeler}>Click Me</button>
        <br />

         <h1>{Total}</h1>
        <button onClick={()=>{
            setTotal(Total+1)
        }}>Click Me for Total</button>
    </div>
  )
}

export  default EffectHook ;
