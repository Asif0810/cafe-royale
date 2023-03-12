import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import BuyingDetails from "./BuyingDetails";

const Buying = () => {
  // show all orderd items
  const { data: myOrders = [], refetch } = useQuery({
    queryKey: ["orderd"],
    queryFn: () =>
      fetch(`https://cafe-server.vercel.app/orderd`)
        .then((res) => res.json())
        .catch(console.error()),
  });
  // delete an item
  const deleteHandler = (id) => {
    fetch(`https://cafe-server.vercel.app/delete-item/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          toast.success("deleted");
          refetch();
        }
      })
      .catch(console.error());
  };
  return (
    <div className="w-[1000px] mx-auto">
      <div>
        <div>
          <div>
            <div className="overflow-x-auto w-full">
              <table className="table w-full">
                {/* head */}
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>price</th>
                    <th>Quantity</th>
                    <th>Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {myOrders.map((order) => (
                    <BuyingDetails
                      key={order._id}
                      order={order}
                      deleteHandler={deleteHandler}
                    ></BuyingDetails>
                  ))}
                </tbody>
                {/* foot */}
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Buying;
