import { useState } from "react";
import person from "../../assets/person.svg";
import LoginForm from "./login"
import SignupForm from "./signup";
import Profile from "./profile"

const isLoggedin = true;
const Account = () => {
  const [showLoginForm, setLoginForm] = useState(false);
  const [showProfile, setProfile] = useState(false);

  return (
    <>
      {isLoggedin ? 
        <div className="p-1 h-max rounded-full mt-1 cursor-pointer border-[1.5px]">
          <img
            src={person} alt="Account" onClick={() => setProfile(!showProfile)}
            className="invert h-max my-auto p-[1px] border-white"
          />
        </div>
      : 
        <div
          className="text-gray-400 cursor-pointer hover:text-white h-max mt-2 font-semibold transition-colors duration-[400ms] select-none"
          onClick={() => setLoginForm(true)}
        >
          SignUp / Login
        </div>
      }
      {showLoginForm ? <LoginForm /> : <SignupForm />}
      {showProfile && <Profile />}
      {(showLoginForm || showProfile) && 
        <div 
          className="absolute left-0 top-14 bg-white w-screen h-[calc(100vh-3.5rem)] opacity-0"
          onClick={() => {setLoginForm(false); setProfile(false)}}
        >
        </div>
      }
    </>
  );
};

export default Account;
