import React from "react";
import ChefIntroduction from "../../ChefIntroduction/ChefIntroduction";
import ExploreCoffee from "../../ChefIntroduction/ExploreCoffee/ExploreCoffee";
import AboutShop from "../AboutShop/AboutShop";
import Banner from "../Banner/Banner";
import Cupdemo from "../Cupdemo/Cupdemo";
import Event from "../Event/Event";

import FeatureLayOut from "../FeaturedProducts/FeatureLayOut/FeatureLayOut";
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
        <ExploreCoffee></ExploreCoffee>
        <Event></Event>
      </div>
    </div>
  );
};

export default Home;
