import React, { useState, useEffect } from 'react';
import { TextField, InputAdornment } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { SearchContainer, StyledInput } from './styles';

const Search = () => {
  console.log('Search');
  const [query, setQuery] = useState('');

  const handleKeyPress = () => {

  };
    <SearchContainer>
      <TextField
        onKeyPress={handleKeyPress}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        variant="standard"
        InputProps={{
          className: <StyledInput />,
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </SearchContainer>;
};

export default Search;
