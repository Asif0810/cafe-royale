import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../Context/AuthProvider";
import "./Profile.css";

const Profile = () => {
  const { user } = useContext(Context);
  const email = user?.email;
  console.log(email);
  const { data: myInformation = [] } = useQuery({
    queryKey: ["myinfo", email],
    queryFn: () =>
      fetch(`https://cafe-server.vercel.app/myinfo?email=${email}`).then(
        (res) => res.json().catch(console.error())
      ),
  });
  console.log(myInformation);
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
          <Link
            to={"/profile/update-profile"}
            style={{ marginLeft: "110px" }}
            className="btn btn-sm "
          >
            update profile
          </Link>
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
