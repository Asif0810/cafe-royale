import React from "react";

const BuyingDetails = ({ order, deleteHandler }) => {
  const {
    Customer_email,
    coffee_category,
    coffee_name,
    price,
    quantity,
    coffee_photo,
    _id,
  } = order;

  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-24 h-24">
              <img src={coffee_photo} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{coffee_name}</div>
            <div className="text-sm opacity-50">{coffee_category}</div>
          </div>
        </div>
      </td>

      <td>${price}</td>
      <td>{quantity}</td>
      <td>
        <button
          onClick={() => deleteHandler(_id)}
          className="btn btn-circle btn-outline"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </td>
    </tr>
  );
};

export default BuyingDetails;
