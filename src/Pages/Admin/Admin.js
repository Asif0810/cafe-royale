import { useQuery } from "@tanstack/react-query";
import React from "react";
import AdminDetails from "./AdminDetails";

const Admin = () => {
  const { data: allusers = [] } = useQuery({
    queryKey: ["alluser"],
    queryFn: () =>
      fetch("https://cafe-server.vercel.app/alluser")
        .then((res) => res.json())
        .catch(console.error()),
  });
  console.log(allusers);
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table table-compact w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Login Email</th>
              <th>user Role</th>
              <th>Location</th>
              <th>Registration date</th>
            </tr>
          </thead>
          <tbody>
            {allusers.map((user, i) => (
              <AdminDetails key={user._id} user={user} i={i}></AdminDetails>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Admin;
