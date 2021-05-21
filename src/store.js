import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { watchedListReducer, watchlistReducer } from "./reducers/movieReducers";

const reducer = combineReducers({
  watchList: watchlistReducer,
  watchedList: watchedListReducer,
});

const watchListItemsFromStorage = localStorage.getItem("watchList")
  ? JSON.parse(localStorage.getItem("watchList"))
  : [];

const watchedItemsFromStorage = localStorage.getItem("watchedList")
  ? JSON.parse(localStorage.getItem("watchedList"))
  : [];

const initialState = {
  watchList: {
    watchListItems: watchListItemsFromStorage,
  },
  watchedList: {
    watched: watchedItemsFromStorage,
  },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
