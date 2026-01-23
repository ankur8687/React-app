import { useState } from "react";

function App() {
    const [gender, setGender] = useState("");
    const [country, setCountry] = useState("Uk");
    return (
        <div>
            <h1> make a Radio button & dropdown</h1>
            <h2> select Gender</h2>
            <div>
                <label>
                    <input type="radio" value="male" name="gender" checked={gender === "male"}
                        onChange={(e) => setGender(e.target.value)} />
                    Male
                </label>
                <br></br>
                <label>
                    <input type="radio" value="female" name="gender" checked={gender === "female"}
                        onChange={(e) => setGender(e.target.value)} />
                    Female
                </label>
                <br></br>
                <label>
                    <input type="radio" value="other" name="gender" checked={gender === "other"}
                        onChange={(e) => setGender(e.target.value)} />
                    Other
                </label>
                <br></br>

                <div>

                    <h1>DropDown country name</h1>
                    <select value={country} onChange={(e) => setCountry(e.target.value)}>
                        <option value="India">india</option>
                        <option value="Uk">Uk</option>
                        <option value="Usa">Usa</option>
                        <option value="norway">norway</option>
                        <option value="Uae">Uae</option>
                    </select>

                </div>
                <h1>selected country name :{country}
                </h1>
            </div>
        </div>
    )
}

export default App;