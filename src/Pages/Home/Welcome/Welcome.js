import React from "react";

const Welcome = () => {
  return (
    <div className="mt-12">
      <h2 className="text-[#6D3622]  lg:text-2xl md:text-2xl text-center mt-3">
        Welcome to Cafe Royal
      </h2>
      <p className="text-[#6D3622] text-center text-3xl -mt-4">________</p>
      <div className="">
        <p className="text-center text-[#939499] lg:w-[600px] md:w-[600px] w-[400px] lg:text-[16px] md:text-[16px] text-[13px] mx-auto">
          Coffee does more than boost your energy. A few daily cups of coffee
          may also lower your risk of type 2 diabetes and depression, support
          weight management, and help you live a longer life. Just keep in mind
          that experts recommend limiting caffeine if you’re pregnant or
          nursing.
        </p>
      </div>
    </div>
  );
};

export default Welcome;
