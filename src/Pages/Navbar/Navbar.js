import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { Context } from "../../Context/AuthProvider";

const Navbar = () => {
  const userPhoto =
    "https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI=";
  const { user, logout } = useContext(Context);

  const logoutHandler = () => {
    logout()
      .then(() => {})
      .catch(console.error());
  };
  const navbar = (
    <>
      <li>
        <NavLink
          to="/"
          style={({ isActive }) =>
            isActive
              ? {
                  color: "#6D3622",
                  background: "#f0f0f0",
                  borderRadius: "0px",
                  borderRadius: "2px",
                }
              : { color: "white" }
          }
        >
          Home
        </NavLink>
      </li>
      {/* <li>{user?.email}</li> */}
      <li>
        <NavLink
          to="/about"
          style={({ isActive }) =>
            isActive
              ? {
                  color: "#6D3622",
                  background: "#f0f0f0",
                  borderRadius: "0px",
                  borderRadius: "2px",
                }
              : { color: "white" }
          }
        >
          About
        </NavLink>
      </li>
      <li>
        <Link>Contract</Link>
      </li>
      <li>{/* <Link>Admin</Link> */}</li>
    </>
  );

  return (
    <div className="navbar bg-[#6D3622] px-0 lg:px-40 pr-6">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            style={{ borderTop: "5px solid #6D3622" }}
            tabIndex={0}
            className="menu mt-3 menu-compact dropdown-content p-2 text-[#6D3622] shadow bg-base-100 border-2 w-52"
          >
            {navbar}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-white f text-xl">
          Cafe <i className="pl-1">Royale</i>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className=" menu text menu-horizontal text-white px-1">{navbar}</ul>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-end ">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar ">
            <div className="w-10 rounded-full">
              <img src={user ? user.photoURL : userPhoto} />
            </div>
          </label>
          <ul
            tabIndex={0}
            style={{ borderRadius: "0px", borderTop: "5px solid #6D3622" }}
            className="mt-6 p-2 shadow  menu menu-compact dropdown-content  rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <Link to="/login">Sign In</Link>
            </li>
            <li>
              <Link to={"/register"}>Sign Up</Link>
            </li>
            <li>
              <Link onClick={logoutHandler}>Logout</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
