import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
    return (
        <div className = "navbar">
            <div className = "nav-left">
                <Link to="/" className="home-button-nav">
                Home
                </Link>
            </div>
            <div className = "nav-right">
                <Link to="/calculator" className="home-button-nav">
                Calculator
                </Link>
            </div>
        </div>
    );
}

