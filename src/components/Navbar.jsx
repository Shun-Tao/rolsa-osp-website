import { NavLink } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
    return (
        <div className = "navbar">
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
            </div>
        </div>
    );
}