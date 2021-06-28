import axios from "axios";
import React, { useState, useEffect } from "react";
import ResultCard from "../components/ResultCard";
import TextField from "@material-ui/core/TextField";

const AddMovieScreen = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    const getSearchedMovie = async () => {
      if (query) {
        const res = await axios.get(
          `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1&include_adult=false&query=${query}`
        );
        const { data } = res;
        if (!data.errors) {
          setResults(data.results);
        } else {
          setResults([]);
        }
      }
      if (query === "") {
        setResults([]);
      }
    };
    getSearchedMovie();
  }, [query]);
  return (
    <div className="add-page">
      <div className="container">
        <div className="add-content">
          <div className="input-wrapper">
            <TextField
              type="text"
              autoFocus
              placeholder="Search for movies"
              margin="dense"
              fullWidth
              variant="outlined"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          {results.length > 0 &&
            results.map((movie) => (
              <ul className="results" key={movie.id}>
                <li>
                  <ResultCard movie={movie} />
                </li>
              </ul>
            ))}
        </div>
      </div>
    </div>
  );
};

export default AddMovieScreen;
