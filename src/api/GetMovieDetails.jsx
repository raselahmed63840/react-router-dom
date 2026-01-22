import React from "react";

const GetMovieDetails = async ({ params }) => {
  console.log(params);
  const id = params.movieID;
  try {
    const response = await fetch(
      `http://www.omdbapi.com/?i=${id}&apikey=${import.meta.env.VITE_API_KEY}`,
    );
    const data = await response.json();
    return data; // should include { Search: [...] }
  } catch (error) {
    console.error("Error fetching API data:", error);
    return { Search: [] }; // return empty array on error
  }
};

export default GetMovieDetails;
