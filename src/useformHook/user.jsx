import {useFormStatus} from "react-dom";

function Submit(){
    const{pending} = useFormStatus();
    return(
         <div>
            <input type="text" name="Username"  placeholder="UserName"/> <br /><br />
            <input type="text" name="Email" placeholder="Email"/><br /><br />
            <input type="text" name="Address" placeholder="Address"/> <br /><br />
            <button type="submit" disabled={pending}>{pending ? "Submitting" : "Submit"}</button>
         </div>
    )
}
export default Submit;