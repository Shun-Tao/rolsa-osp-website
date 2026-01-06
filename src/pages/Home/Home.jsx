import { useState } from 'react';
import Navbar from '../../components/Navbar.jsx';

function Home(){

    const [formData, setFormData] = useState({
        test:''
    });
    
    const [results, setResults] = useState({
        test:'',
        testResult:''
    });
    
    function handleChange(event){
        setFormData({...formData, [event.target.name]: event.target.value});
    }

    return(
        <>
            <Navbar/>
            <div>Home page</div>

            <label htmlFor="test">Test:</label>
            <div className="test-form">
                <input
                    type="text"
                    placeholder="Enter a number"
                    id="test"
                    name="test"
                    value={formData.test}
                    onChange={handleChange}
                />
            </div>


        </>
    )
}

export default Home;