import './App.css';
import React, { useEffect } from 'react';
import Header from './Header';
import Home from './Home';
import { BrowserRouter, Routes ,Route} from 'react-router-dom';
import Checkout from './Checkout';
import Login from './Login';
import { onAuthStateChanged } from 'firebase/auth';
// import {getAuth} from "firebase/auth"
import { useStateValue } from './StateProvider';
// import {firebaseApp} from "./firebase"
import { auth } from './firebase';

function App() {
  const [{}, dispatch] = useStateValue();
  // const auth = getAuth(firebaseApp); // getting the auth instance

  useEffect(()=>{
    // will only run once when the app component loads.
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      console.log("THE USER is >>", authUser);

      if(authUser){
        // the user just logged in (it will remain logged in
        // even after reloading the page)
        dispatch({
          type : "SET_USER",
          user : authUser
        });
      }
      else{
        // the user logged Out
        dispatch({
          type : "SET_USER",
          user : null
        });
      }
    });

    return () => unsubscribe();
  }, [auth, dispatch])

  return (
     // BEM
    <BrowserRouter>
      <div className="app">
        <Routes>
         <Route path='/' element={[<Header />, <Home />]}/>
         <Route path='/checkout' element={[<Header />, <Checkout />]}/>
         <Route path='/login' element={<Login />}/>
        </Routes>
      </div>
    </BrowserRouter>
   
  );
}

export default App;
