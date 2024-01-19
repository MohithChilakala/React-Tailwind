import { useState } from "react";
import person from "../../assets/person.svg";
import menu from "../../assets/hamburgerMenu.svg";
import { Link, useLocation } from "react-router-dom";

const isLoggedin = false;

const Navbar = () => {
  const location = useLocation();
  const [navItems] = useState([
    { name: "Home", to: "/home" },
    { name: "About", to: "/about" },
    { name: "Services", to: "/services" },
    { name: "Contact", to: "/contact" }
  ]);
  const [showMenu, setMenu] = useState(false);

  const updateNav = (name) => {
    setMenu(false);
  };

  return (
    <nav className="w-full pl-12 pr-[3%] py-2.5 bg-gray-800 flex justify-between absolute top-0">
      <div className="flex flex-col sm:flex-row">
        <h1 className="text-3xl select-none">Todo&nbsp;List</h1>
        <ul
          className={`${
            showMenu ? "" : "hidden"
          } space-y-2 mt-3 sm:mt-0 sm:space-y-0 sm:flex sm:ml-20 sm:space-x-4 sm:items-center sm:flex-row`}
        >
          {navItems.map((navItem) => (
            <li key={navItem.name}>
              <Link
                to={navItem.to}
                className={`${
                  location.pathname === navItem.to ? "bg-gray-900" : "text-gray-400 hover:bg-gray-700 hover:text-white"
                } rounded-md px-3 py-2 text-sm font-medium transition-colors duration-300 ease-in-out select-none`}
                onClick={() => updateNav(navItem.name)}
              >
                {navItem.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {isLoggedin ? (
        <div className="p-1 h-max rounded-full mt-1 cursor-pointer border-[1.5px]">
          <img
            src={person}
            alt="Account"
            className="invert h-max my-auto p-[1px] border-white"
          />
        </div>
      ) : (
        <div className="text-gray-400 cursor-pointer hover:text-white h-max mt-2 font-semibold transition-colors duration-[400ms] select-none">
          SignUp / Login
        </div>
      )}
      <img
        src={menu}
        alt="Menu"
        className="absolute sm:hidden left-3 top-4 w-[20px] h-[20px] invert"
        onClick={() => setMenu(!showMenu)}
      />
    </nav>
  );
};

export default Navbar;