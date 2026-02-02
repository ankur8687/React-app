import { useRef } from "react";
import User from "./user";

function App(){
    const inputRef = useRef();
   const  Handle = ()=>{
inputRef.current.focus();
inputRef.current.style.backgroundColor ="Red";
inputRef.current.value ="Ankur";
    }
    return (
 <div>
    <h1>ForwardRef  in React</h1>
   <User  ref= {inputRef}/>
    <br></br>
    <br></br>
    <button onClick={Handle}>Click me</button>
 </div>
    );
}
 export default App;