import React from "react";

const AboutShop = () => {
  return (
    <div className="mt-24">
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-xl font-bold text-[#6D3622]">
              O V E R V I E W
            </h1>
            <h2 className="text-5xl font-bold mt-10">
              A Little Information for our Guest
            </h2>
            <p className="text-[gray] mt-6">
              We have a lot of Customers. Most of them come from outside the
              city.They come here regularly to drink and chat. Our CoffeShop has
              reputation that we constantly strive to maintain.and try daily to
              improve our service
            </p>
            <div className="flex gap-10 mt-6 justify-center lg:justify-start ">
              <div className="text-center">
                <h2 className="text-3xl font-extrabold">
                  5<span className="text-[#6D3622]">+</span>
                </h2>
                <small className="text-[gray]">Meeting Room</small>
              </div>
              <div className="text-center">
                <h2 className="text-3xl font-extrabold text-center">
                  100<span className="text-[#6D3622]">+</span>
                </h2>
                <small className="text-[gray]">Of all menus that</small>
              </div>

              <div className="text-center">
                <h2 className="text-3xl font-extrabold">
                  4<span className="text-[#6D3622] font-extrabold">+</span>
                </h2>
                <small className="text-[gray]">branch</small>
              </div>
            </div>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm ">
            <div className="card-body">
              <img
                src={
                  "https://images.pexels.com/photos/3968056/pexels-photo-3968056.jpeg?auto=compress&cs=tinysrgb&w=600"
                }
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutShop;
