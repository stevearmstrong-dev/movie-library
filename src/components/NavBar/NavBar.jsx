import React from 'react';
import { AppBar, IconButton, Toolbar,Drawer, Button, Avatar, useMediaQuery } from '@mui/material';
import { Menu, AccountCircle, Brightness4, Brightness7 } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { StyledDiv, StyledMain, StyledToolbar, MenuButton, StyledGroup, ThemeToggleButton } from './styles';
import { useTheme }from '@mui/material/styles';

const NavBar = () => {
  console.log('NavBar');
  // If the screen is less than 600px wide, then the media query will return true
  const isMobile = useMediaQuery('(max-width: 600px)');
  const theme = useTheme();
  const isAuthenticated = true;
  return (
    <>
      <AppBar position="fixed">
        <StyledToolbar>
          {isMobile && (
          <MenuButton
            color="inherit"
            edge="start"
            style={{ outline: 'none' }}
            onClick={() => {}}
          >
            <Menu />
          </MenuButton>
          )}
          <ThemeToggleButton
            edge="start"
            style={{ outline: 'none' }}
            color="inherit"
            sx={{ ml: 1 }}
            onClick={() => {}}
          >
            {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
          </ThemeToggleButton>
          <StyledGroup>
            {!isMobile && 'Search...'}
          </StyledGroup>
          <StyledGroup>
            {!isAuthenticated ? (
              <Button color="inherit" onClick={()=>{}}>
                {/* nbsp stands for a space between the login button and the icon */}
                Login &nbsp; <AccountCircle />
              </Button>
            ) : (
              <Button
                color="inherit"
                component={Link}
                to={`/profile/:id`}
                onClick={() => {}}
              >
                {!isMobile && <>My Movies &nbsp;</>}
                <Avatar
                  style={{ width: 30, height: 30 }}
                  alt="Profile"
                  src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
                />
              </Button>
            )}
          </StyledGroup>
          {/* If we are on mobile, show the search last */}
          {isMobile && 'Search...'}
        </StyledToolbar>

      </AppBar>
    </>

  );
};

export default NavBar;
