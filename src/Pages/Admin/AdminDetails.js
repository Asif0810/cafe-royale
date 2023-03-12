import React from "react";

const AdminDetails = ({ user, i }) => {
  const { user_name, user_Email, role, date, address } = user;
  console.log(user_name);
  return (
    <tr>
      <th>{i + 1}</th>
      <td>{user_name}</td>
      <td>{user_Email}</td>
      <td>{role}</td>
      <td>{address}</td>
      <td>{date}</td>
    </tr>
  );
};

export default AdminDetails;
