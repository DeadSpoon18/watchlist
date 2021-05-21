import {
  ADD_TO_WATCHED,
  ADD_TO_WATCHLIST,
  MOVE_TO_WATCHED,
  REMOVE_FROM_WATCHED,
  REMOVE_FROM_WATCHLIST,
} from "../constants/movieConstants";

export const watchlistReducer = (state = { watchListItems: [] }, action) => {
  switch (action.type) {
    case ADD_TO_WATCHLIST:
      return {
        ...state,
        watchListItems: [...state.watchListItems, action.payload],
      };

    case REMOVE_FROM_WATCHLIST:
      return {
        ...state,
        watchListItems: state.watchListItems.filter((x) => {
          return action.payload !== x.id;
        }),
      };
    case MOVE_TO_WATCHED:
      return {
        ...state,
        watchListItems: state.watchListItems.filter((x) => {
          return action.payload !== x.id;
        }),
      };
    default:
      return state;
  }
};

export const watchedListReducer = (state = { watched: [] }, action) => {
  switch (action.type) {
    case ADD_TO_WATCHED:
      return {
        ...state,
        watched: [...state.watched, action.payload],
      };
    case REMOVE_FROM_WATCHED:
      return {
        ...state,
        watched: state.watched.filter((x) => {
          return x.id !== action.payload;
        }),
      };

    default:
      return state;
  }
};
