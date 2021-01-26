import React,{useState,useEffect} from 'react'
import { useDispatch } from "react-redux"
import { login } from "../features/userSlice"
import ValidateIcon from './ValidateIcon'
import './form.css'

function Form() {
   
   const [name, setName] = useState("")
   const [password, setPassword] = useState("")
   const [nameValidate, setNameValidate] = useState(false)
   const [passwordValidate, setPasswordValidate] = useState(false)

   const dispatch = useDispatch()


const submitHandler = (e) => {
 e.preventDefault();       

 if(name === 'hruday@gmail.com' && password === 'hruday123')
 {
    dispatch(login({                                // Updating the state value
        name:name,
        password:password,
        loggedIn:true
    }))
 }
 else{
     alert('Enter correct UserName and Password')
 }


}

useEffect(() => {                                         // Validating E-mail
if(name === 'hruday@gmail.com')
{
    setNameValidate(true)
}
else{
    setNameValidate(false)

}
}, [name])

useEffect(() => {                              // Validating Password
    if(password === 'hruday123')
    {
        setPasswordValidate(true)
    }
    else{
        setPasswordValidate(false)
    
    }
    }, [password])

    return (
<div className="main-back" id="LoginForm">
<div className="container">
<div className="login-form">
<div className="main-div">
    <div className="panel">
   <h2>Admin Login</h2>
   <p>Please enter your email and password</p>
   </div>
    <form id="Login" onSubmit={(e) => submitHandler(e)}>

        <div className="form-group row">
<div className="col-10">

            <input type="email" className="form-control" id="inputEmail" placeholder="Email Address" 
            value={name} 
            onChange={(e) => setName(e.target.value)}/>
            </div>
            <div className="col-2">

            <ValidateIcon value={nameValidate}/>
            </div>

        </div>

        <div className="form-group row">
        <div className="col-10">

            <input type="password" className="form-control" id="inputPassword" placeholder="Password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                        <div className="col-2">

            <ValidateIcon value={passwordValidate}/>
            </div>

        </div>
        
        <button type="submit" className="btn btn-primary">Login</button>

    </form>
    </div>
</div>
</div>


</div>


  
    )
}

export default Form
