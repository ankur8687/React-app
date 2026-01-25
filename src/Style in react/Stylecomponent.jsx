import { useState } from 'react';
import styled from 'styled-components';
const Button = styled.button`
    background-color: #4CAF50; 
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 8px;
    `;
    const Welcome = styled.h1`
        color: ${(props)=> props.color || 'white'};
        font-size: 48px;
        background-color: #4d6d70;
        margin-bottom: 16px;
        border: 2px solid #000000a0;
        border-radius: 10px;
        box-shadow: 5px 5px 15px rgba(237, 232, 232, 0.3);
    `;

function App() {
const [color, setColor] = useState("brown");
    return (
        <div>
             
            <Welcome color={color}>Hello, React!</Welcome>
            <Button>Click Me</Button>
         
        </div>
        
    )
}
export default App;