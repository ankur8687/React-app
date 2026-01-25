import { useState } from "react";

function App() {

    const [name, setName] = useState ("");
    const [Email, setEmail] = useState ("");
    const [password, setPassword] = useState ("");
  const handle = (e)=>{
   e.preventDefault();
alert(`name: ${name} , Email: ${Email}, password: ${password}`)
  }
    return (

        <div>
            <h1>Hello</h1>

            <form  onSubmit={handle}>
                <input type="text" value={name} onChange={(e)=> setName(e.target.value)} placeholder="Enter your name"></input>
                <br></br>
                <input type="text"  value = {Email} onChange={(e)=> setEmail(e.target.value)} placeholder="Enter your Email"></input>
                <br />
                <input type="text"  value = {password} onChange={(e)=> setPassword(e.target.value)} placeholder="Enter your password"></input>
                <br />
                <button  type = "submit" >Submit</button>


            </form>
        </div>
    )

}

export default App;


