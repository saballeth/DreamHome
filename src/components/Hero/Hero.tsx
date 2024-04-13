import * as React from 'react';
import { useEffect } from 'react'
import { Link } from "react-router-dom";
import AOS from 'aos'
import 'aos/dist/aos.css'
import './Hero.styles.css'



const Hero: React.FC = () =>{
    useEffect(()=>{
        AOS.init({duration:1000});
    },[])

    return(
        <>
        <div className="hero_container">
            <div className="wrapper hero_container_content-container">
                <div className="hero_container_content-container_cont">
                    <h2 className="hero_text" data-aos='fade'>
                        Encuentra el inmueble de tus sueños
                    </h2>
                        <Link to={`/login`}>
                            <button className="start-btn" data-aos='fade-up'>
                                ¡Empecemos!
                            </button>    
                        </Link> 
                </div>
            </div>
        </div>
        </>
    )
}

export default Hero;