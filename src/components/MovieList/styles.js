import { styled } from '@mui/system';
import { Grid } from '@mui/material';

export const StyledDiv = styled('div')({
  display: 'flex',
  height: '100%',
});

export const StyledMoviesContainer = styled(Grid)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  overflow: 'auto',
  [theme.breakpoints.down('sm')]: {
    justifyContent: 'center',
  },
}));
