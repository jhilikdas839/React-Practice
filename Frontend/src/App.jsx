
import axios from './api/AxiosConfig'
import {useEffect} from "react"
function App() {

const getUser = async ()=>{
  try {
    const res = await axios.get("/Users")
    console.log(res.data);
    
  } catch (error) {
    console.log(error);
    
  }
}

useEffect(() => {
  getUser()
}, [])


  return (
    <div className='text-blue-700'>App</div>
  )
}

export default App