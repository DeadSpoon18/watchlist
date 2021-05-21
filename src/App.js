import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import WatchListScreen from "./screens/WatchListScreen";
import AddMovieScreen from "./screens/AddMovieScreen";
import Header from "./components/Header";
import WatchedMovieScreen from "./screens/WatchedMovieScreen";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Route path="/" component={WatchListScreen} exact />
        <Route path="/add" component={AddMovieScreen} />
        <Route path="/watched" component={WatchedMovieScreen} />
      </Router>
    </>
  );
}

export default App;
