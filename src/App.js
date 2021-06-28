import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import WatchListScreen from "./screens/WatchListScreen";
import AddMovieScreen from "./screens/AddMovieScreen";
import Header from "./components/Header";
import WatchedMovieScreen from "./screens/WatchedMovieScreen";
import { Container } from "@material-ui/core";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Container>
          <Route path="/" component={WatchListScreen} exact />
          <Route path="/add" component={AddMovieScreen} />
          <Route path="/watched" component={WatchedMovieScreen} />
        </Container>
      </Router>
    </>
  );
}

export default App;
