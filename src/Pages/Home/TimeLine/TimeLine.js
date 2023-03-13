import React from "react";
import "./TimeLine.css";
const TimeLine = () => {
  return (
    <div className="mt-24 ">
      <div className="container  mx-auto w-full h-full">
        <div className="relative wrap overflow-hidden p-10 h-full">
          <h2 className="text-center text-2xl font-bold">
            OUR WORDWIDE BRANCH
          </h2>
          <div
            style={{ left: "50%" }}
            className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border"
          ></div>

          <div className="mb-8 flex justify-between items-center w-full right-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
              <h1 className="mx-auto font-semibold text-lg text-white">1</h1>
            </div>
            <div className="order-1   shadow-xl w-5/12 px-6 py-4">
              <h3 className="mb-3 font-bold text-gray-800 text-xl">
                Washington DC
              </h3>
              <p className="text-sm leading-snug tracking-wide text-[gray] text-opacity-100">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>

          <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
              <h1 className="mx-auto text-white font-semibold text-lg">2</h1>
            </div>
            <div className="order-1 bg-[#6D3622]  shadow-xl w-5/12 px-6 py-4">
              <h3 className="mb-3 font-bold text-white text-xl">
                Berlin, Germany
              </h3>
              <p className="text-sm font-medium leading-snug tracking-wide text-[gray] text-opacity-100">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>

          <div className="mb-8 flex justify-between items-center w-full right-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
              <h1 className="mx-auto font-semibold text-lg text-white">3</h1>
            </div>
            <div className="order-1   shadow-xl w-5/12 px-6 py-4">
              <h3 className="mb-3 font-bold text-gray-800 text-xl">
                Paris,France
              </h3>
              <p className="text-sm leading-snug tracking-wide text-[gray] text-opacity-100">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>

          <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
              <h1 className="mx-auto text-white font-semibold text-lg">4</h1>
            </div>
            <div
              style={{
                boxShadow:
                  "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
              }}
              className="order-1 bg-[#6D3622] w-5/12 px-6 py-4"
            >
              <h3 className="mb-3 font-bold text-white text-xl">Tokyo,Japan</h3>
              <p className="text-sm font-medium  leading-snug tracking-wide text-[gray] text-opacity-100">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeLine;
