import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../../../Context/AuthProvider";
import "./Style.css";
const ItemsCategoriesDetails = ({ category }) => {
  const { user } = useContext(Context);
  const { type, present_price, old_price, photo, _id } = category;

  return (
    <Link to={`details/${_id}`}>
      <div
        style={{ borderRadius: "0px" }}
        className="transition ease-in-out delay-150 hover:scale-110 card bg-base-100 shadow-2xl  hover:bg-gray-300 mb-3"
      >
        <figure className="px-10 pt-10">
          <img src={photo} alt="Shoes" className=" h-52 w-72" />
        </figure>

        <div className="card-body items-center text-center">
          <h2 className="card-title">{type}</h2>
          <div className="flex items-center gap-4">
            <h2 className=" text-2xl text-[#6D3622]">${present_price}</h2>
            <del className="text-xl text-[#939499]">${old_price}</del>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ItemsCategoriesDetails;
