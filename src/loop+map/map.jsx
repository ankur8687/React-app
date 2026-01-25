// import { useState } from "react";
// import User from "./user";

// function App(){
//   const books = [
//     {id:1, name:"book1 "    },
//      {id:2, name:"book2"    },
//       {id:3, name:"book3"    },
//   ];
//   const [vegetable , useVegetable] = useState(['carrot', 'potato', 'tomato']);
//   const fruits = ['apple' , 'banana', 'orange'];
//   const user = ['ankur', 'bob','roy'];
//   return(
// <div>
//   <h1>Map loop</h1>
//   <ul>
//     {
//       fruits.map((fruits, index)=>(
//         <li key = {index}>{fruits}</li>
//       ))
//     }
//   </ul>
//   <ul>
//     {
//       books.map((book)=>
//       (<li key ={book.id}>{book.name}</li>))
//     }
//     <br></br>
//     {/*use of filter  +map  */}
//     {
//       books.filter((book)=> book.id>1)
//       .map((book)=>(
//         <li key = {book.id}>{book.name}</li>
//       ))
//     }
     
//   </ul>
//   <ul>
//     {
//   user.map((user ,index)=>(
// <User key={index} item={user}/>
//   ))
//     }
//   </ul>

// </div>
//   )
// }
// export default App;


import { useState } from "react";
import User from "./user";

function App(){
  const books = [
    {id:1, name:"book1 "    },
     {id:2, name:"book2"    },
      {id:3, name:"book3"    },
  ];
  const [vegetable , useVegetable] = useState(['carrot', 'potato', 'tomato']);
  const fruits = ['apple' , 'banana', 'orange'];
  const user = ['ankur', 'bob','roy'];
  return(
<div>
  <h1>Map loop</h1>
  <ul>
    {
      fruits.map((fruits, index)=>(
        <li key = {index}>{fruits}</li>
      ))
    }
  </ul>
  <ul>
    {
      books.map((book)=>
      (<li key ={book.id}>{book.name}</li>))
    }
    <br></br>
    {/*use of filter  +map  */}
    {
      books.filter((book)=> book.id>1)
      .map((book)=>(
        <li key = {book.id}>{book.name}</li>
      ))
    }
     
  </ul>
  <ul>
    {
  user.map((user ,index)=>(
<User key={index} item={user}/>
  ))
    }
  </ul>

</div>
  )
}
export default App;