import { useLoaderData } from "react-router-dom";
import { Card } from "../component/ui/Card";

export const Movie = () => {
 const movieData = useLoaderData(); 
  console.log(movieData);

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {movieData.Search.map((curMovie) => (
        <Card key={curMovie.imdbID} curMovie={curMovie} />
      ))}
    </ul>
  );
};
