import React from 'react'

const LocalStorage = () => {
    // How to Clear data to local storage
    // localStorage.clear()

    // How to Set data to local stroge
    // localStorage.setItem('user','jhilik') 
    // localStorage.setItem('age','21') 

    // How to get any item from local storage;
    // const user =  localStorage.getItem('user')
    // const age =  localStorage.getItem('age')
    // localStorage.removeItem('age')
    // console.log(user,age);
     
    // localStorage.clear()
    const user = {
        name:'jhilik',
        city:'malda',
        age:21
    }
    
    localStorage.setItem('user',JSON.stringify(user))
   
    const getUser = JSON.parse(localStorage.getItem('user'))
    console.log(getUser);
    
    
   
    
    
  return (
    <div>
      <h1>Local Storage</h1>
    </div>
  )
}

export default LocalStorage
