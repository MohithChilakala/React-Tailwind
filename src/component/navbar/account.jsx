import { useState } from "react";
import person from "../../assets/person.svg";
import Profile from "./profile";
import { Link } from "react-router-dom";
import { getCookie } from "../../services/cookieService";

const Account = () => {
  const name = getCookie("username");
  const mail = getCookie("mail");

  const [showProfile, setProfile] = useState(false);
  const [isLoggedin, setLoggedin] = useState(name !== "");

  return (
    <>
      {isLoggedin ? (
        <div className="p-1 h-max rounded-full mt-1 cursor-pointer border-[1.5px]">
          <img
            src={person}
            alt="Account"
            onClick={() => setProfile(!showProfile)}
            className="invert h-max my-auto p-[1px] border-white"
          />
        </div>
      ) : (
        <Link 
          to="/login"
          className="text-gray-400 cursor-pointer hover:text-white h-max mt-2 font-semibold transition-colors duration-[400ms] select-none"
        >
          SignUp / Login
        </Link>
      )}
      {showProfile && (
        <Profile
          name={name}
          mail={mail}
          handleLogout={() => {
            setLoggedin(false);
            setProfile(false);
          }}
        />
      )}
      {showProfile && (
        <div
          className="absolute left-0 top-14 bg-white w-screen h-[calc(100vh-3.5rem)] opacity-0"
          onClick={() => {
            setProfile(false);
          }}
        />
      )}
    </>
  );
};

export default Account;
