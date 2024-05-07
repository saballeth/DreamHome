import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";

import * as React from "react";

const Home: React.FC = () => {
  return (
    <>
      <Header logged={false} />
      <Hero />
      
    </>
  );
};

export default Home;
