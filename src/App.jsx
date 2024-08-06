import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = async (query) => {
    setSearchQuery(query);
    try {
      const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=039ae0713b0189a47ef7f54913e70d22&query=${query}`);
      const data = await response.json();
      setMovies(data.results || []);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  useEffect(() => {
    const fetchPopularMovies = async () => {
      try {
        const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=039ae0713b0189a47ef7f54913e70d22');
        const data = await response.json();
        setPopularMovies(data.results || []);
      } catch (error) {
        console.error('Error fetching popular movies:', error);
      }
    };

    fetchPopularMovies();
  }, []);

  return (
    <div className="App flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <SearchBar onSearch={handleSearch} />
        {searchQuery ? (
          <div className="search-results-section p-4 bg-gray-800">
            <h2 className="text-2xl font-semibold text-white mb-4">Search Results</h2>
            <MovieList movies={movies} />
          </div>
        ) : (
          <div className="popular-movies-section p-4 bg-gray-900">
            <h2 className="text-2xl font-semibold text-white mb-4">Popular Movies</h2>
            <MovieList movies={popularMovies} />
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default App;
