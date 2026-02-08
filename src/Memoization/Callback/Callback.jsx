import { useCallback, useState } from "react";
import User from "./user";
function App(){
  const [count, setCount] = useState(0);
  // const handle = ()=>{
  //   console.log("i am clicked");
  // }

  const handle = useCallback(()=>{
    console.log("i am clicked");
  }, []);
  return (
    <div>
      <h1>useCallback Hook</h1>
<User name = {handle}/>
<h2>Count: {count}</h2>
<button onClick={()=> setCount(count+1)}>Click me</button>
    </div>
  )
}
 export default App;