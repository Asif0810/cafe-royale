import React from "react";

import { Link } from "react-router-dom";

const ChefDetails = ({ chef }) => {
  const { age, country, description, name, photo, _id, topItem } = chef;

  return (
    <div className="mx-auto">
      <Link
        to={`/chef-information/${_id}`}
        className="tooltip"
        data-tip="please click for details"
      >
        <img
          style={{
            borderRadius: "100%",

            boxShadow:
              "rgba(0, 0, 0, 0.25) 0px 17px 30px, rgba(0, 0, 0, 0.22) 0px 12px 12px",
          }}
          src={photo}
          alt=""
          className="w-[230px] h-[230px] hover:transition ease-in-out delay-75 hover:scale-110"
        />
        <p className="text-[20px] text-center mt-3">{name}</p>
      </Link>
    </div>
  );
};

export default ChefDetails;
