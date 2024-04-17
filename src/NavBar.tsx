import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export const NavBar = ({children} : {children?: JSX.Element | JSX.Element[] | boolean | null})  => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
        <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            INSONIX
          </Typography>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Meta mask React App
          </Typography>
          {children}
        </Toolbar>
      </AppBar>
    </Box>
  );
}