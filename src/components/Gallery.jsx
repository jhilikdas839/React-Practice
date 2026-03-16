import React from "react";
import axios from "axios";
import { useState,useEffect } from "react";

const Gallery = () => {
  const [Users, setUsers] = useState([]);
  const [Index, setIndex] = useState(1);

  const getData = async () => {
    const responce = await axios.get(
      `https://picsum.photos/v2/list?page=${Index}&limit=10`,
    );
    console.log(responce.data);
    setUsers(responce.data);
  };

  const userList = Users.map((elem, idx) => {
    return (
      <div className="Main" key={idx}>
        <h1>{elem.author}</h1>
        <img src={elem.download_url}></img>
      </div>
    );
  });

  useEffect(() => {
    getData()
  }, [Index])
  

  return (
    <div>
      <button
        onClick={() => {
         if (Index > 1) {
          setIndex(Index-1)
          console.log(Index);
         }
         
         
        }}
      >
        Prev
      </button>
      <br></br>
      <br></br>
      <button
        onClick={() => {
         setIndex(Index+1)
         console.log(Index);
        }}
      >
        Next
      </button>
      <br></br>
      <br></br>
      <button onClick={getData}>Get Data</button>
      <div>{userList}</div>
    </div>
  );
};
export default Gallery;
