import React from "react";

function Child( {name}){
   console.log("child component run");
    return(
      <div>
       <p>My Name is {name}</p>
       <button onClick={name}>click</button>
       </div>
    )
}
export default React.memo(Child);