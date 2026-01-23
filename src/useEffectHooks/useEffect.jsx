import { useEffect, useState } from "react"

function App(){
  const [count , setCount] = useState(0);
  const [data, setData ] = useState(0);
  useEffect(()=>{
console.log("component Mount");
return()=>{
  console.log("component unmounted")
}
  },
[])
useEffect(()=>{
  if(count>1 || data>1){
    console.log("count updated");
  }
},[count , data])
  return(
<div>
  <h1>Count :{count} </h1>
  <h1>Data: {data}</h1>
  <button onClick={()=> setCount(count+1)}>Increment count</button><br></br><br></br>
    <button onClick={()=> setData(data+1)}>Increment data</button>
    <button onClick={()=>{ setCount(0) ; setData(0); }}>Reset</button>

</div>
  );
}
export default App;