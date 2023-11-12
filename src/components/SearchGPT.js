import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BG_IMG_URL } from "../utils/constants";

const SearchGPT = () => {
  return (
    <div>
      <div className="fixed -z-10">
        <img className="h-screen object-cover md:h-[100%]" src={BG_IMG_URL} />
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default SearchGPT;
