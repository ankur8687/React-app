import { useState, useTransition } from "react";

function App(){
    // const [pending , setPending] =useState(false);
    const [pending , startTransition] = useTransition();
    // const Handle = async ()=>{
    //     setPending(true);
    //     // await new Promise((resolve) =>{
    //     //     setTimeout(()=>{
    //     //         resolve();
    //     //     },2000);
    //     // });
    //     await  new Promise ((resolve) => setTimeout(resolve ,2000));
    //     setPending(false);
    // }
    const Handle = ()=>{
    startTransition(async ()=> {
        await new Promise((resolve) => setTimeout(resolve,2000));
    });
    };
     return (
        <div>
   <h1>Use of Transition Hook</h1>
   {pending && <p>Loading...</p>}
   <button disabled ={pending} onClick={Handle}>Click me</button>
        </div>
     )
}
export default App;