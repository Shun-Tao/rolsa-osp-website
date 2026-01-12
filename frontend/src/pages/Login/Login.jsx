import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar.jsx';
import './Login.css';

function Login(){
    const[loginData,setLoginData] = useState({
        username: '',
        email: '',
        password: '',
        confirm_password:''
});

    function handleChange(event){
        setLoginData({...loginData, [event.target.name]: event.target.value});
    }

    return(
        <>
            <div className="background-page">
                <div className="login-page">
                    <Navbar/>
                    <p className="login-title">Sign In</p>

                    <div className="login-form">
                        <div className="login-inner">


                            <div className="Login-title">Email: </div>
                            <div className="input-form">
                                <input
                                    type="text"
                                    placeholder="example@gmail.com"
                                    id="email"
                                    name="email"
                                    value={loginData.email}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="Login-title">Password: </div>
                            <div className="input-form">
                                <input
                                    type="text"
                                    placeholder="********"
                                    id="password"
                                    name="password"
                                    value={loginData.username}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                    </div>

                <p className = 'signup'>Don't have an account? <Link to="/register" className="signup-link">Sign Up</Link></p>

                </div>
            </div>
        </>
    )
}

export default Login;