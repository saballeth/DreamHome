import React from 'react'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'


type productType = {
  producto: string,
  desc: string,
  imagen: string
}

const MayFindCard: React.FC<productType> = ({products}: productType) => {

  useEffect(()=>{
    AOS.init({duration:1000});
  },[])

  return (
    <div className='mayfindcard-container' data-aos='fade-up'>
        <div className="mayfindcard-img">
          <img src={products.imagen} alt="img-card" />
        </div>
        <div className="mayfindcard-desc">
          <p>{products.producto}</p>
          <p>{products.desc}</p>
          </div>
    </div>
  )
}

export default MayFindCard