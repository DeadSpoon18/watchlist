import {
  ADD_TO_WATCHED,
  ADD_TO_WATCHLIST,
  MOVE_TO_WATCHED,
  REMOVE_FROM_WATCHED,
  REMOVE_FROM_WATCHLIST,
} from "../constants/movieConstants";

export const addToWatchList = (movie) => async (dispatch, getState) => {
  try {
    dispatch({ type: ADD_TO_WATCHLIST, payload: movie });
    localStorage.setItem(
      "watchList",
      JSON.stringify(getState().watchList.watchListItems)
    );
  } catch (error) {}
};

export const removeFromWatchList = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: REMOVE_FROM_WATCHLIST, payload: id });
    localStorage.setItem(
      "watchList",
      JSON.stringify(getState().watchList.watchListItems)
    );
  } catch (error) {}
};

export const addToWatched = (movie) => async (dispatch, getState) => {
  try {
    dispatch({ type: ADD_TO_WATCHED, payload: movie });
    localStorage.setItem(
      "watchedList",
      JSON.stringify(getState().watchedList.watched)
    );
  } catch (error) {}
};

export const moveToWatched = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: MOVE_TO_WATCHED, payload: id });
    localStorage.setItem(
      "watchList",
      JSON.stringify(getState().watchList.watchListItems)
    );
  } catch (error) {}
};

export const removeFromWatched = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: REMOVE_FROM_WATCHED, payload: id });
    localStorage.setItem(
      "watchedList",
      JSON.stringify(getState().watchedList.watched)
    );
  } catch (error) {}
};
