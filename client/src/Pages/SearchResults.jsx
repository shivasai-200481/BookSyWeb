import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

const SearchResults = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("query");
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (query) {
      axios.get(`${import.meta.env.VITE_BACKEND_URL}/book/find/search?query=${query}`)
        .then(res => setResults(res.data))
        .catch(err => console.log(err));
    }
  }, [query]);

  return (
    <div className="p-4 max-w-screen-xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Results for "<span className="text-indigo-600">{query}</span>"
      </h2>

      {results.length === 0 ? (
        <p className="text-center text-gray-500">No books found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {results.map(book => (
            <div
              key={book._id}
              onClick={() => navigate(`/book/${book._id}`)}
              className="bg-white rounded-xl shadow-md p-4 cursor-pointer transition hover:shadow-lg"
            >
              <img
                src={book.image}
                alt={book.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800">{book.name}</h3>
              <p className="text-gray-600">{book.title}</p>
            </div>
          ))}
        </div>
      )}

      <div className="mt-8 text-center">
        <NavLink to="/courses">
          <button className="px-6 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition">
            Back to Courses
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default SearchResults;
