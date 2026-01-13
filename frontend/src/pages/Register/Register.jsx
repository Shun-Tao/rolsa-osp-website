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
                    <p className="register-title">Sign Up</p>

                    <div className="register-form">
                        <div className="register-inner">

                            <div className="register-input">Username: </div>
                            <div className="input-account">
                                <input
                                    type="text"
                                    placeholder="John Doe"
                                    id="username"
                                    name="username"
                                    value={registerData.username}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="register-input">Phone number: </div>
                            <div className="input-account">
                                <input
                                    type="text"
                                    placeholder="07XXX XXXXXX"
                                    id="telephone"
                                    name="telephone"
                                    value={registerData.telephone}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="register-input">Email: </div>
                            <div className="input-account">
                                <input
                                    type="text"
                                    placeholder="example@gmail.com"
                                    id="email"
                                    name="email"
                                    value={registerData.email}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="register-input">Password: </div>
                            <div className="input-account">
                                <input
                                    type="text"
                                    placeholder="********"
                                    id="password"
                                    name="password"
                                    value={registerData.password}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="register-input">Confirm Password: </div>
                            <div className="input-account">
                                <input
                                    type="text"
                                    placeholder="********"
                                    id="cPassword"
                                    name="cPassword"
                                    value={registerData.cPassword}
                                    onChange={handleChange}
                                />
                            </div>

                            <button>Register Account</button>

                            <p className = 'login'>Already have an account? <Link to="/login" className="login-link">Sign in</Link></p>
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}

export default Register;