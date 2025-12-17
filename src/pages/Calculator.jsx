import { useState } from 'react';
import Navbar from '../components/Navbar.jsx';

function Calculator(){
    const [formData, setFormData] = useState({
        electricity: '',
        gas: '',
        miles: '',
        flights: '',
        diet: ''
    });
    
    const [results, setResults] = useState({
        electricityCarbon: 0,
        gasCarbon: 0,
        drivingCarbon: 0,
        flightCarbon: 0,
        monthlyCarbon: 0
    });
    
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
            <Navbar/>
            <div>Calculator page</div>

            <label htmlFor="electricity">Monthly Electricity Usage:</label>
            <div className="electricity-form">
                <input
                    type="text"
                    placeholder="Enter a number"
                    id="electricity"
                    name="electricity"
                    value={formData.electricity}
                    onChange={handleChange}
                />
            </div>

            <label htmlFor="gas">Monthly gas usage:</label>
            <div className="gas-form">
                <input
                    type="text"
                    placeholder="Enter a number"
                    id="gas"
                    name="gas"
                    value={formData.gas}
                    onChange={handleChange}
                />
            </div>

            <label htmlFor="miles">Miles driven per month:</label>
            <div className="miles-form">
                <input
                    type="text"
                    placeholder="Enter a number"
                    id="miles"
                    name="miles"
                    value={formData.miles}
                    onChange={handleChange}
                />
            </div>

            <label htmlFor="flights">Number of flights per year:</label>
            <div className="flights-form">
                <input
                    type="text"
                    placeholder="Enter a number"
                    id="flights"
                    name="flights"
                    value={formData.flights}
                    onChange={handleChange}
                />
            </div>

            <label htmlFor="diet">Meat consumption:</label>
            <select
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

            <div>
                <h3>Monthly Carbon Footprint Results (lbs CO2):</h3>
                <span>{results.poundsCarbon} tons CO2</span>
                <p>Electricity: {results.electricityCarbon}</p>
                <p>Gas: {results.gasCarbon}</p>
                <p>Driving: {results.drivingCarbon}</p>
                <p>Flights: {results.flightCarbon}</p>
                <p>Diet: {results.dietCarbon}</p>
                <p>Monthly Total: {results.monthlyCarbon} lbs CO2</p>
                <p>Annual Total: {results.annualCarbon} lbs CO2</p>
            </div>


        </>
    )
}

export default Calculator;