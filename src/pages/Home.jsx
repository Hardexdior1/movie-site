import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Hero from "./Hero";
import { format } from "date-fns";

const Home = () => {
  const TMDB_ACCESS_TOKEN =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmODhlMWE2OGUwNDRkYTQxMjI1OWZlNzNhN2E0ZTA4OSIsIm5iZiI6MTcyMzE1Mzg1Mi40OTc0ODQsInN1YiI6IjY2YjUzYzYyZmRjOGYwMzA4ZjU3YTk1OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ML474-USalWWnvPURoZAGq9D4fIHHlFilAKp1rhHmDQ";

  const [popularMovies, setPopularMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [topRated, setTopRated] = useState([]);



  
 

  // sources
  let popular = "popular";
  let upcoming = "upcoming";
  let top_rated = "top_rated";

  useEffect(() => {
    // fetch popular movies
    const fetchPopularMovies = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${popular}`,
          {
            headers: {
              Authorization: `Bearer ${TMDB_ACCESS_TOKEN}`,
            },
          }
        );
        setPopularMovies(response.data.results);
      } catch (error) {
        console.error("Error fetching data from TMDb:", error);
      }
    };

    // fetch upcoming movies
    const fetchUpcomingMovies = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${upcoming}`,
          {
            headers: {
              Authorization: `Bearer ${TMDB_ACCESS_TOKEN}`,
            },
          }
        );
        setUpcomingMovies(response.data.results);
      } catch (error) {
        console.error("Error fetching data from TMDb:", error);
      }
    };
    // fetch topRatedMovies
    const fetchTopRatedMovies = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${top_rated}`,
          {
            headers: {
              Authorization: `Bearer ${TMDB_ACCESS_TOKEN}`,
            },
          }
        );
        setTopRated(response.data.results);
      } catch (error) {
        console.error("Error fetching data from TMDb:", error);
      }
    };
    const now_playing = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/tv/popular`,
          {
            headers: {
              Authorization: `Bearer ${TMDB_ACCESS_TOKEN}`,
            },
          }
        );
        // setNowPlaying(response.data.results);
        // console.log(response.data.results);
      } catch (error) {
        console.error("Error fetching data from TMDb:", error);
      }
    };
    now_playing();
    fetchPopularMovies();
    fetchUpcomingMovies();
    fetchTopRatedMovies();
  }, [popular,top_rated,upcoming]);

  //
  return (
    <div>
      {/* <MovieSearch /> */}
      <Hero />
      <div className="p-10 grid gap-10">
        <div>
          <div>
            <h1 className="font-bold text-2xl mb-4 text-white">
              {" "}
              Popular Movies
            </h1>
          </div>
          <div className="grid gap-4 md:grid-cols-3  lg:grid-cols-5">
            {popularMovies?.map((item) => {
              const formattedDate = format(
                new Date(item.release_date),
                "MMMM d, yyyy"
              );

              return (
                <div className="shadow-md rounded-md bg-white border  border-gray-500">
                  <Link to={"/Home/" + item.id} key={item.id}>
                    <div className="relative">
                      <img
                        src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}
                        alt={item.title}
                      />
                    </div>
                    <div className="px-4 py-6 ">
                      <h1 className="font-bold text-1xl">
                        {" "}
                        {item.original_title}{" "}
                      </h1>
                      <p className="font-bold">Release Date: {formattedDate}</p>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>

        <div>
          <div>
            <h1 className="font-bold text-2xl mb-4 text-white">
              {" "}
              Upcoming Movies{" "}
            </h1>
          </div>
          <div className="grid gap-4 md:grid-cols-3  lg:grid-cols-5">
            {upcomingMovies?.map((item) => {
              const formattedDate = format(
                new Date(item.release_date),
                "MMMM d, yyyy"
              );

              return (
                <div
                  key={item.id}
                  className="shadow-md rounded bg-gray-400 text-white font-bold">
                  <Link to={"/Home/" + item.id} key={item.id}>
                    <div>
                      <img
                        src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}
                        alt={item.title}
                      />
                    </div>
                  </Link>
                  <div className="px-4 py-6">
                    <h1 className="font-bold"> {item.original_title} </h1>
                    <p className="semibold">Release Date: {formattedDate}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div>
          <div>
            <h1 className="font-bold text-2xl mb-4 text-white">
              Top Rated Movies{" "}
            </h1>
          </div>
          <div className="grid gap-4 md:grid-cols-3  lg:grid-cols-5">
            {topRated?.map((item) => {
              const formattedDate = format(
                new Date(item.release_date),
                "MMMM d, yyyy"
              );

              return (
                <div
                  key={item.id}
                  className="shadow-md rounded bg-gray-400 text-white font-bold">
                  <Link to={"/Home/" + item.id} key={item.id}>
                    <div>
                      <img
                        src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}
                        alt={item.title}
                      />
                    </div>
                  </Link>
                  <div className="px-4 py-6">
                    <h1 className="font-bold"> {item.original_title} </h1>
                    <p className="semibold">Release Date: {formattedDate}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
