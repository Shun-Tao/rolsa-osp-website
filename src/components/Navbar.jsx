import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
    return (
        <div className = "navbar">
            <div className = "nav-left">
                <Link to="/" className="home-button-nav">
                Rolsa Technologies
                </Link>
            </div>
            <div className = "nav-middle">
                <Link to="/" className="home-button-nav">
                Home
                </Link>
                <Link to="/calculator" className="calc-button-nav">
                Calculator
                </Link>
                <Link to="/tracker" className="tracker-button-nav">
                Tracker
                </Link>
                <Link to="/products" className="products-button-nav">
                Products
                </Link>
                <Link to="/schedule" className="schedule-button-nav">
                Schedule
                </Link>

            </div>

            <div className = "nav-right">
                <Link to ="/settings" className="settings-button-nav">
                Settings
                </Link>
            </div>
        </div>
    );
}

