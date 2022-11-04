import React from "react";
import About from "./About";
import Footer from "./Footer";
import Friends from "./Friends";
import MainSection from "./MainSection";
import Maintance from "./Maintance";
import OurServes from "./OurServes";

const Home = () => {
  return (
    <div>
      <MainSection />
      <About />
      <OurServes/>
      <Friends/>
      <Maintance/>
      <Footer/>
    </div>
  );
};

export default Home;
