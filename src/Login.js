import { Button } from '@material-ui/core';
import React from 'react';
import { auth, provider } from './firebase';
import './Login.css';

function Login() {

    const signIn =() =>{


        auth.signInWithPopup(provider)
        .catch(error=>alert(error.message));
    };

    return (
        <div className="login">

        <div className="login__page">

        <img className="login__logo" src="https://s22908.pcdn.co/wp-content/uploads/2016/07/imessage.png" alt="imessage"/>

        <Button onClick={signIn} className="login__button">Sign In With Google</Button>




        </div>

        
            
        </div>
    )
}

export default Login
