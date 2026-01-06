import { Routes, Route } from 'react-router-dom';
<<<<<<< HEAD
import Home from "./pages/Home.jsx"
import Calculator from "./pages/Calculator.jsx"
import Products from "./pages/Products.jsx"
import EnergyTracker from "./pages/EnergyTracker.jsx"
=======
>>>>>>> 15167949dea1d1bde66151ef253a750cc3560e97
import './App.css'
import Home from "./pages/Home/Home.jsx"
import Calculator from "./pages/Calculator/Calculator.jsx"
import Tracker from "./pages/Tracker/Tracker.jsx"
import Products from "./pages/Products/Products.jsx"
import Booking from "./pages/Booking/Booking.jsx"
import Settings from "./pages/Settings/Settings.jsx"
import Profile from "./pages/Profile/Profile.jsx"


function App() {
  return (
    <Routes>
        <Route path= "/" element ={<Home/>}/>
        <Route path= "/products" element ={<Products/>}/>
        <Route path= "/calculator" element ={<Calculator/>}/>
<<<<<<< HEAD
        <Route path= "/energyTracker" element ={<EnergyTracker/>}/>
=======
        <Route path= "/tracker" element ={<Tracker/>}/>
        <Route path= "/products" element ={<Products/>}/>
        <Route path= "/booking" element ={<Booking/>}/>
        <Route path= "/settings" element ={<Settings/>}/>
        <Route path= "/profile" element ={<Profile/>}/>
>>>>>>> 15167949dea1d1bde66151ef253a750cc3560e97
    </Routes>
  )
}

export default App;
