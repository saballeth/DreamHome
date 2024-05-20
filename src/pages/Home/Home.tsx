import { useAuth } from "@/Context/AuthContext";
import Header from "@/components/Header/Header";
import PrincipalHeader from "@/components/Principal/Principal_Header/PrincipalHeader";
import Hero from "@/components/Hero/Hero";

import * as React from "react";

const Home: React.FC = () => {
  const auth = useAuth();

  return (
    
    <>{auth.isAuthenticated ? (
        <PrincipalHeader/>
      ):(
        <Header logged={false} />
      )}
      <Hero />
      
    </>
  );
};

export default Home;
