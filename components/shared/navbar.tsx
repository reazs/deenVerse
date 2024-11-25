import React from "react";
import LogoBrand from "./logoBrand";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 sticky top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
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
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Homepage</a>
            </li>
            <li>
              <a>Portfolio</a>
            </li>
            <li>
              <a>About</a>
            </li>
          </ul>
        </div>
        {/* logo */}
        <LogoBrand />
      </div>

      <div className="navbar-end">
        <a href="/login">
          <button className="btn btn-outline mr-1">Log In</button>
        </a>
        <a href="/signup">
          <Button className="btn">Sign Up</Button>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
