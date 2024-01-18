import { useState } from "react";
import person from '../../assets/person.svg'
import menu from '../../assets/hamburgerMenu.svg'

const isLoggined = true;

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const [navItems, setNavItems] = useState([
    { name: "Home", href: "#home", current: true },
    { name: "About", href: "#about", current: false },
    { name: "Services", href: "#services", current: false },
    { name: "Contact", href: "#contact", current: false },
  ]);
  const [showMenu, setMenu] = useState(false);

	function updateNav(name) {
		const updatedNav = navItems.map((navItem) => {
			return {
				...navItem,
				current: navItem.name === name,
			};
		});
		setNavItems(updatedNav);
	}

  return (
    <nav
      className={classNames(
        "w-full pl-12 pr-[3%] py-2.5",
        "bg-gray-800",
        "flex justify-between"
      )}
    >
      <div className="flex flex-col sm:flex-row">
        <h1 className="text-3xl text-white select-none">Todo&nbsp;List</h1>
        <ul className={classNames(
          showMenu ? "" : "hidden",
          "space-y-2 mt-3 sm:mt-0 sm:space-y-0 sm:flex sm:ml-20 sm:space-x-4 sm:items-center sm:flex-row"
        )}>
          {navItems.map((navItem) => {
            return (
              <li key={navItem.name}>
                <a
                  href={navItem.href}
                  className={classNames(
                    navItem.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-400 hover:bg-gray-700 hover:text-white",
                    "rounded-md px-3 py-2 text-sm font-medium",
                    "transition-colors duration-300 ease-in-out select-none"
                  )}
                  onClick={() => updateNav(navItem.name)}
                >
                  {navItem.name}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      {isLoggined ? (
        <div 
					className={classNames(
						"p-1 h-max rounded-full mt-1", 
						"cursor-pointer border-[1.5px]",
            "text-white text-lg font-bold"
					)}>
            <img 
              src={person}
              alt="Account"
              className="invert h-max my-auto p-[1px] border-white select-none"
            />
        </div>
      ) : (
        <div className="my-auto font-semibold text-white border-black cursor-pointer">SignUp / Login</div>
      )}
      <img
        src={menu}
        alt="Menu"
        className="absolute sm:hidden left-2 top-4 w-[20px] h-[20px] invert"
        onClick={() => setMenu(!showMenu)}
      />
    </nav>
  );
};

export default Navbar;
