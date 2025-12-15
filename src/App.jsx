import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home.jsx"
import Calculator from "./pages/Calculator.jsx"
import './App.css'

function App() {
  return (
    <Routes>
        <Route path= "/" element ={<Home/>}/>
        <Route path= "/calculator" element ={<Calculator/>}/>
    </Routes>
  )
}

export default App;
