import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function Loader() {
  return (
    <Box
      sx={{
        display: 'grid',
        width: '100%',
        height: '100vh',
        placeContent: 'center',
      }}
    >
      <CircularProgress />
    </Box>
  );
}
