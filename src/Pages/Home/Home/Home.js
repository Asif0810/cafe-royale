import React from "react";
import ChefIntroduction from "../../ChefIntroduction/ChefIntroduction";
import ExploreCoffee from "../../ChefIntroduction/ExploreCoffee/ExploreCoffee";
import AboutShop from "../AboutShop/AboutShop";
import Banner from "../Banner/Banner";
import Cupdemo from "../Cupdemo/Cupdemo";
import Event from "../Event/Event";

import FeatureLayOut from "../FeaturedProducts/FeatureLayOut/FeatureLayOut";
import OurStory from "../OurStory/OurStory";
import TimeLine from "../TimeLine/TimeLine";
import Welcome from "../Welcome/Welcome";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Welcome></Welcome>
      <div className=" lg:w-[1140px]  mx-auto ">
        <Cupdemo></Cupdemo>
        <FeatureLayOut></FeatureLayOut>
        <AboutShop></AboutShop>
        <ChefIntroduction></ChefIntroduction>
        <TimeLine></TimeLine>
        <ExploreCoffee></ExploreCoffee>
      </div>
      <Event></Event>
      <div className=" lg:w-[1140px]  mx-auto ">
        <OurStory></OurStory>
      </div>
    </div>
  );
};

export default Home;
