import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
// import { Outlet } from "react-router-dom";
import FeaturedProducts from "../FeaturedProducts";
import ItemsCategoriesDetails from "./ItemsCategoriesDetails";

const FeatureLayOut = () => {
  const [items, setItems] = useState("Latest");

  const featureItems = (items) => {
    setItems(items);
  };
  const { data: categories = [] } = useQuery({
    queryKey: ["all-categories", items],
    queryFn: () =>
      fetch(
        `https://cafe-server-side.vercel.app/all-categories?category=${items}`
      ).then((res) => res.json()),
  });

  return (
    <div className="mt-20">
      <FeaturedProducts featureItems={featureItems}></FeaturedProducts>
      <div className="grid grid-cols-1 gap-10 mt-20  md:grid-cols-2 lg:grid-cols-3 mx-10 lg:mx-0 md:mx-0">
        {categories &&
          categories.map((category) => (
            <ItemsCategoriesDetails
              key={category._id}
              category={category}
            ></ItemsCategoriesDetails>
          ))}
      </div>
    </div>
  );
};

export default FeatureLayOut;
