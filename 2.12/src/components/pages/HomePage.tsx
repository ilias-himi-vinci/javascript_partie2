import { useOutletContext } from "react-router-dom";
import type { MovieContext } from "../../types";
import PageTitle from "../PageTitle";
import MovieTitleList from "../MovieTitleList";

const HomePage = () => {
  const { movies } : MovieContext = useOutletContext();

  return (
    <div>
      <PageTitle title="My movies" />
      <p>Welcome to myMovies, a site where you can find info about cinemas, movies...</p>
      <h4>My favorietes movies</h4>
      <MovieTitleList movies={movies}></MovieTitleList>
    </div>

    
  );
};
export default HomePage;    