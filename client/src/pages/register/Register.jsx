import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./register.scss";

const Register = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [ errorMessage, setErrorMessage] = useState("Please try another username or email and fill all the fields.");
    const [ er, setEr] = useState(false);
    const navigate = useNavigate();

    const handleClick = async(e) =>{
        e.preventDefault();
        try{
            const res = await axios.post("http://localhost:5000/api/auth/register",{
                username,
                email,
                password,
            });
            if(res.status === 200){
                navigate("/login");
            }
        }catch(err){
            setEr(true);
        }
    }

    return (
        <div className="reg__container">
            <div className="reg__wrapper">
                <h1 className="title">CREATE AN ACCOUNT</h1>
                <form>
                    <input 
                        value={username}
                        placeholder="Username"
                        onChange={(e)=>setUsername(e.target.value)}
                    />
                    <input 
                        value={email}
                        type="email"
                        placeholder="Email"
                        onChange={(e)=>setEmail(e.target.value)}
                    />
                    <input 
                        value={password}
                        type="password"
                        placeholder="Password"
                        onChange={(e)=>setPassword(e.target.value)}
                    />
                    {er && <span className="agreement warning">{errorMessage}</span>}
                    <span className="agreement">
                        By creating an account, I consent to the processing of my personal
                        data in accordance with the <a href="#"><b>PRIVACY POLICY</b></a>
                    </span>
                    <button
                        className="btn"
                        type="submit"
                        onClick={handleClick}
                    >
                        CREATE
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Register