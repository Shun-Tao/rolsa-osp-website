import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar.jsx';
import './Register.css';

function Register(){
    const[registerData,setRegisterData] = useState({
        username: '',
        email: '',
        password: '',
        confirm_password:''
});

    function handleChange(event){
        setRegisterData({...registerData, [event.target.name]: event.target.value});
    }

    return(
        <>
            <div className="background-page">
                <div className="register-page">
                    <Navbar/>
                    <p className="register-title">Sign In</p>

                    <div className="register-form">
                        <div className="register-inner">

                            <div className="Login-title">Username: </div>
                            <div className="input-form">
                                <input
                                    type="text"
                                    placeholder="John Doe"
                                    id="username"
                                    name="username"
                                    value={registerData.username}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="register-title">Email: </div>
                            <div className="input-form">
                                <input
                                    type="text"
                                    placeholder="example@gmail.com"
                                    id="email"
                                    name="email"
                                    value={registerData.email}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="register-title">Password: </div>
                            <div className="input-form">
                                <input
                                    type="text"
                                    placeholder="********"
                                    id="password"
                                    name="password"
                                    value={registerData.password}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="register-title">Confirm Password: </div>
                            <div className="input-form">
                                <input
                                    type="text"
                                    placeholder="********"
                                    id="cPassword"
                                    name="cPassword"
                                    value={registerData.cPassword}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                    </div>

                <p className = 'login'>Already have an account?<Link to="/login" className="login-link">Sign in</Link></p>

                </div>
            </div>
        </>
    )
}

export default Register;