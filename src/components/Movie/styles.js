import { styled } from '@mui/system';
import { Grid, Link, Typography } from '@mui/material';

export const StyledDiv = styled('div')({
  display: 'flex',
  height: '100%',
});

export const StyledMovie = styled(Grid)({
  padding: '10px',
  display: 'flex',
});

export const Title = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  textOverflow: 'ellipsis',
  width: '230px',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  marginTop: '10px',
  marginBottom: 0,
  textAlign: 'center',
}));

export const StyledLinks = styled(Link)(({ theme }) => ({
  // color: theme.palette.text.primary,
  // textDecoration: 'none',
  alignItems: 'center',
  fontWeight: 'bolder',
  textDecoration: 'none',
  [theme.breakpoints.up('xs')]: {
    display: 'flex',
    flexDirection: 'column',
  },
  '&:hover': {
    cursor: 'pointer',
  },
}));

export const StyledImages = styled('img')(({ theme }) => ({
  //   width: '70%',
  borderRadius: '20px',
  height: '300px',
  marginBottom: '10px',
  '&:hover': {
    transform: 'scale(1.05)',
  },
}));
