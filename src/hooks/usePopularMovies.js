import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";

// Fetching Popular movies data and updating the popularMovies state data, of movieSlice, in the redux store.

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const getPopularMovies = async () => {
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      API_OPTIONS
    );
    const data = await res.json();
    dispatch(addPopularMovies(data.results));
    // console.log(data.results);
  };

  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default usePopularMovies;