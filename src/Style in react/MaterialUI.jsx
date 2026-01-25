//use of material ui components in react 
// create a form with three input fields name , email , address and a submit button
// on submit alert the values of the input fields
// also display the values of the input fields below the form as a preview


import { Alert, Button, TextField, Box } from "@mui/material";
import { useState } from "react";


function App() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const handle = () => {
        alert(`name: ${name} , email: ${email}, address: ${address}`)
    }

    return (
        <div>
            <h1 className="text-3xl font-bold underline">Use of Material UI</h1>
            <Button variant="contained">click me</Button>
            <Alert severity="warning">This is a warning Alert.</Alert>
            <Box
                component="form"
                sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
                noValidate
                autoComplete="off"
            >
                <TextField id="name" value={name} onChange={(e) => setName(e.target.value)} label="Your Name" variant="outlined" />
                <TextField id="email" value={email} onChange={(e) => setEmail(e.target.value)} label="Your Email" variant="outlined" />
                <TextField id="address" value={address} onChange={(e) => setAddress(e.target.value)} label="Your Address" variant="outlined" />
                <Button variant="contained" onClick={() => handle()}>Submit</Button>

            </Box>
            <h2>Preview: <br></br> Name:{name} <br></br> Email:{email} <br></br>Address:{address}</h2>
        </div>
    )
}
export default App;