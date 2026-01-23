import { useEffect, useState } from "react";
import Count from "./user";

function App(){
  const[count , setCount] = useState(0);
  function handle(){
    console.log("count clicked");
  }
  useEffect(()=>{handle()},[]);
  return(
<div>
  <h1>Parent comp </h1>
  <Count count ={count}/>
  <button
   onClick={()=> setCount(count+1)}>count</button>
</div>
  )
}
export default App;