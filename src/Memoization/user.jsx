import React from "react";

function Child( {name}){
   console.log("child component");
    return(
       <p>My Name is {name}</p>
    )
}
export default React.memo(Child);