import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="mx-auto w-min mt-10 text-center">
      <span className="text-3xl font-bold text-gray-100">Oops... </span>
      <p className="text-gray-300 mt-12">The page you are looking for may have been moved, deleted, or possibly never existed.</p>
      <h2 className="text-gray-600 text-[150px] max-w-[90vw] font-black mt-4 select-none h-min">404</h2>
      <Link to="/home" className="bg-green-500 hover:bg-green-600 font-semibold px-6 py-3 rounded-md my-6">
        Home page
      </Link>
    </div>
  );
};

export default PageNotFound;
