import React from "react";
import { useSelector } from "react-redux";
import lang from "../utils/langConstants";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  return (
    <div className="pt-[10%]">
      <form className="bg-black w-1/2 grid grid-cols-12 mx-auto rounded-md">
        <input
          className="p-4 m-3 rounded-md col-span-9 outline-none text-xl"
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button className="m-4 rounded-md col-span-3 bg-red-500 text-white text-xl">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
