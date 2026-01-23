
//use of Ref in uncontrolled component

import { useRef } from "react";
function App (){
const nameRef  =useRef(null);
const ageRef = useRef (null);
const handleSubmit = (event) =>{
  event.preventDefault();

  const name = nameRef.current.value;
  const age = ageRef.current.value;
  alert(`name = ${name} , age =${age}`);
}
  return(
<div>
    <h1> Uncontrolled component</h1>
 <form  onSubmit={handleSubmit}>
    <input type = "text"  ref={nameRef} placeholder="Enter your name "></input>
    <br></br>
    <input type = "number" ref={ageRef} placeholder="Enter your age "></input>
    <br />
    <button>Submit</button>
 </form>

</div>  );
  

}
export default App;