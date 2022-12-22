import React, { useState } from 'react';
import GoogleButton from 'react-google-button';
import { auth } from '../firebase';
import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth';
import { Navigate, useNavigate } from "react-router-dom";
import UsersService from '../service/UsersService';
import App from '../App';





function Login() {
    const navigate = useNavigate();

    const style = {
        wrapper: `padding-left:100px`
    }


    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
       signInWithRedirect(auth, provider);
       navigate('/');

    }
  


    return (

        <div className="App">
            <div className="login-page">
                <div className="form">
                    <div className="login">
                        <div className="login-header">
                            <h3>LOGIN</h3>
                            <p>Please Signin with google to verify the user</p>
                        </div>
                    </div>
                    <form className="login-form">
                        <div className={style.wrapper}>
                            <GoogleButton classname='googleButton' onClick={googleSignIn} />
                        </div>
                        <p className="message">Not registered? <a href="https://support.google.com/accounts/answer/27441?hl=en" >Create an account</a></p>
                    </form>
                </div>
            </div>


        </div>
    );




}
export default Login;