import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

function MainContainer() {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  // ---> Initially the Redux Store is not updated with the data as the function to call the data is in useEffect hook which runs only after component is moutned.
  // ----> So accessing the movie data using the movieSlice from the redux store will throw an error.

  // ====> To avoid above issue we do an early reutrn using a simple if statement.
  if (!movies) return;

  const mainMovie = movies[0];

  const { original_title, overview, id } = mainMovie;

  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
}

export default MainContainer;
