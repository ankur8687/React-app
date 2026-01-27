function User({change,name}){

    return(
       
<>
        <button onClick={()=>change(name)}>Click Me</button>
        </>
       
    )
}
export default User;