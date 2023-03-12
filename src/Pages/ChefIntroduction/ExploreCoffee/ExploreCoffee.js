import React from "react";
import banner from "../chefasset/depositphotos_592427410-stock-photo-smiling-african-american-seller-holding.jpg";
const ExploreCoffee = () => {
  return (
    <div className="mt-24">
      <div className="lg:justify-around md:justify-around   flex">
        <h2 className="text-3xl text-[#6D3622] lg:w-[300px] md:w-[300px] w-full text-center lg:text-start md:text-start font-bold">
          Explore All Coffee Of The World with us
        </h2>
        <div className="w-[350px] hidden lg:block md:block">
          <p className="text-[gray] ">
            We always our customers happy by providing as many choices as
            possible top coffe for you with advantage
          </p>
        </div>
      </div>
      <div className="mt-6">
        <img src={banner} alt="" className="rounded-xl" />
      </div>
      <div className="grid grid-cols-2 lg:gap-0 md:gap-0 gap-10 md:grid-cols-2 lg:grid-cols-3 mx-6 sm:mx-0 my-8">
        <div className=" mx-auto">
          <h3 className="font-bold text-xl text-[#6D3622]">
            Shipping & Return
          </h3>
          <p>
            If you want, you can easily <br /> pay the Shipping charge
          </p>
        </div>
        <div className=" mx-auto">
          <h3 className="font-bold text-xl text-[#6D3622]">
            Order out Of city
          </h3>
          <p>
            You can order easily <br /> Out of city
          </p>
        </div>
        <div className="mx-auto">
          <h3 className="font-bold text-xl text-[#6D3622]">Payment Easily</h3>
          <p>
            If you want, you can easily
            <br /> pay the Shipping charge
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExploreCoffee;
