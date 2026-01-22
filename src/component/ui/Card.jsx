export const Card = ({ curMovie }) => {
  const { Title, Poster, imdbID, Year, Type } = curMovie;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105 hover:shadow-xl">
      <img src={Poster} alt={Title} className="w-full h-80 object-cover" />
      <div className="p-4 space-y-2">
        <h3 className="text-lg font-semibold text-gray-800">{Title}</h3>
        <p className="text-sm text-gray-600">📅 Year: {Year}</p>
        <p className="text-sm text-gray-600">🎬 Type: {Type}</p>
        <p className="text-xs text-gray-400">IMDB ID: {imdbID}</p>
      </div>
    </div>
  );
};
