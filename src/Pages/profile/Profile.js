import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../Context/AuthProvider";
import "./Profile.css";

const Profile = () => {
  const { user } = useContext(Context);
  const { data: myInformation = [], isLoading } = useQuery({
    queryKey: ["myinfo", user?.email],
    queryFn: () =>
      fetch(`http://localhost:5000/myinfo?email=${user?.email}`).then((res) =>
        res.json().catch(console.error())
      ),
  });
  if (isLoading) {
    return <div>loading.......</div>;
  }
  console.log(myInformation);
  const { College, Gender, Phone, address, role, user_Email, user_name, _id } =
    myInformation;
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
            to={`/profile/update-profile/${_id}`}
            style={{ marginLeft: "110px" }}
            className="btn btn-sm "
          >
            update profile
          </Link>
        </div>
        <div className="">
          <div className="mt-1">
            <h2 className="text-xl font-bold inline">Name : </h2>
            <span style={{ color: "gray" }}>{user_name}</span> <br />
          </div>
          <div className="mt-1">
            <h2 className="text-xl font-bold inline">Email : </h2>
            <span style={{ color: "gray" }}>{user_Email}</span>
            <br />
          </div>
          <div className="mt-1">
            <h2 className="text-xl font-bold inline">Address : </h2>
            <span style={{ color: "gray" }}>{address}</span> <br />
          </div>
          <div className="mt-1">
            <h2 className="text-xl font-bold inline">College : </h2>
            <span style={{ color: "gray" }}>{College}</span> <br />
          </div>
          <div className="mt-1">
            <h2 className="text-xl font-bold inline">Phone : </h2>
            <span style={{ color: "gray" }}>{Phone}</span> <br />
          </div>
          <div className="mt-1">
            <h2 className="text-xl font-bold inline">Gender : </h2>
            <span style={{ color: "gray" }}>{Gender}</span> <br />
          </div>
          <div className="mt-1">
            <h2 className="text-xl font-bold inline">User Role : </h2>
            <span style={{ color: "gray" }}>{role}</span> <br /> <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
