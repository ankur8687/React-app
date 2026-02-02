// import { forwardRef } from "react";
// function User( props , ref){
//     return(
//         <div>
//       <input type="text" ref={ref}/>
//         </div>
//     )
// }
// export default forwardRef(User);

// For React  19 or above user
const User = (props) =>{
    return(
         <div>
            <input type="text"  ref={props.ref}  />
         </div>
    )
}
export default User;