import * as React from 'react'
import { Link } from 'react-router-dom'
import './JoinUs.styles.css';
const JoinUs: React.FC = () => {
  return (
    <div className='joinus-container'>
        <div className="wrapper">
            <div className="joinus-container-content">
                <h2>¿Estás interesado?</h2>
                <Link to={"/signup"}><div className="joinus-btn">¡Únete ahora mismo!</div></Link>
            </div>
        </div>
    </div>
  )
} 

export default JoinUs