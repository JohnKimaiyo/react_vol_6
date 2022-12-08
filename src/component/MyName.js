import React from "react";

import { useState } from "react";

function MyName() {
  const [name, setName] = useState("john");
  
    const changeName = () => {
      setName("Kimaiyo");
    };

    return (
      <div>
        <p>My name {name}</p>
        <button onClick={changeName}>CLick me</button>
      </div>
    );
  };


export default MyName;
