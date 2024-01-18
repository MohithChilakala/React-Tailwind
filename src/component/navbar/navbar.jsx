import { useState } from "react";

const user = {
  url: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};

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
      <div className="flex items-center">
        <h1 className="text-3xl text-white select-none">Todo&nbsp;List</h1>
        <ul className="flex ml-20 space-x-4">
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
                    "transition-colors duration-300 ease-in-out"
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
        <img 
					src={user.url} 
					alt="Profile" 
					className={classNames(
						"w-10 h-10 my-auto rounded-full",
						"cursor-pointer"
					)} />
      ) : (
        <></>
      )}
    </nav>
  );
};

export default Navbar;
