import React from 'react'

const Api = () => {

const GetData = async ()=>{
  const responce = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await responce.json()
  console.log(data);
  
    
}

  return (
    <div>
      <button onClick={GetData}>GET API</button>
    </div>
  )
}

export default Api
