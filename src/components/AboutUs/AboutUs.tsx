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
                    <h2 style={{ fontSize: "58px", color: "#FFFFFF" }} data-aos='fade-up'>Sobre nosotros</h2>
                    <h3 style={{ fontSize: "20px", color: "#E15D2C", marginTop: "-10px", marginBottom: "40px" }} data-aos='fade-up' >Más que una web inmobiliaria.</h3>
                    <p style={{ fontSize: "1.2rem", color: "#FFFFFF" }} data-aos='fade-up'>Utilizamos tecnología de punta para transformar la forma en que buscas tu próximo hogar. Imagina tener a tu disposición un asistente personalizado que entiende tus gustos y necesidades, y que trabaja incansablemente para encontrar propiedades que realmente te entusiasmen.</p>
                    <p style={{ marginTop: "20px", color: "#FFFFFF", fontWeight: "bold" }} data-aos='fade-up'><b>¡El hogar perfecto te está esperando!</b></p>
                </div>
            </div>
        </div>
    )


}

export default AboutUs;