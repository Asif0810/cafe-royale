import React, { useContext } from "react";
import { Context } from "../../Context/AuthProvider";
import "./Profile.css";
const Profile = () => {
  const { user } = useContext(Context);
  console.log(user);
  return (
    <div className="h-[500px] justify-center items-center">
      <div className="w-[400px] mx-auto  border-2 mt-14 p-6">
        <img
          className="mx-auto"
          style={{ width: "100px", height: "100px" }}
          src={user?.photoURL}
          alt=""
        />
        <p className=" text-center font-bold">{user?.displayName}</p>
        <div className="w-full">
          <button style={{ marginLeft: "110px" }} className="btn btn-sm ">
            update profile
          </button>
        </div>
        <div className="">
          <h2 className="text-xl font-bold inline">Name : </h2>
          <span style={{ color: "gray" }}>{user?.displayName}</span> <br />
          <h2 className="text-xl font-bold inline">Email : </h2>
          <span style={{ color: "gray" }}>{user?.email}</span>
          <br />
          <h2 className="text-xl font-bold inline">Address : </h2>
          <span style={{ color: "gray" }}></span> <br />
          <h2 className="text-xl font-bold inline">College : </h2>
          <span style={{ color: "gray" }}></span> <br />
          <h2 className="text-xl font-bold inline">Phone : </h2>
          <span style={{ color: "gray" }}></span> <br />
          <h2 className="text-xl font-bold inline">Gender : </h2>
          <span style={{ color: "gray" }}></span> <br /> <br />
        </div>
      </div>
    </div>
  );
};

export default Profile;
