import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTrendingMovies from "../hooks/useTrendingMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SearchGPT from "./SearchGPT";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  const gpt = useSelector((store) => store.gpt);
  useNowPlayingMovies();
  usePopularMovies();
  useTrendingMovies();
  useUpcomingMovies();

  return (
    <div>
      <Header />
      {gpt.showGptSearchArea ? (
        <SearchGPT />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
