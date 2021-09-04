import React from "react";
import Footer from "../../Navbar/Footer/Footer";
import Navbar from "../../Navbar/Navbar";
import Header from "./Header/Header";
import OurExperience from "./OurExperience/OurExperience";
import OurTeam from "./OurTeam/OurTeam";
import PopulerMenCollection from "./PopulerMenCollection/PopulerMenCollection/PopulerMenCollection";
import ShopByCategory from "./ShopByCategory/ShopByCategory";
import TrandingNow from "./TrandingNow/TrandingNow";
const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Header></Header>
      <PopulerMenCollection></PopulerMenCollection>
      <ShopByCategory></ShopByCategory>
      <OurExperience></OurExperience>
      <OurTeam></OurTeam>
      <TrandingNow></TrandingNow>
      <Footer></Footer>
    </div>
  );
};

export default Home;
