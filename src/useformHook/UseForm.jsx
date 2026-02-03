
import Submit from "./user";
function App(){
    const handle = async()=>{
        await new Promise((resolve ) => setTimeout(resolve,2000));
        console.log("button click")
    }
     return (
        <div>
            <h1>Use Form of Hook</h1> 
            <form action={handle}>
            <Submit/>
            </form>
        </div>
     )
}
export default App;