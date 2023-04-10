import { styled } from '@mui/system';
import { Grid, Typography } from '@mui/material';

export const StyledDiv = styled('div')({
  display: 'flex',
  height: '100%',
});

export const StyledMovie = styled(Grid)(({ theme }) => ({
  padding: '10px',
}));

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
