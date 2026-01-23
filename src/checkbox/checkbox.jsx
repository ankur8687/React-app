
//make a checkbox and reset button in react 


import { useState } from "react"

function App() {
    const [select, setSelect] = useState({
        html: false,
        css: false,
        js: false,
    });

    return (
        <div>
            <h1>my checkbox</h1>
            <label>
                <input type="Checkbox" checked={select.html} onChange={(e)=> {
                    setSelect({...select,html: e.target.checked})
                }}  />
                html
            </label>
              <br></br>
            <label>
                <input type="Checkbox" checked={select.css} onChange={(e)=> {
                    setSelect({...select,css: e.target.checked})
                }} />
                css
            </label>
           <br></br>
            <label>
                <input type="Checkbox" checked={select.js} onChange={(e)=> {
                    setSelect({...select,js: e.target.checked})
                }}  />
                js
            </label>
            <br></br>
      <button onClick={()=>{
        setSelect({html:false, css:false, js:false})
      }}>reset</button>
        </div>
    )
}
export default App;