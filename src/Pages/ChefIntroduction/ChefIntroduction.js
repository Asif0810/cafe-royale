import { useQuery } from "@tanstack/react-query";
import React from "react";

import ChefDetails from "./ChefDetails/ChefDetails";
const ChefIntroduction = () => {
  const { data: allchef = [], isLoading } = useQuery({
    queryKey: ["chef"],
    queryFn: () =>
      fetch("https://cafe-server.vercel.app/chef").then((res) => res.json()),
  });
  if (isLoading) {
    <progress className="progress w-56"></progress>;
  }
  return (
    <div className="mt-10">
      <h2 className="text-center text-5xl">Our Best Chef</h2>
      {/* <p className="">Here's Our take on the top six chef</p> */}
      <div className="gap-12 mt-10 grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1">
        {allchef.map((chef) => (
          <ChefDetails key={chef._id} chef={chef}></ChefDetails>
        ))}
      </div>
    </div>
  );
};

export default ChefIntroduction;
