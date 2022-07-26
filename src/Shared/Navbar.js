import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/globetech logo.png";

const Navbar = () => {
  const menuItems = (
    <>
      <li>
        <Link className="text-[21px] font-bold text-[#8FE5FF]" to="/home">
          Home
        </Link>
      </li>
      <li>
        <Link className="text-[21px]  font-bold text-[#8FE5FF]" to="/services">
          Services
        </Link>
      </li>
      <li>
        <Link className="text-[21px] font-bold text-[#8FE5FF]" to="/login">
          login
        </Link>
      </li>
    </>
  );

  return (
    <navbar>
      <div class="drawer">
        <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col">
          {/* <!-- Navbar --> */}
          <div class="w-full navbar ">
            <div class="flex-none lg:hidden">
              <label for="my-drawer-3" class="btn btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  class="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div class="flex-1 px-2 mx-2">
              <img className="w-[205px] h-[42px]" src={logo} alt="" />
            </div>
            <div class="flex-none hidden lg:block">
              <ul class="menu menu-horizontal">
                {/* <!-- Navbar menu content here --> */}
                {menuItems}
              </ul>
            </div>
          </div>
          {/* <!-- Page content here --> */}
          Content
        </div>
        <div class="drawer-side">
          <label for="my-drawer-3" class="drawer-overlay"></label>
          <ul class="menu p-4 overflow-y-auto w-80 bg-base-100">
            {/* <!-- Sidebar content here --> */}
            <li>
              <a>Sidebar Item 1</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
          </ul>
        </div>
      </div>
    </navbar>
  );
};

export default Navbar;
