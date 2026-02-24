import React from "react";
import { useState } from "react";
const Counter = () => {
  const [Num, setNum] = useState(0);

  return (
    <div>
      <h1>{Num}</h1>
      <button
        onClick={() => {
          setNum(Num + 1);
        }}
      >
        Increse
      </button>
      <button
        onClick={() => {
          if(Num > 0){
            setNum(Num - 1)
          };
        }}
      >
        decrese
      </button>
    </div>
  );
};

export default Counter;
