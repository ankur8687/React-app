//use of if else in reactjs


const App = () =>{
  let name;
  let age ;
  let user = {
    name : "Ankur",
    age : 17,
  };

  function add(x,y){

    return x+y;
  }
  let vegetable = ["carrot" , "tomato" , "onion" , "potato"];
  return(
    <div>
      <input type = "text" placeholder ="enter your name"/>
       <button onclick>Submit</button>
       <input type ="number" placeholder ="enter your age"/>
       <button onClick >Submit</button>
      <p>{age<18 ? "you are minor" : "you are adult"}</p> 


    </div>
  )
}

export default App;




//           <p>({user.name} is  {user.age} year old) </p> 
//     <p>{vegetable[1]}</p>
//   {   vegetable.map((vegetable , index)=> {
//     return <p key ={index}>{vegetable}</p>
//   })}


