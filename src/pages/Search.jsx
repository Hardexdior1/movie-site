import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const Search = () => {
  const [searchResults, setSearchResults] = useState([]);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const place = queryParams.get("search");

  useEffect(() => {
    if (place) {
      axios
        .get(`https://api.themoviedb.org/3/search/movie`, {
          params: {
            api_key: "f88e1a68e044da412259fe73a7a4e089",
            query: place,
          },
        })
        .then((response) => {
          setSearchResults(response.data.results);
          console.log(response.data.results);
        })
        .catch((error) => {
          console.error("Error fetching movie data:", error);
        });
    }
  }, [place]);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Search Results for "{place}"</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {searchResults.length > 0 ? (
          searchResults.map((movie) => (
            <Link to={"/Search/" + movie.id} key={movie.id}>
              <div className="bg-gray-800 p-4 rounded-lg">
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className="w-full  object-cover mb-4 rounded"
                />
                <h3 className="text-lg font-semibold text-white">
                  {movie.title}
                </h3>
                <p className="text-gray-400">{movie.release_date}</p>
              </div>
            </Link>
          ))
        ) : (
          <p className="text-gray-400">No movies found</p>
        )}
      </div>
    </div>
  );
};

export default Search;
