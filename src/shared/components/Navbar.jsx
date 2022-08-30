import { AppBar,Toolbar,Typography } from '@mui/material'
import React from 'react';


export default function Navbar() {

  return (
    <div>
      <AppBar position="fixed" color="primary">
        <Toolbar variant="dense">
          <Typography variant="h6">AgriControl</Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
