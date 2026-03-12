import React from 'react'
import axios from "axios";

const Axious = () => {

    const GetData = async ()=>{
      const responce= await axios.get('https://jsonplaceholder.typicode.com/users')
      const Data  = await responce.data
      console.log(Data);
    
    }

  return (
    <div>
        <button onClick={GetData}>Get Data</button>
    </div>
  )
}
export default Axious 