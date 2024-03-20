import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from '@mui/material';

export default function Nav() {
  return (
    <Box sx={{ flexGrow: 1, height:"40px"}}>
      <AppBar position="fixed" sx={{bgcolor:"black"}}>
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography variant="h4" color="inherit" component="div" align='center'>
          𝓕𝓞𝓡𝓜-𝓓𝓐𝓣𝓐
          </Typography>
          {/* <Link to={'/'}><Typography variant="h4" color="inherit" component="div">
          BACK
          </Typography></Link> */}
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}