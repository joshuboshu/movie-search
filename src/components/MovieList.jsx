import React from 'react';
import { motion } from 'framer-motion';

const MovieList = ({ movies }) => {
  return (
    <div className="movie-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {movies.length > 0 ? (
        movies.map((movie) => (
          <motion.div
            key={movie.id}
            className="movie-card bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105"
          >
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
              className="w-full h-80 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-white mb-2">{movie.title}</h3>
              <p className="text-gray-400">{movie.release_date}</p>
            </div>
          </motion.div>
        ))
      ) : (
        <p className="text-white">No movies found.</p>
      )}
    </div>
  );
};

export default MovieList;
