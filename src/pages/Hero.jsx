import React, { useState } from "react";
import hero from "../images/hero.jpg";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const heroImg = `url(${hero})`;

  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  
  const handleSearch = () => {
    if (searchQuery) {
      navigate(`/search?search=${searchQuery}`);
    }
  };
  return (
    <div
      className="hero py-14 px-5"
      style={{ backgroundImage: `url(${heroImg})` }}>
      <div className="text-white px-4">
        <h1 className="text-4xl md:text-5xl font-bold">Welcome.</h1>
        <p className="text-xl font-semibold md:text-2xl mt-4">
          Millions of movies, TV shows and people to discover. Explore now.
        </p>
        <form className="mt-8">
          <div className="flex bg-white rounded-full shadow-md overflow-hidden">
            <input
              type="text"
              className="flex-grow px-4 py-2 text-black focus:outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for a movie..."
            />
            <button type="submit"
              className="px-6 py-3 bg-teal-500 text-white font-semibold rounded-full"
              onClick={handleSearch}>
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Hero;
