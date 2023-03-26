import React from "react";
import "./story.css";
import pic1 from "./storyassets/coffee-cup-gb621ad079_1920.png";
import pic2 from "./storyassets/Lovepik_com-401167260-coffee.png";
import pic3 from "./storyassets/—Pngtree—takeaway coffee cup_5402899.png";
import pic4 from "./storyassets/Vlg8de-coffee-mug.png";
import { Link } from "react-router-dom";
const OurStory = () => {
  return (
    <div className="mt-32  flex gap-5 justify-between items-center">
      <div className="md:w-[50%] lg:w-[50%] sm:w-full text-center">
        <div className="">
          <h2 className="text-3xl font-bold">Discover Our Story</h2>
          <div className="divider text-center w-60 mx-auto">O</div>
        </div>
        <p style={{ lineHeight: "1.8" }}>
          Welcome to <b>CAFE ROYALE</b>. Since our first roast in <b>2004</b>,
          the Terbodore family has grown, yet our ethos and commitment to the
          craft remains true. Our proud Great Danes are symbolic of everything
          we strive for – heritage, courage, patience and dependability. Join us
          on the journey, as we explore the possibilities of coffee. Uptown
          Coffee Cafe in Farmville has thrived since it opened in <b>2004</b>.
          We are a family-owned business with a lot of passion for what we do!
          At Uptown Coffee Cafe, we bring our community together through coffee,
          food, and live music.
        </p>
        <Link
          to={"/discover-details"}
          style={{ background: "#502600", borderRadius: "0px" }}
          className="btn mt-10"
        >
          Discover more
        </Link>
      </div>
      <div className="2 w-[50%] hidden sm:block">
        <div className="text-center grid grid-cols-2 gap-8">
          <div className="bg-[#502600]   storycard border-2 justify-center items-center">
            <img style={{ width: "300px" }} src={pic1} alt="" />
          </div>
          <div className="border-2 storycard2 bg-[#DAC4B4] justify-center items-center">
            <img style={{ width: "300px" }} src={pic2} alt="" />
          </div>
          <div className="border-2   storycard2 bg-[#DAC4B4] justify-center items-center">
            <img style={{ width: "300px" }} src={pic3} alt="" />
          </div>

          <div className=" bg-[#502600]   storycard  justify-center flex items-center">
            <img
              style={{ width: "150px", height: "100px" }}
              className=""
              src={pic4}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
{
  /* <div className="text-center grid grid-cols-2 gap-8">
<div className="bg-[#502600] w-[230px] h-[230px]  storycard border-2 justify-center items-center">
  <img style={{ width: "300px" }} src={pic1} alt="" />
</div>
<div className="border-2 w-[230px] h-[230px] storycard2 bg-[#DAC4B4] justify-center items-center">
  <img style={{ width: "300px" }} src={pic2} alt="" />
</div>
<div className="border-2 w-[230px] h-[230px]  storycard2 bg-[#DAC4B4] justify-center items-center">
  <img style={{ width: "300px" }} src={pic3} alt="" />
</div>

<div className=" bg-[#502600] w-[230px] h-[230px]  storycard  justify-center flex items-center">
  <img
    style={{ width: "150px", height: "100px" }}
    className=""
    src={pic4}
    alt=""
  />
</div>
</div> */
}
