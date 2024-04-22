import * as React from 'react';
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './AboutUs.styles.css'

const AboutUs: React.FC = () => {

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, [])

    return (
        <div className='about-container'>
            <div className="wrapper">
                <div className="about-container__info">
                    <h2 style={{ fontSize: "58px", color: "#FFFFFF" }} data-aos='fade-up'>About Us</h2>
                    <h3 style={{ fontSize: "20px", color: "#E15D2C", marginTop: "-10px", marginBottom: "40px" }} data-aos='fade-in' >More than a real estate website.</h3>
                    <p style={{ fontSize: "1.2rem", color: "#FFFFFF" }} data-aos='fade-up'>We use cutting-edge technology to transform the way you look for your next home. Imagine having a personalized assistant at your disposal who understands your tastes and needs, and who works tirelessly to find properties that really excite you.
                    </p>
                    <p style={{ marginTop: "20px", color: "#FFFFFF", fontWeight: "bold" }} data-aos='fade-up'><b>The perfect home is waiting for you!</b></p>
                </div>
            </div>
        </div>
    )


}

export default AboutUs;