import AboutUs from '@/components/AboutUs/AboutUs';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import Hero from '@/components/Hero/Hero';
import JoinUs from '@/components/JoinUs/JoinUs';
import MayFindSect from '@/components/MayFind/MayFindSect';
import ProductDesc from '@/components/ProductDesc/ProductDesc';

import * as React from 'react';


const Home: React.FC = () => {
  return <>
            <Header logged={false}/>
            <Hero/>
            <AboutUs/>
            <ProductDesc/>
            <MayFindSect/>
            <JoinUs/>
            <Footer/> 
        </> ;
};

export default Home;
