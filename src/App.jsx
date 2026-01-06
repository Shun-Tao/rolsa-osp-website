import { Routes, Route } from 'react-router-dom';
import './App.css'
import Home from "./pages/Home.jsx"
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
        <Route path= "/tracker" element ={<Tracker/>}/>
        <Route path= "/products" element ={<Products/>}/>
        <Route path= "/booking" element ={<Booking/>}/>
        <Route path= "/settings" element ={<Settings/>}/>
        <Route path= "/profile" element ={<Profile/>}/>
    </Routes>
  )
}

export default App;
