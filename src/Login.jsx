import React, { useState } from 'react'
import Amazon_Logo from "./image/Amazon_Logo.png"
import "./Login.css"
import { Link } from 'react-router-dom'

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signIn =(e)=>{
        e.preventDefault()
        console.log(email);
        console.log(password);
        // link this with firebase
    }

    const register =(e) =>{
        e.preventDefault()
        console.log("register");
        // link with firebase
    }

  return (
    <div className='login'>
      <Link to="/">
        <img className='login__logo' src="https://1000logos.net/wp-content/uploads/2016/10/Amazon-Logo.png" alt="" />
      </Link>
      <div className="login__container">
        <h1>Sign In</h1>
        <form className='login__formData' action="">

            <h5>Email</h5>
            <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>

            <h5>Password</h5>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} />

            <button type='submit' onClick={signIn} className='login__signInButton'>Sign-In</button>
         </form>
         <p>
                By Signing inyou agree to this Amazon Clone Conditions of 
                Use & Save. Please read our Privacy Policy, Cookies Policy
                and Interest-Based Ads Policy.
            </p>
            <button onClick={register} className='login__registerButton'>Create Your Account</button>
        
      </div>
    </div>
  )
}

export default Login
