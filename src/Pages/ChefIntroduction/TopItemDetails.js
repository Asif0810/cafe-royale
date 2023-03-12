import React from "react";

const TopItemDetails = ({ top }) => {
  const { coffeName, img } = top;
  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={img}
            alt="Shoes"
            className="rounded-xl h-[300px] w-[300px]"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{coffeName}</h2>
        </div>
      </div>
    </div>
  );
};

export default TopItemDetails;
