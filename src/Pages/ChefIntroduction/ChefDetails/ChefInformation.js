import React from "react";
import { useLoaderData } from "react-router-dom";
import TopItemDetails from "../TopItemDetails";

const ChefInformation = () => {
  const information = useLoaderData();
  const { age, country, description, experience, name, photo, _id, topItem } =
    information;
  console.log(topItem);
  return (
    <div className="lg:w-[1140px] md:w-[1140px] w-full mx-auto">
      <div className="">
        <h2 className="text-3xl text-center mt-6">About Me</h2>
        <img
          src={photo}
          alt=""
          width={"400px"}
          className="mb-10 mx-auto mt-16"
        />
        <p className="px-6">
          Hellow , My name is <b className="text-xl">{name} </b>
          and I am come from <b className="text-xl">{country}. </b>I have been
          involved for <b className="text-xl">{experience} years.</b>
          And I am <b className="text-xl">{age} </b>years old
        </p>
        <p className="font-bold px-6">About My Proffession : </p>
        <p className="px-6">{description}</p>
      </div>
      <h3 className="text-3xl text-center mt-6">My Famous Item </h3>
      <div className="lg:flex md:flex gap-10">
        {topItem.map((top, i) => (
          <TopItemDetails key={i} top={top}></TopItemDetails>
        ))}
      </div>
    </div>
  );
};

export default ChefInformation;
