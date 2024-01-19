import NavItems from "./navItems";
import Account from "./account";

const Navbar = () => {
  return (
    <nav className="w-full pl-12 pr-[3%] py-2.5 bg-gray-800 flex justify-between absolute top-0">
      <div className="flex flex-row">
        <h1 className="text-3xl select-none">Todo&nbsp;List</h1>
        <NavItems />
      </div>
      <Account />
    </nav>
  );
};

export default Navbar;