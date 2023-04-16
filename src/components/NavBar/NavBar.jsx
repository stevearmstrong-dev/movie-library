import React, { useState, useContext } from 'react';
import { AppBar, IconButton, Toolbar, Drawer, Button, Avatar, useMediaQuery } from '@mui/material';
import { Menu, AccountCircle, Brightness4, Brightness7 } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import { StyledDiv, StyledMain, StyledToolbar, MenuButton, StyledGroup, ThemeToggleButton, NavDrawer, DrawerPaper } from './styles';
import Sidebar from '../Sidebar/Sidebar';
import Search from '../Search/Search';
import { ColorModeContext } from '../../utils/ToggleColorMode';

const NavBar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  console.log('NavBar');
  // If the screen is less than 600px wide, then the media query will return true
  const isMobile = useMediaQuery('(max-width: 600px)');
  const theme = useTheme();
  const isAuthenticated = true;
  const colorMode = useContext(ColorModeContext);
  return (
    <>
      <AppBar position="fixed">
        <StyledToolbar>
          {isMobile && (
          <MenuButton
            color="inherit"
            edge="start"
            style={{ outline: 'none' }}
            onClick={() => setMobileOpen((prevMobileOpen) => !prevMobileOpen)}
          >
            <Menu />
          </MenuButton>
          )}
          <ThemeToggleButton
            edge="start"
            style={{ outline: 'none' }}
            color="inherit"
            sx={{ ml: 1 }}
            onClick={colorMode.toggleColorMode}
          >
            {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
          </ThemeToggleButton>
          <StyledGroup>
            {!isMobile && <Search />}
          </StyledGroup>
          <StyledGroup>
            {!isAuthenticated ? (
              <Button color="inherit" onClick={() => {}}>
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
          {/* Before */}
          {/* {isMobile && 'Search...'} */}
          {isMobile && (
          <Toolbar>
            <StyledGroup>
              <Search />
            </StyledGroup>
          </Toolbar>
          )}

        </StyledToolbar>

      </AppBar>
      <div>
        <NavDrawer>
          {isMobile ? (
            <Drawer
              variant="temporary"
              anchor="left"
              open={mobileOpen}
              onClose={() => setMobileOpen((prevMobileOpen) => !prevMobileOpen)}
              classes={{ paper: DrawerPaper }}
              ModalProps={{ keepMounted: true }}
            >
              <Sidebar setMobileOpen={setMobileOpen} />
            </Drawer>
          ) : (
            // Below code is for desktop view
            <Drawer
              classes={{
                paper: DrawerPaper }}
                // because we always want the sidebar visible
              variant="permanent"
              // sidebar is now present on the left side of the app
              anchor="left"
              ModalProps={{ keepMounted: true }}
              open
            >
              <Sidebar setMobileOpen={setMobileOpen} />
            </Drawer>
          )}
        </NavDrawer>
      </div>
    </>

  );
};

export default NavBar;
