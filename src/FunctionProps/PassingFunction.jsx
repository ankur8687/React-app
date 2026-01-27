import User from "./user.jsx";

function App() {
    const change = (name) => {
        alert(name);
    }

    return (
        <>
            <h1>Hello World</h1>
            <User change={change} name="Ankur" /><br></br>
            <User change={change} name="Rohit" /><br></br>
            <User change={change} name="Noob" /><br></br>
            <User change={change} name="king" /><br></br>


        </>
    );
}
export default App; 