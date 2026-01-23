
import {  useState } from "react";



// create a simple function 

// const App = ()=>{
//   let a = 2, b =6;
//   return (
//   <button onClick = {()=>alert(a+b)}>Click me</button>)
// }


// use of state
const App = () => {
  const [name, setName] = useState("Goku");

  return(
<div  className = "App">
  <h1>Name: {name}</h1>

  <button onClick ={()=>setName("Ankur")}>Click me</button>
</div>
  );
}

export default App;