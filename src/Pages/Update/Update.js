import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Context } from "../../Context/AuthProvider";

const Update = () => {
  const { user } = useContext(Context);

  const { register, handleSubmit } = useForm();
  const updateHandler = (data) => {
    console.log(data);
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

            <form onClick={handleSubmit(updateHandler)} className="">
              <h2 className=" font-bold inline">Name : </h2>
              <input
                {...register("name")}
                type="text"
                placeholder="Type here"
                className="input h-[35px] input-bordered w-full max-w-xs"
              />
              <br />
              <h2 className=" font-bold inline">Address : </h2>
              <input
                {...register("address")}
                type="address"
                placeholder="Type here"
                className="input h-[35px] input-bordered w-full max-w-xs"
              />
              <br />
              <h2 className="font-bold inline">College : </h2>
              <input
                {...register("college")}
                type="text"
                placeholder="Type here"
                className="input h-[35px] input-bordered w-full max-w-xs"
              />
              <br />
              <h2 className=" font-bold inline">Phone : </h2>
              <input
                {...register("phone")}
                type="phone"
                placeholder="Type here"
                className="input h-[35px] input-bordered w-full max-w-xs"
              />
              <br />
              <h2 className=" font-bold inline">Gender : </h2>
              <select
                {...register("gender")}
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
