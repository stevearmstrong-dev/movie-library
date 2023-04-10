import React from 'react';
import { Typography, Grow, Tooltip, Rating } from '@mui/material';
import { Link } from 'react-router-dom';
import { StyledMovie, Title } from './styles';

const Movie = ({ movie, index }) => {
  console.log(movie, index);
  return (
    <StyledMovie item xs={12} sm={6} md={4} lg={3} xl={2}>
      <Title variant="h5">
        {movie.title}
      </Title>
    </StyledMovie>
  );
};
export default Movie;
