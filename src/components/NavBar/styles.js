import { styled } from '@mui/system';
import { IconButton } from '@mui/material';

export const StyledDiv = styled('div')({
  display: 'flex',
  height: '100%',
});

export const StyledMain = styled('main')({
  flexGrow: 1,
  padding: '2em',
});

export const StyledToolbar = styled('div')(({ theme }) => ({
  height: '80px',
  display: 'flex',
  justifyContent: 'space-between',
  marginLeft: '240px',
  [theme.breakpoints.down('sm')]: {
    marginLeft: '10px',
    flexWrap: 'wrap',
  },
}));

export const MenuButton = styled(IconButton)(({ theme }) => ({
  marginRight: theme.spacing(2),
  // The styles are applied only to devices with screensize above small.
  // This button is therefore hidden on every device which is not a mobile device.
  [theme.breakpoints.up('sm')]: {
    display: 'none',
  },
}));

export const LinkButton = styled(IconButton)(({theme})=>({
}));
