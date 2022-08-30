import React from 'react';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Toolbar, Typography } from '@mui/material';

export default function Navbar(props) {
  return (
    
    <AppBar
        position="fixed"
        sx={{
          width: { sm: `${!props.open ? "calc(100% - 240px)" : "calc(100% - 80px)"}` },
          ml: { sm: `calc(100% - 80px)` },
          animationDuration: '300ms',
        }}
      >
        <Toolbar>
          <IconButton
            onClick={() => props.setOpen(!props.open)} 
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
  )
}
