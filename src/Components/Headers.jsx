import { NavLink } from "react-router-dom";

import logo from "../assets/images/more/logo1.png"
import bg from "../assets/images/Rectangle 1.png"

const Headers = () => {

    const navLinks = (
      <>
        <li>
          <NavLink to={'/'}>Home</NavLink>
        </li>
        <li>
          <NavLink to={'/addCoffee'}>Add Coffee</NavLink>
        </li>

        <li>
          <NavLink to={'/updateCoffee'}>Update Coffee</NavLink>
        </li>
      </>
    );
    return (
      <div style={{backgroundImage: `url(${bg})`, backgroundSize:"cover", backgroundRepeat:"no-repeat"}} className="text-white sticky top-0 left-0">
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
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
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                {navLinks}
              </ul>
            </div>
            <div className="flex items-center">
              <img className="w-16 h-16" src={logo} alt="" />
              <a className="btn btn-ghost sm:text-lg md:text-xl">Espresso Emporium</a>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navLinks}</ul>
          </div>
          <div className="navbar-end">
            <a className="btn">Button</a>
          </div>
        </div>
      </div>
    );
};

export default Headers;