import * as React from 'react';
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './AboutUs.styles.css'

const AboutUs: React.FC = () => {

    useEffect(()=>{
        AOS.init({duration:1000});
    },[])

  return (
    <div className='who-container'>
        <div className="wrapper">
            <div className="who-container-grid">
                <div className="img-who" data-aos='fade-up'>
                <img src="./src/assets/whosectionimg2.jpg" alt="who-section"/>
                </div>
                <div className="who-container-text">
                    <h2 style={{fontSize:"58px"}}data-aos='fade-up'>Somos</h2>
                    <h3 style={{fontSize:"38px", color:"#E15D2C", marginTop:"40px",marginBottom:"40px"}} data-aos='fade-in'>Más que un sitio web de inmuebles</h3>
                    <p style={{fontSize:"1.5rem"}}data-aos='fade-up'>Utilizamos tecnología de vanguardia, para transformar la forma en que buscas tu próximo hogar. Imagina tener a tu disposición un asistente personalizado que entiende tus gustos y necesidades, y que trabaja incansablemente para encontrar propiedades que realmente te emocionen.
                    </p>
                    <p style={{marginTop:"20px"}}data-aos='fade-up'><b>¡El hogar perfecto para ti, te está esperando!</b></p>
                </div>
            </div>
        </div>
    </div>
  )

   
}

export default AboutUs;