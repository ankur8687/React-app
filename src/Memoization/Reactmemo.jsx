import { useState } from "react";
import Child from "./user"; 
function App(){
    const [count , setCount] = useState(0);
    return (
        <div>
            <h1>React Memoization</h1>
            <Child  name =  "Ankur"/>
              <p> count: {count}</p>
            <button onClick={()=> setCount(count +1)}>Increment</button> <br /><br />
            <button  onClick={()=> setCount(count -1)}>Decrement</button>
        </div>
    )
}
export default App;