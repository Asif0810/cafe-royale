import React from "react";
import banner1 from "../../../asset/coffee-banner-fit.jpg";
// import banner2 from "../../../asset/coffee_07.jpg";
// import banner3 from "../../../asset/pexels-nao-triponez-129207.jpg";
// import banner4 from "../../../asset/pexels-cup-of-couple-7658124.jpg";
const Banner = () => {
  return (
    <div>
      <div className="carousel w-full">
        <div className="carousel-item w-full">
          <img src={banner1} className="w-full md:h-[500px] lg:h-[600px]" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
