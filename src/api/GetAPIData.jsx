import React from "react";

const GetAPIData = async () => {
  try {
    const response = await fetch(
      "http://www.omdbapi.com/?i=tt38961988&apikey=1c12799f&s=titanic&page=1",
    );
    const data = await response.json();
    return data; // should include { Search: [...] }
  } catch (error) {
    console.error("Error fetching API data:", error);
    return { Search: [] }; // return empty array on error
  }
};

export default GetAPIData;
