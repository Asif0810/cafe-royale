import { format } from "date-fns";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";
import { Context } from "../../Context/AuthProvider";

const Update = () => {
  const navigate = useNavigate();
  const { user, selectDate } = useContext(Context);
  const date = format(selectDate, "PP");

  const updatedUser = useLoaderData();
  const { College, _id, Gender, Phone, address, role, user_Email, user_name } =
    updatedUser;

  const { register, handleSubmit } = useForm();
  const updateHandler = (data) => {
    const name = data.name;
    const email = data.email;
    const address = data.address;
    const college = data.college;
    const phone = data.phone;
    const gender = data.gender;
    const updateInfo = {
      name,
      email,
      address,
      college,
      phone,
      gender,
    };
    console.log(updateInfo);
    fetch(`https://cafe-server.vercel.app/myinfo/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          navigate("/profile");
          toast.success("user update has been completed");
        }
      })
      .catch(console.error());
  };
  return (
    <div>
      <div className="h-[500px] flex justify-center items-center ">
        <div className="h-[500px] justify-center items-center">
          <div className="w-[400px] mx-auto  border-2 mt-14 p-6">
            <img
              className="mx-auto"
              style={{ width: "100px", height: "100px" }}
              src={user?.photoURL}
              alt=""
            />
            <p className=" text-center text-2xl font-bold">
              {user?.displayName}
            </p>

            <form onSubmit={handleSubmit(updateHandler)} className="">
              <h2 className="font-bold inline">Name : </h2>
              <input
                {...register("name")}
                type="text"
                defaultValue={user_name}
                placeholder="Type here"
                className="input h-[35px] input-bordered w-full max-w-xs"
              />
              <br />
              <h2 className="font-bold inline">Email : </h2>
              <input
                {...register("email")}
                type="email"
                defaultValue={user_Email}
                placeholder="Type here"
                className="input h-[35px] input-bordered w-full max-w-xs"
              />
              <br />
              <h2 className=" font-bold inline">Address : </h2>
              <input
                {...register("address")}
                defaultValue={address}
                type="address"
                placeholder="Type here"
                className="input h-[35px] input-bordered w-full max-w-xs"
              />
              <br />
              <h2 className="font-bold inline">College : </h2>
              <input
                {...register("college")}
                type="text"
                defaultValue={College}
                placeholder="Type here"
                className="input h-[35px] input-bordered w-full max-w-xs"
              />
              <br />
              <h2 className=" font-bold inline">Phone : </h2>
              <input
                {...register("phone")}
                type="phone"
                defaultValue={Phone}
                placeholder="Type here"
                className="input h-[35px] input-bordered w-full max-w-xs"
              />
              <br />
              <h2 className=" font-bold inline">Gender : </h2>
              <select
                {...register("gender")}
                defaultValue={Gender}
                className="select select-bordered h-[35px] w-full max-w-xs"
              >
                <option value="">select</option>
                <option value={"Male"}>Male</option>
                <option value={"Female"}>Female</option>
                <option value={"Transgender"}>Transgender</option>
              </select>
              <br />
              <button type="submit" className="btn btn-sm mt-5">
                save & change
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Update;
