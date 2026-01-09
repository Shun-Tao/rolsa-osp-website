import { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar.jsx';
import './Calculator.css';

function Calculator(){
    const [formData, setFormData] = useState({
        electricity: '',
        gas: '',
        miles: '',
        flights: '',
        diet: ''
    });
    
    const [results, setResults] = useState(null);
    const [viewMode, setViewMode] = useState('monthly');
    
    function handleChange(event){
        setFormData({...formData, [event.target.name]: event.target.value});
    }

    const calculateCarbon = () => {
        const electricityCarbon = formData.electricity * 0.92;
        const gasCarbon = formData.gas * 11.7;
        const drivingCarbon = formData.miles * 0.89;
        const flightCarbon = formData.flights * 1100;
        
        const dietMultiplier = {
            heavy: 1.5,
            moderate: 1.0,
            light: 0.5,
            vegan: 0.2 
        }[formData.diet] || 1.0;

        const dietCarbon = 2000 * dietMultiplier;
        const monthlyCarbon = electricityCarbon + gasCarbon + drivingCarbon + (flightCarbon / 12) + (dietCarbon / 12);
        const annualCarbon = monthlyCarbon * 12;
        
        setResults({
            electricityCarbon,
            gasCarbon,
            drivingCarbon,
            flightCarbon: flightCarbon / 12,
            dietCarbon,
            monthlyCarbon,
            annualCarbon,
            poundsCarbon: annualCarbon / 2000
        });
    };

    return(
        <>
            <div className="background-page">
                <div className="calculator-page">
                    <Navbar/>
                    <div className = "hero-section">
                        <h1 className = "hero-title">
                            <span className = "highlighted-text">Carbon Footprint Calculator</span>
                        </h1>
                        <p className = "hero-text">
                            Calculate your carbon footprint based on your daily activities.
                        </p>
                    </div>


                    <div className="form-section">
                        <div className="form-inner">
                        <label htmlFor="input-title">Monthly Electricity Usage (kWh):</label>
                        <div className="input-form">
                            <input
                                type="text"
                                placeholder="Enter a number"
                                id="electricity"
                                name="electricity"
                                value={formData.electricity}
                                onChange={handleChange}
                            />
                        </div>

                        <label htmlFor="input-title">Monthly gas usage (Therms):</label>
                        <div className="input-form">
                            <input
                                type="text"
                                placeholder="Enter a number"
                                id="gas"
                                name="gas"
                                value={formData.gas}
                                onChange={handleChange}
                            />
                        </div>

                        <label htmlFor="input-title">Miles driven per month:</label>
                        <div className="input-form">
                            <input
                                type="text"
                                placeholder="Enter a number"
                                id="miles"
                                name="miles"
                                value={formData.miles}
                                onChange={handleChange}
                            />
                        </div>

                        <label htmlFor="input-title">Number of flights per year:</label>
                        <div className="input-form">
                            <input
                                type="text"
                                placeholder="Enter a number"
                                id="flights"
                                name="flights"
                                value={formData.flights}
                                onChange={handleChange}
                            />
                        </div>

                        <label htmlFor="input-title">Meat consumption:</label>
                        <select className = "input-form"
                            id="diet"
                            name="diet"
                            value={formData.diet}
                            onChange={handleChange}
                            required
                        >
                            <option value="heavy">Heavy(Daily)</option>
                            <option value="moderate">Moderate (A few times a week)</option>
                            <option value="light">Light (Occasionally)</option>
                            <option value="vegan">Vegetarian/Vegan</option>
                        </select>

                        <button onClick={calculateCarbon}>Calculate Carbon Footprint</button>
                        </div>
                    </div>

                    {results && (
                        <>
                            <div className="results-section">
                                <div className="results-inner">
                                    <h2 className="result-title">Your Annual Carbon Footprint</h2>
                                    <span className="carbon-total">{(results.annualCarbon / 2000).toFixed(1)} <span className="carbon-unit">Tons CO₂</span></span>
                                    <p> {results.annualCarbon.toFixed(1)} lbs of CO₂ Per Year </p>
                                    <footer className="results-footer">
                                        <p> The average UK household produces about 13 tons of CO₂ a year.</p>
                                    </footer>
                                </div>
                            </div>

                            
                        </>
                    )}
                </div>
            </div>
        </>
    )
}

export default Calculator;