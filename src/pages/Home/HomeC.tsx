import Header from "@/components/Principal/Principal_Header/PrincipalHeader";
import Hero from "@/components/Hero/Hero";

import * as React from "react";

const Home: React.FC = () => {
  return (
    <>
      <Header/>
      <Hero logged={true}/>
      
    </>
  );
};

export default Home;
