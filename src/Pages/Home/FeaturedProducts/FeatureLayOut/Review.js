import React from "react";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
const Review = () => {
  const item = useLoaderData();
  const { category, details, photo, present_price, type, _id } = item;
  const ratinghandler = (event) => {
    event.preventDefault();
    const form = event.target;
    const text = form.comment.value;
    const rating = form.rating.value;
    console.log(text, rating);
  };
  return (
    <div className="lg:w-[1140px]  mx-auto">
      <div
        style={{ borderRadius: "0px" }}
        className="w-96 mx-auto ease-in-out delay-150  card bg-base-100 shadow-2xl  mb-3"
      >
        <figure className="px-10 pt-10">
          <img src={photo} alt="Shoes" className=" h-52 w-72" />
        </figure>

        <div className="card-body items-center text-center">
          <h2 className="card-title">{type}</h2>
          <div className="flex items-center gap-4">
            <h2 className=" text-2xl text-[#6D3622]">${present_price}</h2>
          </div>
        </div>
      </div>
      <div>
        <div className="overflow-x-auto  w-full">
          <form onSubmit={ratinghandler}>
            <textarea
              name="comment"
              placeholder="write somthing about product"
              className="block mb-2 textarea textarea-bordered textarea-sm w-full max-w-xs"
            ></textarea>

            <select
              name="rating"
              className="select mb-5 select-bordered select-sm w-full max-w-xs"
            >
              <option value={5}>rating 5</option>
              <option value={4}>rating 4</option>
              <option value={3}>rating 3</option>
              <option value={2}>rating 2</option>
              <option value={1}>rating 1</option>
            </select>
            <button type="submit">post</button>
          </form>
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Job</th>
                <th>Favorite Color</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <th></th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src="/tailwind-css-component-profile-2@56w.png"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Hart Hagerty</div>
                      <div className="text-sm opacity-50">United States</div>
                    </div>
                  </div>
                </td>
                <td>
                  Zemlak, Daniel and Leannon
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    Desktop Support Technician
                  </span>
                </td>
                <td>Purple</td>
                <th>
                  <button className="btn btn-ghost btn-xs">details</button>
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Review;
