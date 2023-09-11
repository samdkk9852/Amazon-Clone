import React, { useState } from 'react'
import "./Login.css"
import { Link, useNavigate } from 'react-router-dom'
// import { database } from './firebase'
import { createUserWithEmailAndPassword } from "firebase/auth"
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from "./firebase" 

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const history = useNavigate();

    const signIn =(e)=>{
        e.preventDefault()

        signInWithEmailAndPassword(auth, email, password)
        .then((data)=>{
            history("/")
        })
        .catch((error)=>{
            alert(error.message)
        })
        // link this with firebase
    }

    const register =(e) =>{
        e.preventDefault()

            createUserWithEmailAndPassword(auth, email, password)
            .then((data)=>{
                // it succesfully create a new user with and email & password
                console.log(data);
                if(data){
                    history("/")
                }
            })
            .catch((error)=>{
                alert(error.message)
            })
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
