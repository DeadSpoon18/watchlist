import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "../components/MovieCard";

const WatchListScreen = () => {
  const watchList = useSelector((state) => state.watchList);
  const { watchListItems } = watchList;
  return (
    <div>
      <div className="movie-page">
        <div className="container">
          <div className="header">
            <h1 className="heading">My watchlist</h1>
            <span className="count-pill">
              {watchListItems.length}
              {watchListItems.length <= 1 ? " Movie" : " Movies"}
            </span>
          </div>
          {watchListItems.length > 0 ? (
            <div className="movie-grid">
              {watchListItems.map((movie) => {
                return (
                  <MovieCard movie={movie} type="watchList" key={movie.id} />
                );
              })}
            </div>
          ) : (
            <h2 className="no-movies">No movies in your list</h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default WatchListScreen;
