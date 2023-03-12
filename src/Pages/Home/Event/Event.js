import React from "react";
import eventbanner from "./vintage-coffee-shop-banner-template-with-coffee-beans-drawing-in-line-art-style-isolated-coffee-branch-illustration-on-brown-background-panoramic-coffee-roasting-banner-organic-caffeine-free-vector.jpg";
import { FaChevronRight } from "react-icons/fa";
const Event = () => {
  return (
    <div
      className="p-10 mt-24 shadow-2xl"
      style={{
        backgroundImage: `url(${eventbanner})`,
        backgroundSize: "cover",
      }}
    >
      <h2 className="text-white text-4xl text-center  font-bold">
        There is an Event every Year
      </h2>
      <div className="sm:flex block text-center sm:text-start justify-around">
        <div className=""></div>
        <div className="mt-10">
          <div className="justify-end ">
            <h3 className="text-white text-2xl mb-6">Entertainment Day</h3>
            <ul className="text-white italic ml-6 sm:ml-0">
              <li className="flex items-center mb-2">
                <FaChevronRight className="mr-1" /> one day football tournament
              </li>
              <li className="flex items-center mb-2">
                <FaChevronRight className="mr-1" />
                Bascket Game
              </li>
              <li className="flex items-center mb-2">
                <FaChevronRight className="mr-1" />
                Swimming Compitition
              </li>
              <li className="flex items-center mb-2">
                <FaChevronRight className="mr-1" />
                Eating Contest
              </li>
              <li className="flex items-center mb-2">
                <FaChevronRight className="mr-1" />
                Obstacle race
              </li>
              <li className="flex items-center mb-2">
                <FaChevronRight className="mr-1" /> video car racing
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10">
          <div className="justify-end ">
            <h3 className="text-white text-2xl mb-6">Entertainment Night</h3>
          </div>
          <ul className="text-white italic ml-6 sm:ml-0">
            <li className="flex items-center mb-2">
              <FaChevronRight className="mr-1" /> Singing
            </li>
            <li className="flex items-center mb-2">
              <FaChevronRight className="mr-1" />
              joking
            </li>
            <li className="flex items-center mb-2">
              <FaChevronRight className="mr-1" />
              Danching
            </li>
            <li className="flex items-center mb-2">
              <FaChevronRight className="mr-1" />
              reward for best Customers
            </li>
            <li className="flex items-center mb-2">
              <FaChevronRight className="mr-1" />
              presentation love story
            </li>
            <li className="flex items-center mb-2">
              <FaChevronRight className="mr-1" /> creativity
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Event;
