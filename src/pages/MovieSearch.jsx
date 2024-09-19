import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MovieSearch = () => {
  const [query, setQuery] = useState(''); // State to hold the search query
  const [searchResults, setSearchResults] = useState([]); // State to hold search results

  useEffect(() => {
    if (query) {
      // Fetch search results when query is not empty
      axios
        .get(`https://api.themoviedb.org/3/search/movie`, {
          params: {
            api_key: 'f88e1a68e044da412259fe73a7a4e089',
            query: query,
          },
        })
        .then((response) => {
          setSearchResults(response.data.results);
        })
        .catch((error) => {
          console.error('Error fetching movie data:', error);
        });
    }
  }, [query]);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Search for Movies</h2>
      <input
        type="text"
        placeholder="Search for a movie..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full p-2 mb-4 border rounded"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {searchResults.length > 0 ? (
          searchResults.map((movie) => (
            <div key={movie.id} className="bg-gray-800 p-4 rounded-lg">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="w-full h-64 object-cover mb-4 rounded"
              />
              <h3 className="text-lg font-semibold text-white">{movie.title}</h3>
              <p className="text-gray-400">{movie.release_date}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-400">No movies try search for movies on netflix</p>
        )}
      </div>
    </div>
  );
};

export default MovieSearch;
