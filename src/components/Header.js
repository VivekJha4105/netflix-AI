import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchArea } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const gpt = useSelector((store) => store.gpt);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => navigate("/error"));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    // unsubscribe the onAuthStateChanged API.
    return () => unsubscribe();
  }, []);

  const handleSearchGPTClick = () => {
    dispatch(toggleGptSearchArea());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute pt-2 flex justify-between bg-gradient-to-b from-black z-20">
      <img className="w-1/12" alt="Netflix" src={LOGO} />

      {user && (
        <div className="flex items-center justify-end">
          {gpt.showGptSearchArea && (
            <select
              className="mr-4 px-4 py-2 bg-slate-700 text-white rounded-md outline-none bg-opacity-70"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="px-4 py-2 mr-4 font-bold border border-red-500 rounded-lg text-white bg-red-500 bg-opacity-50 hover:bg-opacity-100 hover:bg-red-500 hover:text-slate-900"
            onClick={handleSearchGPTClick}
          >
            {gpt.showGptSearchArea ? "Browse Movies" : "GPT Search"}
          </button>
          <img
            className="w-1/12 "
            src={user?.photoURL}
            alt="User Profile Image"
          />
          <div>
            <button
              className="px-3 mx-2 font-bold text-white shadow-md rounded border border-slate-700"
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
