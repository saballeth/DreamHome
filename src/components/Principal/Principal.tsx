import CardList from './CardList/CardList'
import Header from '../../components/Header/Header'
import './principal_index.css'
import Filtrado from "@/components/Principal/Filtrado/Filtrado"
import React from 'react'

const principal: React.FC = () =>{
    return (
        <>
        <div className='headerS'>
            <Header logged={true}/>
        <div className='image'></div>
        </div> 
        
        <div className="content-container">
            <div>
            <Filtrado/> 
            </div>
            <div className='content'>
                <CardList/>         
            </div>
        </div>
        
        
      
        </>
       
    )
};

export default principal
