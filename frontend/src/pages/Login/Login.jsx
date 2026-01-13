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


                            <div className="login-input">Email: </div>
                            <div className="input-account">
                                <input
                                    type="text"
                                    placeholder="example@gmail.com"
                                    id="email"
                                    name="email"
                                    value={loginData.email}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="login-input">Password: </div>
                            <div className="input-account">
                                <input
                                    type="text"
                                    placeholder="********"
                                    id="password"
                                    name="password"
                                    value={loginData.password}
                                    onChange={handleChange}
                                />
                            </div>

                        <button>Sign In</button>

                        <p className = 'signup'>Don't have an account? <Link to="/register" className="signup-link">Register</Link></p>

                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}

export default Login;