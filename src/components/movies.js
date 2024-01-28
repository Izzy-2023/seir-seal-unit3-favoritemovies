// src/components/Movies.js

import React from 'react';
import Movie from '../components/movie'; // Import the Movie component

const Movies = ({ movies }) => {
  return (
    <div>
      <h2>Movies</h2>
      <ul>
        {movies.map((movie, index) => (
          <Movie key={index} {...movie} />
        ))}
      </ul>
    </div>
  );
};

export default Movies;
