import React from "react";
import { useDispatch } from "react-redux";
import {
  addToWatched,
  addToWatchList,
  moveToWatched,
  removeFromWatched,
  removeFromWatchList,
} from "../actions/movieActions";

const MovieControls = ({ type, movie }) => {
  const dispatch = useDispatch();

  const removeWatchListMovie = () => {
    dispatch(removeFromWatchList(movie.id));
  };

  const addToWatchedHandler = () => {
    dispatch(moveToWatched(movie.id));
    dispatch(addToWatched(movie));
  };

  const removeFromWatchedHandler = () => {
    dispatch(removeFromWatched(movie.id));
  };

  const moveToWatchlistHandler = () => {
    dispatch(removeFromWatched(movie.id));
    dispatch(addToWatchList(movie));
  };

  return (
    <div className="inner-card-controls">
      {type === "watchList" && (
        <>
          <button className="ctrl-btn" onClick={addToWatchedHandler}>
            <i className="fa-fw far fa-eye"></i>
          </button>
          <button className="ctrl-btn" onClick={removeWatchListMovie}>
            <i className="fa-fw fa fa-times"></i>
          </button>
        </>
      )}
      {type === "watched" && (
        <>
          <button className="ctrl-btn" onClick={moveToWatchlistHandler}>
            <i className="fa-fw far fa-eye-slash"></i>
          </button>
          <button className="ctrl-btn" onClick={removeFromWatchedHandler}>
            <i className="fa-fw fa fa-times"></i>
          </button>
        </>
      )}
    </div>
  );
};

export default MovieControls;
