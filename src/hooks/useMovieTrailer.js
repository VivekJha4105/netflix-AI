import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/movieSlice";
import { useDispatch } from "react-redux";

// Fetching MainContainer's video trailer and updating the videoTrailer state data, of movieSlice, in the redux store.

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const getMovieTrailer = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );
    const data = await res.json();
    const allTrailers = data.results.filter(
      (video) => video.type === "Trailer"
    );
    const trailer = allTrailers.length ? allTrailers[0] : data.results[0];
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getMovieTrailer();
  }, []);
};

export default useMovieTrailer;
