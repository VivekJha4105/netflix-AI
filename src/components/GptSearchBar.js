import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/langConstants";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  const handleGptSearch = async () => {
    const gptQuery =
      "Act as a Movie Recommendation System and suggest some movies for the query: " +
      searchText.current.value +
      ". Only give me names of five movies, comma separated like the examples ahead. Example: Gadar, Sholay, Dhoom, Zeher, Krish";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    // Open AI API call results.
    const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");

    const gptMoviesPromiseArray = gptMovies.map((movie) =>
      // Following function returns a Promise as it is an async function.
      searchGptMoviesInTMDB(movie)
    );

    // Promise.all() resolves all the Promises in the Promise Array passed to it as argument.
    const tmdbSearchResults = await Promise.all(gptMoviesPromiseArray);
    dispatch(
      addGptMovieResult({
        movieNames: gptMovies,
        movieResults: tmdbSearchResults,
      })
    );
  };

  const searchGptMoviesInTMDB = async (movie) => {
    try {
      const data = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
        API_OPTIONS
      );
      const res = await data.json();
      return res.results;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="pt-[10%]">
      <form
        className="bg-black w-1/2 grid grid-cols-12 mx-auto rounded-md"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          className="p-4 m-3 rounded-md col-span-9 outline-none text-xl"
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="m-4 rounded-md col-span-3 bg-red-500 text-white text-xl"
          onClick={handleGptSearch}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
