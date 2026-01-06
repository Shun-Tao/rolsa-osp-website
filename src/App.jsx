import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home.jsx"
import Calculator from "./pages/Calculator.jsx"
import Products from "./pages/Products.jsx"
import EnergyTracker from "./pages/EnergyTracker.jsx"
import './App.css'

function App() {
  return (
    <Routes>
        <Route path= "/" element ={<Home/>}/>
        <Route path= "/products" element ={<Products/>}/>
        <Route path= "/calculator" element ={<Calculator/>}/>
        <Route path= "/energyTracker" element ={<EnergyTracker/>}/>
    </Routes>
  )
}

export default App;
