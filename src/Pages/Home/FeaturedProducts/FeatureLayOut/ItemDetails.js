import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { Link, useLoaderData } from "react-router-dom";
import { Context } from "../../../../Context/AuthProvider";

const ItemDetails = () => {
  const { user } = useContext(Context);
  const item = useLoaderData();
  const { category, details, photo, present_price, type } = item;

  const orderHandler = () => {
    const Customer_email = user?.email;
    const coffee_photo = photo;
    const price = present_price;
    const coffee_name = type;
    const coffee_category = category;
    const quantity = 1;

    const coffee = {
      Customer_email,
      coffee_photo,
      price,
      coffee_name,
      quantity,
      coffee_category,
    };
    fetch(`https://cafe-server.vercel.app/orderd`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(coffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("order success please check order page");
        }
      })
      .catch(console.error());
  };

  return (
    <div>
      <div className="lg:w-[1140px] mt-32 lg:mt-0 md:mt-0 md:w-[800px]  mx-auto h-[450px] flex justify-center items-center">
        <div
          style={{ borderRadius: "0px" }}
          className="card card-side bg-base-100 block lg:flex md:flex lg:gap-20"
        >
          <div>
            <figure>
              <img
                className="lg:w-[500px] lg:h-[330px] md:w-[300px] md:h-[250px] w-[400px] h-[300px]"
                src={photo}
                alt="Movie"
              />
            </figure>
          </div>
          <div className="card-body">
            <h2 className="card-title lg:justify-center md:justify-center justify-start">
              {type}
            </h2>
            <p className="">{details}</p>
            <p className="lg:mt-0 md:mt-2 mt-0 text-2xl text-center text-[#6D3622]">
              ${present_price}
            </p>

            <Link
              onClick={orderHandler}
              style={{
                background: "#6D3622",
                border: "none",
                borderRadius: "0px",
              }}
              className="btn"
            >
              purchase
            </Link>
            {/* <a className="link link-neutral justify-start">I'm a simple link</a> */}
          </div>
        </div>
      </div>
      <div className="divider"></div>
    </div>
  );
};

export default ItemDetails;
