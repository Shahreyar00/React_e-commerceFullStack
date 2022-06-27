import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/apiCalls';
import "./login.scss";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const {isFetching, error} = useSelector((state)=>state.user);


    const handleClick = (e) =>{
        e.preventDefault();
        login(dispatch,{username, password});
    }

    return (
        <div className="login__container">
            <div className="login__wrapper">
                <h1 className="title">SIGN IN</h1>
                <form>
                    <input 
                        placeholder="Username" 
                        onChange={(e)=>setUsername(e.target.value)}
                    />
                    <input 
                        type="password" 
                        placeholder="Password"  
                        onChange={(e)=>setPassword(e.target.value)}  
                    />
                    <button
                        className="btn"
                        onClick={handleClick}
                        disabled={isFetching}
                    >
                        LOGIN
                    </button>
                    {error && <span className="err">Something went wrong...</span>}
                    <a href="#" className="passGen">DO NOT REMEMBER YOUR PASSWORD?</a>
                    <a href="#">CREATE A NEW ACCOUNT</a>
                </form>
            </div>
        </div>
    )
}

export default Login