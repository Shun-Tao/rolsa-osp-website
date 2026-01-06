import { NavLink } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
    return (
        <div className = "navbar">
<<<<<<< HEAD
            <div className = "nav-one">
                <NavLink to="/" className="home-button-nav">
                Home
                </NavLink>
            </div>
            <div className = "nav-two">
                <NavLink to="/calculator" className="home-button-nav">
                Calculator
                </NavLink>
            </div>
            <div className = "nav-three">
                <NavLink to="/products" className="home-button-nav">
                Products
                </NavLink>
            </div>
            <div className = "nav-four">
                <NavLink to="/energyTracker" className="home-button-nav">
                Energy Tracker
                </NavLink>
=======
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
                <Link to="/booking" className="Booking-button-nav">
                Booking
                </Link>

            </div>

            <div className = "nav-right">
                <Link to ="/settings" className="settings-button-nav">
                Settings
                </Link>
>>>>>>> 15167949dea1d1bde66151ef253a750cc3560e97
            </div>
        </div>
    );
}