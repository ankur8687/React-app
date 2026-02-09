import { useCallback, useState } from "react";
import User from "./user";
function App(){
   const[ data, setData] = useState([
    {id: 1, name:"john", age:20},
    {id:2, name:"alex", age:30},
    {id:3 ,name: "aman" , age:25 },
   ]);
  const [fruits ,setfruits] = useState(["apple", "mango","orange"]);
  const handle = ()=>{
    setfruits([...fruits, "banana"]);
  }
  const handledata = ()=>{
    const newData = data.map(item =>(
      item.id === 1 ? {...item, age:item.age+1} : item
    ))
    setData(newData);
  }
return (
  <div>
    <h1>Updation in Array </h1>
<h2> my fruits is </h2>
 
{
  fruits.map((item ,index)=>(
    <h3 key ={index}> {item}  </h3>
  ))
}
{
  data.map((item ) =>(
    <div key ={item.id}>
    <h2>
      name:{item.name} and age:{item.age}
    </h2>
    
    </div>
  ))
}
<br /><br />
<button onClick={handle}>add fruit</button><br /><br />
<button onClick={handledata}>update age</button>
  </div>
)
}
 export default App;