import React, { useState } from 'react';
import './Login.css'
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import firebaseConfig from './firebase.config';
import { useHistory, useLocation } from 'react-router-dom';
import logo from '../../img/loginLogo.png'

const Login = (props) => {
    const history = useHistory();
    const location = useLocation();
    // @ts-ignore
    const { from } = location.state || { from: { pathname: "/" } };
    const config = firebaseConfig;
    // eslint-disable-next-line no-unused-vars
    const firebaseApp = initializeApp(config);
    const [signType, setSignType] = useState("login");
    const [error, setError] = useState("");
    const user = props.userInfo;
    const changeSignType = present => {
        present === "login" ? setSignType("signUp") : setSignType("login");
        setError("")
        props.setUserInfo({
            isLoggedIn: false,
            name: '',
            email: '',
            password: ''
        });
    };
    const updateUserInfo = e => {
        const newUserInfo = user;
        newUserInfo[e.target.name] = e.target.value;
        props.setUserInfo(newUserInfo);
    }
    const handleSignUp = e => {
        e.preventDefault();
        const auth = getAuth();
        if (validateEmail(user.email) && validatePassword(user.password)) {
            createUserWithEmailAndPassword(auth, user.email, user.password)
                .then(res => {
                    const newUserInfo = user;
                    newUserInfo.isLoggedIn = true;
                    newUserInfo.name = res.user.displayName;
                    newUserInfo.email = res.user.email;
                    props.setUserInfo(newUserInfo)
                    setError("")
                    history.replace(from);
                })
                .catch((error) => {
                    const errorMessage = error.message;
                    setError(errorMessage);
                });
        }
        else if (validateEmail(user.email)) {
            setError("Password is too weak")
        }
        else if (validatePassword(user.password)) {
            setError("Invalid Email")
        }
        else {
            setError("Invalid Email and weak password")
        }
    }
    const handleLogin = e => {
        e.preventDefault();
        const auth = getAuth();
        signInWithEmailAndPassword(auth, user.email, user.password)
            .then(res => {
                const newUserInfo = user;
                newUserInfo.isLoggedIn = true;
                newUserInfo.name = res.user.displayName;
                newUserInfo.email = res.user.email;
                props.setUserInfo(newUserInfo)
                setError("")
                history.replace(from);
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError("Invalid email or password");
                console.log(errorMessage)
            });
            console.log(props.userInfo)
    }
    const validateEmail = email => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.toLowerCase());
    }
    const validatePassword = password => {
        const isPasswordValid = password.length > 6;
        const passwordHasNumber = /\d{1}/.test(password);
        return isPasswordValid && passwordHasNumber;
    }
    return (
        <div className="login-container d-flex align-items-center justify-content-center">
            {
                signType === "login" && <div className="login text-center">
                    <img className="my-3" width="250px" src={logo} alt="Red Onion" />
                    <hr />
                    <form onSubmit={handleLogin} className="text-start">
                        <label htmlFor="email">Email Address</label>
                        <input required onKeyUp={updateUserInfo} className="mb-2 mt-2 form-control" name="email" type="text" />
                        <label htmlFor="name">Password</label>
                        <input required onKeyUp={updateUserInfo} className="mt-2 mb-2 password form-control" name="password" type="password" />
                        <input type="submit" value="Login" className="btn btn-danger w-100" />
                        {
                            error && <h6 className="mt-3 text-danger">Failed. {error}</h6>
                        }
                    </form>
                    <h6 className="mt-4">Don't have account? <span onClick={() => changeSignType("login")}>Create a new one</span></h6>
                </div>
            }
            {
                signType === "signUp" && <div className="login text-center">
                    <img className="my-3" width="250px" src={logo} alt="Red Onion" />
                    <hr />
                    <form onSubmit={handleSignUp} className="text-start">
                        <label htmlFor="name">Name</label>
                        <input required onKeyUp={updateUserInfo} className="mb-2 mt-2 form-control" name="name" type="text" />
                        <label htmlFor="email">Email Address</label>
                        <input required onKeyUp={updateUserInfo} className="mb-2 mt-2 form-control" name="email" type="text" />
                        <label htmlFor="name">Password</label>
                        <input required onKeyUp={updateUserInfo} className="mt-2 password mb-2 form-control" name="password" type="password" />
                        <input type="submit" value="Sign Up" className="btn btn-danger w-100" />
                        {
                            error && <h6 className="mt-3 text-danger">Failed. {error}</h6>
                        }
                    </form>
                    <h6 className="mt-4">Already have an account? <span onClick={() => changeSignType("signUp")}>Login instead</span></h6>
                </div>
            }
        </div>
    );
};

export default Login;