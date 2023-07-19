import { Routes, Route } from "react-router-dom";
import { MovieDetail } from "../pages/MovieDetail";
import { MovieList } from "../pages/MovieList";
import { Search } from "../pages/Search";
import { PageNotFound } from "../pages/PageNotFound";

export const AllRoutes = () => {
  return (
    <main className="bg-black">
      <Routes>
        <Route path="/" element={<MovieList apiPath="movie/now_playing" />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route
          path="/movies/popular"
          element={<MovieList apiPath="movie/popular" />}
        />
        <Route
          path="/movie/top"
          element={<MovieList apiPath="movie/top_rated" />}
        />
        <Route
          path="/movies/upcoming"
          element={<MovieList apiPath="movie/upcoming" />}
        />
        <Route path="search" element={<Search apiPath="search/movie" />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </main>
  );
};
