import Navbar from '../../components/Navbar.jsx';
import './Home.css';
import imgImage1 from "../../assets/Wind_Energy.png";
import imgImage2 from "../../assets/EV.png";
// Image constants from Figma

const imgImage4 = "https://www.figma.com/api/mcp/asset/77a55acf-34d2-4238-a6b9-dd9b87a9afc9";
const imgRectangle4 = "https://www.figma.com/api/mcp/asset/6d4a0a2e-50a7-41b6-ae54-e7a7ffa9a7fb";
const imgRectangle8 = "https://www.figma.com/api/mcp/asset/edb8a7c7-acbe-4afe-ae5f-18c83f0caab3";
const imgRectangle10 = "https://www.figma.com/api/mcp/asset/98c4eac4-72a3-402a-a762-af95907c8352";
const imgRectangle7 = "https://www.figma.com/api/mcp/asset/0b2406b9-f87a-471d-9825-87b401a50c7b";
const imgRectangle12 = "https://www.figma.com/api/mcp/asset/2aeb6462-8c53-4b56-9ffc-e35412a36847";
const imgRectangle9 = "https://www.figma.com/api/mcp/asset/f552b454-3dc4-43be-aeae-3a4878458f9d";

function Home() {
    return (
        <>
            <div className = "background-page">
                
                <div className="home-page">
                    {/* Hero Section */}
                    <Navbar />
                    <div className="hero-wrapper">
                        <div className="hero-text">
                            <h1 className="hero-title">Achieve Your<br />Green Energy</h1>
                            <p className="hero-description">Your green future start here, with us. help us reshape the future</p>
                            <div className="stats-box">
                                <div className="stat">
                                    <p className="stat-number">250+</p>
                                    <p className="stat-text">Finished Projects</p>
                                </div>
                                <div className="stat">
                                    <p className="stat-number">38+</p>
                                    <p className="stat-text">Years Experience</p>
                                </div>
                            </div>
                        </div>
                        <div className="hero-image-container">
                            <img src={imgImage1} alt="Green Energy" className="hero-image" />
                        </div>
                    </div>

                    {/* Services Section */}
                    <div className="services-header">
                        <h2 className="services-title">Our Services</h2>
                        <button className="view-all-button">View all</button>
                    </div>

                    <div className="services-container">
                        <div className="service-grid">
                            <div className="service-large">
                                <img src={imgRectangle4} alt="service" />
                                <div className="service-label">
                                    <h3>Image</h3>
                                    <p>Read more</p>
                                </div>
                            </div>

                            <div className="service-small">
                                <img src={imgRectangle8} alt="service" />
                                <div className="service-label">
                                    <h3>Information</h3>
                                </div>
                            </div>

                            <div className="service-small">
                                <img src={imgRectangle10} alt="service" />
                                <div className="service-label">
                                    <h3>Information</h3>
                                </div>
                            </div>

                            <div className="service-small">
                                <img src={imgRectangle7} alt="service" />
                                <div className="service-label">
                                    <h3>Image</h3>
                                </div>
                            </div>

                            <div className="service-small">
                                <img src={imgRectangle12} alt="service" />
                                <div className="service-label">
                                    <h3>Information</h3>
                                </div>
                            </div>

                            <div className="service-medium">
                                <img src={imgRectangle9} alt="service" />
                                <div className="service-label">
                                    <h3>Information</h3>
                                </div>
                            </div>

                            <div className="service-small">
                                <img src={imgRectangle10} alt="service" />
                                <div className="service-label">
                                    <h3>Information</h3>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Energy Pattern - BEFORE FAQ Image */}
                    <div className="energy-pattern">
                        <p className="pattern-text">
                            ✦ Green Energy ✦ <span className="green">Green</span> Technology ✦ Green Energy ✦ Green Energy ✦ Green <span className="yellow">Energy</span> ✦ Green Energy ✦
                        </p>
                    </div>

                    {/* Consultant Section */}
                    <div className="consultant-wrapper">
                        <div className="consultant-text">
                            <p>All of the services can be implemented only after a session with a consultant</p>
                        </div>
                        <div className="consultant-image-container">
                            <img src={imgImage4} alt="Consultant" className="consultant-image" />
                        </div>
                    </div>

                    {/* FAQ Section */}
                    <div className="faq-wrapper">
                        <h2 className="faq-title">Frequently Asked Questions</h2>
                        <p className="faq-text">Have another question? email us at <span className="email-highlight">email@gmail.com</span></p>
                    </div>

                    {/* FAQ Image Section */}
                    <div className="faq-image-section">
                        <img src={imgImage2} alt="FAQ" className="faq-image" />
                    </div>

                    

                    {/* CTA Section */}
                    <div className="cta-wrapper">
                        <h2 className="cta-title">Let's transform your dream imagination with us!</h2>
                        <div className="cta-form">
                            <input type="email" placeholder="Your email address" className="email-field" />
                            <button className="submit-button">Submit</button>
                        </div>
            
                    </div>

                    {/* Footer */}
                    <footer className="footer-section">
                        <p>©2025 Rolsa technologies Copyrights</p>
                    </footer>
                </div>
            </div>
        </>
    );
}

export default Home;