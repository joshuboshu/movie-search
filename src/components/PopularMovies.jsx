import React from 'react';
import MovieCard from './MovieCard';

const PopularMovies = ({ movies }) => {
  return (
    <section className="p-4 bg-card-bg rounded-lg shadow-md mb-8">
      <h2 className="text-2xl font-bold mb-4 text-text-primary">Popular Movies</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <MovieCard
              key={movie.id}
              title={movie.title}
              poster_path={movie.poster_path}
              overview={movie.overview}
            />
          ))
        ) : (
          <p className="text-text-secondary">No popular movies available at the moment.</p>
        )}
      </div>
    </section>
  );
};

export default PopularMovies;
