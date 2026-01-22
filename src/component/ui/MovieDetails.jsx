import React from "react";
import { useLoaderData } from "react-router-dom";

const MovieDetails = () => {
  const movieData = useLoaderData();

  const {
    Title,
    Poster,
    Released,
    Genre,
    Director,
    Writer,
    Actors,
    Plot,
    Country,
    Language,
    Runtime,
    Rated,
    Awards,
    BoxOffice,
    Production,
    imdbRating,
    imdbVotes,
    Year,
    Type,
  } = movieData;

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl w-full bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Poster + Info */}
        <div className="flex flex-col md:flex-row">
          {/* Poster */}
          <div className="md:w-1/3">
            <img
              src={
                Poster !== "N/A"
                  ? Poster
                  : "https://via.placeholder.com/300x450"
              }
              alt={Title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Details */}
          <div className="md:w-2/3 p-6 space-y-4">
            <h1 className="text-3xl font-bold">{Title}</h1>
            <p className="text-gray-600">
              {Year} • {Genre} • {Runtime}
            </p>
            <p className="text-gray-500 italic">Rated: {Rated}</p>

            <p className="text-gray-800">
              <span className="font-semibold">Plot:</span> {Plot}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
              <p>
                <span className="font-semibold">Director:</span> {Director}
              </p>
              <p>
                <span className="font-semibold">Writer:</span> {Writer}
              </p>
              <p>
                <span className="font-semibold">Actors:</span> {Actors}
              </p>
              <p>
                <span className="font-semibold">Country:</span> {Country}
              </p>
              <p>
                <span className="font-semibold">Language:</span> {Language}
              </p>
              <p>
                <span className="font-semibold">Released:</span> {Released}
              </p>
              <p>
                <span className="font-semibold">Awards:</span> {Awards}
              </p>
              <p>
                <span className="font-semibold">Box Office:</span> {BoxOffice}
              </p>
              <p>
                <span className="font-semibold">Production:</span> {Production}
              </p>
              <p>
                <span className="font-semibold">Type:</span> {Type}
              </p>
            </div>

            {/* IMDb Rating */}
            <div className="mt-4">
              <span className="inline-block bg-yellow-400 text-black px-3 py-1 rounded-full font-bold">
                IMDb: {imdbRating} / 10 ({imdbVotes} votes)
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
