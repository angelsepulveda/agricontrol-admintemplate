import React from 'react';
import { Typography, Paper } from '@mui/material';

export default function Content() {
  return (
    <Paper sx={{ maxWidth: "90%", margin: 'auto', overflow: 'hidden' }}>
      <Typography sx={{ my: 5, mx: 2 }} color="text.secondary" align="center">
        No users for this project yet
      </Typography>
    </Paper>
  )
}
