import { useState, useRef } from "react";
import Header from "./Header";
import { validate } from "../utils/Validate.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_IMG_URL, USER_AVATAR } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const fullName = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  //   console.log(fullName, email, password);

  const handleButtonClick = () => {
    const message = validate(email.current.value, password.current.value);
    setErrorMessage(message);

    if (message) return;

    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: fullName.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              navigate("/browse");
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          setErrorMessage(errorCode + " - " + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // const user = userCredential.user;
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          setErrorMessage(errorCode + " - " + errorMessage);
        });
    }
  };

  const toggleSignInForm = () => {
    setIsSignForm(!isSignInForm);
  };

  return (
    <div>
      <Header />

      <div className="absolute">
        <img
          className="h-screen object-cover md:h-[100%]"
          src={BG_IMG_URL}
          alt="bg-cover"
        />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute  w-10/12 md:w-3/12 h-auto my-32 md:my-44 mx-auto right-0 left-0 flex flex-col items-center rounded-lg md:p-4 bg-black bg-opacity-80"
      >
        <div className="my-2 md:my-6 p-2 text-2xl md:text-3xl text-white font-bold">
          <p>{isSignInForm ? "SIGN IN" : "SIGN UP"}</p>
        </div>

        {!isSignInForm && (
          <input
            ref={fullName}
            type="text"
            placeholder="Full Name"
            className="my-2 p-4 rounded-lg w-10/12 bg-gray-700 text-white outline-none"
          />
        )}

        <input
          ref={email}
          type="text"
          placeholder="Email or Phone"
          className="my-2 p-4 rounded-lg w-10/12 bg-gray-700 text-white outline-none"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="my-2 p-4 rounded-lg w-10/12 bg-gray-700  text-white outline-none"
        />
        <p className="m-2 p-2 text-red-600 text-lg">{errorMessage}</p>
        <button
          className="p-4 my-8 bg-red-600 text-xl text-white font-bold rounded-lg w-10/12"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        {isSignInForm ? (
          <p className="p-2 pb-6 text-gray-400">
            New to Netflix?{" "}
            <span
              className="text-white font-bold cursor-pointer"
              onClick={toggleSignInForm}
            >
              Sign Up{" "}
            </span>
            now!
          </p>
        ) : (
          <p className="p-2 pb-6 text-gray-400">
            Already a User?{" "}
            <span
              className="text-white font-bold cursor-pointer"
              onClick={toggleSignInForm}
            >
              Sign In{" "}
            </span>
            now!
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
