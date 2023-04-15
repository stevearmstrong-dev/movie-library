import React, { useEffect } from 'react';
import { Divider, List, ListItem, ListItemText, ListSubheader, ListItemIcon, Box, CircularProgress } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import { ImageLink, StyledLinks, StyledImages } from './styles';
import StevieMovieLogoNew from '../../assets/StevieMovieLogoNew.png';
import { useGetGenresQuery } from '../../services/TMDB';
import assetsIcons from '../../assets/Genres';
import { selectGenreOrCategory } from '../../features/currentGenreOrCategory';

// const redLogo = 'https://fontmeme.com/permalink/210930/8531c658a743debe1e1aa1a2fc82006e.png';

// const blueLogo = 'https://fontmeme.com/permalink/210930/6854ae5c7f76597cf8680e48a2c8a50a.png';

// dummy data
// const demoCategories = [
//   { label: 'Comedy', value: 'Comedy' },
//   { label: 'Action', value: 'Action' },
//   { label: 'Horror', value: 'Horror' },
//   { label: 'Animation', value: 'Animation' },
// ];

const categories = [
  { label: 'Popular', value: 'popular' },
  { label: 'Top Rated', value: 'top_rated' },
  { label: 'Upcoming', value: 'upcoming' },
];
const redLogo = StevieMovieLogoNew;
const blueLogo = StevieMovieLogoNew;
const logoStyle = {
  width: '240px',
  height: '80px',
  display: 'flex',
  flexShrink: 0,
};

const Sidebar = ({ setMobileOpen }) => {
  const theme = useTheme();
  const { data, isFetching } = useGetGenresQuery();
  const dispatch = useDispatch();
  const { genreIdOrCategoryName } = useSelector((state) => state.currentGenreOrCategory);

  console.log(genreIdOrCategoryName);
  return (
    <>
      <StyledLinks to="/">
        {/* Displays two different logos of our app based on light theme and dark theme */}
        <img
        //   src={theme.palette.mode === 'light' ? redLogo : blueLogo}
          src={theme.palette.mode === 'light' ? redLogo : blueLogo}
          alt="StevieMovie"
          style={logoStyle}
        />
        {/* <img
        //   src={theme.palette.mode === 'light' ? redLogo : blueLogo}
          src={theme.palette.mode === 'light' ? redLogo : blueLogo}
          alt="StevieMovie"
        /> */}
      </StyledLinks>
      <Divider />
      <List>
        <ListSubheader>Genres</ListSubheader>
        {isFetching ? (
          <Box display="flex" justifyContent="center">

            <CircularProgress />
          </Box>
        ) : data.genres.map(({ name, id }) => (
          <StyledLinks key={name} to="/">
            {/* We are creating only one list item instead of many list items.This is achieved by using an Array to loop through */}
            <ListItem onClick={() => dispatch(selectGenreOrCategory(id))} button>
              <ListItemIcon>
                <StyledImages src={assetsIcons[name.toLowerCase()]} height={30} />

              </ListItemIcon>
              <ListItemText primary={name} />
            </ListItem>
          </StyledLinks>
        ))}
      </List>
      <Divider />
      <List>
        <ListSubheader>Categories</ListSubheader>
        {categories.map(({ label, value }) => (
          <StyledLinks key={value} to="/">
            {/* We are creating only one list item instead of many list items.This is achieved by using an Array to loop through */}
            <ListItem onClick={() => dispatch(selectGenreOrCategory(value))} button>
              <ListItemIcon>
                <StyledImages src={assetsIcons[label.toLowerCase()]} height={30} />
              </ListItemIcon>
              <ListItemText primary={label} />
            </ListItem>
          </StyledLinks>
        ))}
      </List>
    </>
  );
};

export default Sidebar;
