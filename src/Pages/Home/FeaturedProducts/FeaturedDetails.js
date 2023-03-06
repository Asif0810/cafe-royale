import React, { useState } from "react";
import { Link } from "react-router-dom";

const FeaturedDetails = ({ feature, featureItems }) => {
  const { category, _id } = feature;
  return (
    <div>
      <div>
        {
          <Link
            onClick={() => featureItems(category)}
            style={{ background: "#6D3622", border: "none", width: "100px" }}
            className="btn btn-sm"
          >
            {category}
          </Link>
        }
      </div>
    </div>
  );
};

export default FeaturedDetails;
