import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const { movieNames, movieResults } = useSelector((store) => store.gpt);

  return (
    <div
      className={
        movieNames ? "p-4 m-4 rounded-md bg-black text-white bg-opacity-70" : ""
      }
    >
      <div>
        {movieNames &&
          movieNames.map((movieName, index) => (
            <MovieList
              key={movieName}
              title={movieName}
              movies={movieResults[index]}
            />
          ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestions;
