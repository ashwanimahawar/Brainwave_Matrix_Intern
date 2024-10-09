import React from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import TopStrip from "./TopStrip";
import Footer from "./Footer";

const App: React.FC = () => {
  return ( 
    <>
    <TopStrip />
    <Header />
    <HeroSection />
    <Footer />
    </>
   );
};

export default App;
