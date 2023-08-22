import React from "react";
import { Link } from "react-router-dom";
const navBarItems = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Contact Us", path: "/contact" },
];

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm mb-2">
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
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Orders</a>
            </li>

            <li>
              <a>Others</a>
            </li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          Task.Co
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/orders">Orders</Link>
          </li>
          <li>
            <a>Other</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end space-x-2">
        <Link to="/signup" className="btn btn-primary">
          Register
        </Link>
        <Link to="/login" className="btn btn-primary">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
