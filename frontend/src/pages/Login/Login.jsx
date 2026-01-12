import Navbar from '../../components/Navbar/Navbar.jsx';
import './Login.css';

function Login(){
    return(
        <>
            <div className="background-page">
                <div className="login-page">
                    <Navbar/>
                    <p className="login-title">Sign In</p>
                    <div className="login-form">
                        <div className="login-inner">
                            <div className="Login-title"> </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;