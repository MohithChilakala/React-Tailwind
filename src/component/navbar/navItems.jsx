import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import menu from "../../assets/hamburgerMenu.svg";

const NavItems = () => {
  const [navItems] = useState([
    { name: "Home", to: "/home" },
    { name: "About", to: "/about" },
    { name: "Services", to: "/services" },
    { name: "Contact", to: "/contact" },
  ]);
  const [showMenu, setMenu] = useState(false);
  const location = useLocation();

  return (
    <>
      <ul
        className={`${showMenu ? "" : "max-sm:hidden"} 
          flex sm:ml-20 sm:space-x-4 sm:items-center
          max-sm:absolute max-sm:left-0 max-sm:top-0 max-sm:w-[28%] max-sm:h-screen max-sm:mt-14
          max-sm:z-10 max-sm:bg-gray-600 max-sm:flex-col max-sm:items-center`
        }
      >
        {navItems.map((navItem) => (
          <li 
            key={navItem.name} onClick={() => setMenu(false)}
            className="max-sm:w-full max-sm:text-center">
            <Link
              to={navItem.to}
              onClick={() => setMenu(false)}
              className={`${
                location.pathname === navItem.to
                  ? "bg-gray-900 max-sm:bg-gray-700"
                  : "text-gray-400 hover:bg-gray-700 hover:text-white"
              } sm:rounded-md sm:px-3 py-2 text-sm font-medium transition-colors duration-300 ease-in-out select-none
                max-sm:w-full max-sm:inline-block`
            }
            >
              {navItem.name}
            </Link>
          </li>
        ))}
      </ul>
      <img
        src={menu}
        alt="Menu"
        onClick={() => setMenu(!showMenu)}
        className="absolute sm:hidden left-3 top-4 w-[20px] h-[20px] invert"
      />
    </>
  );
};

export default NavItems;
