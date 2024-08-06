import React from 'react';

const MovieCard = ({ title, poster_path, overview }) => {
  return (
    <div className="bg-card-bg p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 animate-scale-up">
      <img
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt={title}
        className="w-full h-80 object-cover rounded-md mb-4 hover:scale-105 transition-transform duration-300"
      />
      <h2 className="text-xl font-semibold mb-2 text-text-primary">{title}</h2>
      <p className="text-text-secondary">{overview}</p>
    </div>
  );
};

export default MovieCard;
