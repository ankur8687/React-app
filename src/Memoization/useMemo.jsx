import { useMemo, useState } from "react";

function App(){
    const [count, setCount] = useState(0);
    const [number,setNumber] = useState(10);
    const Expensive =()=>{
        let result =0;
        for(let i =0; i<100000; i++){
            result += number;
        }
        return result;
    }
    const result = useMemo(() => Expensive(), [number]);
    // const result = Expensive();
    return (
        <div>
            <h1> Learning the wroking of UseMemo Hook </h1>
            <p>Expensive claculation: {result}</p>
          <p> Count: {count}</p>
          <button  onClick={()=> setCount(count+1)}>Click Me</button>
        </div>
    )
}
export default App;