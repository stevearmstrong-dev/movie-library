import { styled } from '@mui/system';
import Link from '@mui/material/Link';

export const ImageLink = styled('main')({
  display: 'flex',
  justifyContent: 'center',
  padding: '10% 0',
});

export const Image = styled('img')({
  width: '70%',
});

export const StyledLinks = styled(Link)(({ theme }) => ({
  color: theme.palette.text.primary,
  textDecoration: 'none',
}));

export const StyledImages = styled('img')(({ theme }) => ({
//   width: '70%',
  // This allows the image to be inverted when the theme is dark
  filter: theme.palette.mode === 'dark' && 'invert(1)',
}));
