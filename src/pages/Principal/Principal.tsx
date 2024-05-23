import CardList from "@/components/Principal/CardList/CardList";
import PrincipalHeader from "@/components/Principal/Principal_Header/PrincipalHeader";
import Hero from "@/components/Principal/Hero/Hero";
import Filtrado from "@/components/Principal/Filtrado/Filtrado";
import Footer from "@/components/Footer/Footer";
import Provider from "@/Context/Context";
import React from "react";
import PaginationProvider from "@/Context/PaginacionContext";
import { QueryClientProvider } from '@tanstack/react-query';
import queryClient from './queryClient';
const HomePrincipal: React.FC = () => {

  return (
    <>
        <PaginationProvider>
          <PrincipalHeader />
          <Hero />
          <Filtrado />

        
          <CardList />
          <Footer />
        </PaginationProvider>
    </>
  );
};
export default HomePrincipal;
