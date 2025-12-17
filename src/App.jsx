import { Routes, Route } from 'react-router-dom';
import './App.css'
import Home from "./pages/Home.jsx"
import Calculator from "./pages/Calculator.jsx"
import Tracker from "./pages/Tracker.jsx"
import Products from "./pages/Products.jsx"



function App() {
  return (
    <Routes>
        <Route path= "/" element ={<Home/>}/>
        <Route path= "/calculator" element ={<Calculator/>}/>
        <Route path= "/tracker" element ={<Tracker/>}/>
        <Route path= "/products" element ={<Products/>}/>
    </Routes>
  )
}

export default App;
