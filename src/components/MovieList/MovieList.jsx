import React from 'react';
import { Grid } from '@mui/material';

import { StyledMoviesContainer } from './styles';
import Movie from '../Movie/Movie';

const MovieList = ({ movies }) => {
  console.log('Movie List');
  return (
    <StyledMoviesContainer>
      {movies.results.map((movie, index) => (
        <Movie key={index} movie={movie} index={index} />
      ))}
    </StyledMoviesContainer>
  );
};

export default MovieList;
