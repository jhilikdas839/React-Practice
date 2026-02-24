import React from 'react'
import {useState} from 'react'
const Obj = () => {
const [obj, setobj] = useState(
    {
        name:"jhilik",
        age:21
    }
)
  return (
    <div>
        <h1>{obj.name} , {obj.age}</h1>
        <button onClick={()=>{
            const newobj = {...obj,name:"sudipto",age:21}
            setobj(newobj)
        }}>Click</button>
    </div>
  )
}

export default Obj;