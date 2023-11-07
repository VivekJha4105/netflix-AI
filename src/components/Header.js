import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigate("/");
    });
  };

  return (
    <div className="absolute flex justify-between bg-gradient-to-b from-black z-20">
      <img
        className="w-2/12"
        alt="Netflix"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
      />

      {user && (
        <div className="flex items-center justify-end">
          <img className="w-2/12 h-1/12" src={user?.photoURL} />
          <div>
            <button
              className="px-3 font-bold text-white"
              onClick={handleSignOut}
            >
              Sign Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
