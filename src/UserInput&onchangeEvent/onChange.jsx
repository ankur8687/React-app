//user  input and onchange event;

function App (){
  const [name , setName] =useState("")
  return (
    <div>
<input type = "text" value ={name} 
onChange={(event)  => setName(event.target.value)}
placeholder="Enter your name "></input>
   <p>Live preview : { name}</p>
   <button onClick ={() => setName("")}>Clear</button>
 
   
   </div>
  );
};
export default App;