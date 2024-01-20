import { useRef, useState } from "react";

var name = "Mohi";
var mail = "";
const Profile = () => {
  const [username, setUsername] = useState(name);
  const [email, setEmail] = useState(mail);

  const userRef = useRef();
  const emailRef = useRef();

  const handleNameKeyDown = (e) => {
    if(e.keyCode === 13) {
      name = username;
      userRef.current.blur();
    }
  }

  const handleEmailKeyDown = (e) => {
    if(e.keyCode === 13) {
      mail = email;
      emailRef.current.blur();
    }
  }

  return (
    <div className="card p-8 absolute max-sm:w-52 sm:w-60 h-max top-[35px] right-6 rounded-md z-10">
      <div className="flex flex-col">
        <div className="border-b-[1.5px] pb-1 mb-3">
          <input 
            type="text" value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            onKeyDown={handleNameKeyDown}
            className="bg-transparent text-center text-lg sm:w-44 max-sm:w-36"
            ref={userRef}
          />
        </div>
        <div className="border-b-[1.5px] pb-1 mb-3">
        <input 
            type="text" placeholder="Add email" value={email}
            onChange={(e) => setEmail(e.target.value)} 
            onKeyDown={handleEmailKeyDown}
            className="bg-transparent text-xs overflow-hidden sm:w-[10.5rem] max-sm:w-[8.9rem]"
            ref={emailRef}
          />
          <button className="select-none text-sm">Change password</button>
        </div>
        <div className="flex justify-center">
          <button className="py-1 px-2 rounded-sm border bg-rose-950 font-bold select-none">Logout</button>
        </div>
      </div>
    </div>
  );
}

export default Profile;