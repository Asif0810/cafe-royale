import React from "react";
import Banner from "../Banner/Banner";
import Cupdemo from "../Cupdemo/Cupdemo";
import FeaturedProducts from "../FeaturedProducts/FeaturedProducts";
import FeatureLayOut from "../FeaturedProducts/FeatureLayOut/FeatureLayOut";
import Welcome from "../Welcome/Welcome";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Welcome></Welcome>
      <div className=" lg:w-[1140px]  mx-auto">
        <Cupdemo></Cupdemo>
        <FeatureLayOut></FeatureLayOut>
      </div>
    </div>
  );
};

export default Home;
