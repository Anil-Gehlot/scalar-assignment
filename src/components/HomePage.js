import React from "react";
import { Link } from "react-router-dom";
// import { useHistory } from "react-outer-dom"; // Import useHistory for navigation

const HomePage = () => {
  return (
    <div
      className="bg-secondary min-h-screen text-gray-400 flex flex-col items-center justify-center text-center"
      style={{ border: "2px solid rgba(255, 255, 255, 0.1)" }}
    >

      <div className="mb-8 w-40">
        <img
          src="Turquoise@2x.png" 
          alt="Logo"
        />
      </div>

      <h1 className=" font-bold text-3xl md:text-4xl mb-4">
        Welcome to Perplexity
      </h1>


      <p className=" text-lg md:text-xl mb-6">
        Discover a world of articles and insights tailored just for you!
      </p>

 
      <Link to={'/discover'}>
        <button className="bg-cyan-400 hover:bg-cyan-600 text-black font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105">
          See Discover Page
        </button>
      </Link>
    </div>
  );
};

export default HomePage;
