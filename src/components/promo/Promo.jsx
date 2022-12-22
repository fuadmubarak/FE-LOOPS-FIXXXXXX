import React from "react";
import Hero from "../hero/Hero";
import Banner from "../card/Banner";
import Navigation from "../header/Navigation";
import promo from "./../../assets/15.png";
import promo1 from "./../../assets/2.png";
import promo2 from "./../../assets/3.png";
import promo3 from "./../../assets/2.png";
import promo4 from "./../../assets/2.png";
import promo5 from "./../../assets/2.png";

const Content = () => {
  return (
    <>
      <Navigation></Navigation>
      <Hero></Hero>
      <Banner></Banner>
    </>
  );
};

export default Content;
