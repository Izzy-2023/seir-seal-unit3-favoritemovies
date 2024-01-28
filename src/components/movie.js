// src/components/Movie.js

import React from 'react';

const Movie = ({ name, year, rating, image }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>Year: {year}</p>
      <p>Rating: {rating}</p>
      <img src={image} alt={name} />
    </div>
  );
};

export default Movie;
