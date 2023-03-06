import React from "react";
import cup1 from "../../../asset/pexels-arshad-sutar-1749303.jpg";
import cup2 from "../../../asset/pexels-samer-daboul-1627933.jpg";
import cup3 from "../../../asset/pexels-hasan-albari-1579366.jpg";
const Cupdemo = () => {
  return (
    <div>
      <div className="mt-14 lg:gap-10 md:gap-5 gap-12  grid lg:grid-cols-3 md:grid-cols-3 mx-10 lg:mx-auto  ">
        <div className="">
          <img src={cup1} alt="" className="rounded-3xl" />
        </div>
        <div className="">
          <img src={cup2} alt="" className="rounded-3xl" />
        </div>
        <div className="">
          <img src={cup3} alt="" className="rounded-3xl" />
        </div>
      </div>
    </div>
  );
};

export default Cupdemo;
