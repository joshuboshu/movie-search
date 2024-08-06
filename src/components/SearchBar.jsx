import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (query.length > 2) {
      fetch(`https://api.example.com/suggestions?query=${query}`)
        .then(response => response.json())
        .then(data => setSuggestions(data))
        .catch(error => console.error('Error fetching suggestions:', error));
    } else {
      setSuggestions([]);
    }
  }, [query]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (query.trim()) {
      setLoading(true);
      onSearch(query)
        .catch(err => setError('Error fetching movies. Please try again.'))
        .finally(() => setLoading(false)); // Manejo del estado de carga
      setQuery('');
      setSuggestions([]);
      setError('');
    }
  };

  return (
    <div className="p-4 bg-card-bg rounded-lg shadow-lg mb-8 mx-auto max-w-4xl">
      <form onSubmit={handleSubmit} className="relative flex items-center">
        <div className="relative flex-grow">
          <input
            type="text"
            placeholder="Search for movies..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full px-5 py-3 bg-gray-800 text-text-primary rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary transition-transform duration-300 ease-in-out text-lg placeholder:text-gray-400"
          />
          <FaSearch className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-400 text-lg" />
          {suggestions.length > 0 && (
            <div className="absolute top-full mt-2 bg-gray-700 rounded-lg shadow-lg w-full">
              {suggestions.map((suggestion, index) => (
                <div key={index} className="p-2 hover:bg-gray-600 cursor-pointer">
                  {suggestion}
                </div>
              ))}
            </div>
          )}
        </div>
        <button
          type="submit"
          className="bg-primary text-white px-6 py-3 rounded-r-lg hover:bg-hover-bg transition-transform duration-300 ease-in-out flex items-center text-lg"
        >
          {loading ? <span>Loading...</span> : 'Search'}
        </button>
      </form>
      {error && <p className="text-red-500 mt-2 text-center">{error}</p>}
    </div>
  );
};

export default SearchBar;
