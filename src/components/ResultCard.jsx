import React from "react";
import { useDispatch } from "react-redux";
import {
  addToWatched,
  addToWatchList,
  removeFromWatchList,
} from "../actions/movieActions";
import { useSelector } from "react-redux";

const ResultCard = ({ movie }) => {
  const toWatchList = useSelector((state) => state.watchList);
  const { watchListItems } = toWatchList;

  const watchedList = useSelector((state) => state.watchedList);
  const { watched } = watchedList;

  let storedMovie = watchListItems.find((o) => o.id === movie.id);
  let watchedMovie = watched.find((o) => o.id === movie.id);

  let watchListDisabled = storedMovie ? true : watchedMovie ? true : false;
  let watchedDisabled = watchedMovie ? true : false;

  const dispatch = useDispatch();
  const watchListHandler = () => {
    dispatch(addToWatchList(movie));
  };

  const watchedHandler = () => {
    dispatch(removeFromWatchList(movie.id));
    dispatch(addToWatched(movie));
  };

  return (
    <div className="result-card">
      <div className="poster-wrapper">
        {movie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={`${movie.title} Poster`}
          />
        ) : (
          <div className="filler-poster" />
        )}
      </div>
      <div className="info">
        <div className="header">
          <h3 className="title">{movie.title}</h3>
          <h4 className="release-date">
            {movie.release_date ? movie.release_date.substring(0, 4) : "-"}
          </h4>
        </div>
        <div className="controls">
          <button
            className="btn"
            onClick={watchListHandler}
            disabled={watchListDisabled}
          >
            Add to WatchList
          </button>

          <button
            className="btn"
            onClick={watchedHandler}
            disabled={watchedDisabled}
          >
            Add to Watched
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
