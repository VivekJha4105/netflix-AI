import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  //   console.log(movies);
  return (
    <div className="pt-4 px-4 ">
      <h1 className="font-bold text-xl pb-2 text-white">{title}</h1>
      <div id="movieList" className="flex scrollbar-track-black">
        <div className="flex">
          {movies &&
            movies.map((movie) => (
              <MovieCard
                posterPath={movie.poster_path}
                name={movie.original_title}
                key={movie.id}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
